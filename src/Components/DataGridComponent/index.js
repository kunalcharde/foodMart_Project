import { Avatar, Button } from '@mui/material';
import Box from '@mui/material/Box';
import {
  DataGrid
} from '@mui/x-data-grid';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useStore } from '../../Store/FoodDataStore';
import { useNavigate } from 'react-router-dom';
const columns = [
  {
    field: 'avatar',
    headerName: 'Product',
    width: 150,
    renderCell: (params) => {
      console.log('value', params);
      return <Avatar src={params.row.avatar} />;
    },
  },
  {
    field: 'name',
    headerName: 'Product Name',
    width: 150,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
  },

  {
    field: 'stock',
    headerName: 'Stock',
    type: 'number',
    width: 150,
  },
  {
    field: 'price',
    headerName: 'Price',
    tyepe: 'number',
    width: 150,
  },
  {
    headerName: 'Product Details',
    width: 100,
    renderCell: ({ row }) =>
      <Button onClick={() => handleFunction(row)}>
         view Detail
      </Button>
  },
];


export default function DataGridDemo() {
  const [rows, setRows] = React.useState([]);
  const [highestPageCount, setHighestPageCount] = React.useState(0);
  const [totalResult, setTotalResult] = React.useState(0);
  const setData = useStore((state) => state.setData)
  const fetchingData = async (page) => {
    let fetchData = await fetch(
      `https://catalog-management-system-kxyaws5ixa-uc.a.run.app/cms/products?page=${page}`
    );
    let response = await fetchData.json();
    console.log(response);
    setTotalResult(response.totalResults);
    createRowData(response.products);
  };

  React.useEffect(() => {
    fetchingData(1);
  }, []);

  const handlePageChange = (item) => {
    if (highestPageCount < item.page + 1) {
      fetchingData(item.page + 1);
      setHighestPageCount(item.page + 1);
    }
  };

  function createRowData(data) {
    const temp = data.map((product) => {
      const obj = {
        id: uuidv4(),
        name: product.name,
        category: product.main_category,
        avatar: product.images.front || '',
        stock: product.sell_out_of_stock,
        price: product.mrp.mrp,
      };
      return obj;
    });
    setRows([...rows, ...temp]);
    setData([...rows,...temp])
  }

  const navigate = useNavigate()

  let handleFunction =(row)=>{
    navigate(`/details/:${row.id}`)
  }
  
  return (
    <Box sx={{ height: '800px', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 20 },
          },
        }}
        pageSizeOptions={[20]}
        onPaginationModelChange={(item) => {
          handlePageChange(item);
        }}
        rowCount={totalResult ? totalResult : 20}
      />
    </Box>
  );
}
