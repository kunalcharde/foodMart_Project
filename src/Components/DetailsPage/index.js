import React from 'react'
import { useStore} from '../../Store/FoodDataStore'
import { Grid } from '@mui/material'

const DetailPage = () => {
  // const data =  useStore((state)=> state.data)
  //  const {id} = useParams()
    // const filterData = data.filter((item)=> item.id === id)
  return (
    <div>
      {/* <Grid container xs={12} md={12}>
        <Grid item xs= {12} md ={12}>
      <image src={filterData.avatar} alt="Product Image"/>
      <h1>{filterData.name}</h1>
      <h2>{filterData.category}</h2>
      <p>{filterData.price}</p>
      </Grid>
      </Grid> */}
    </div>
  )
}

export default DetailPage
