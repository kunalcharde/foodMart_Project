import React,{useParams} from 'react'
import { useStore} from '../../Store/FoodDataStore'
import { Grid } from '@mui/material'

const DetailPage = () => {
  const data =  useStore((state)=> state.data)
   const {id} = useParams()
  return (
    <div>
      <Grid container xs={12} md={12}>
        <Grid item xs= {12} md ={12}>
      <image src={data.avatar} alt="Product Image"/>
      <h1>{data.name}</h1>
      <h2>{data.category}</h2>
      <p>{data.price}</p>
      </Grid>
      </Grid>
    </div>
  )
}

export default DetailPage
