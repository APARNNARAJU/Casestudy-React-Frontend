import { Grid3x3 } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

    const[rows,setrows]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            setrows(res.data)
        }).catch((error)=>{
            console.log(error);
        })
        // .then((data)=>{
        //     console.log(data)
        // })
    })
  return (
    <div style={{display: "row",
  // 5 cards per row
  gap: "16px", margin:'4% 0% 0% 0%', paddingTop:'30px', paddingBottom:'30px', textAlign:'center',position:'fixed', left:'30px'
//   ,backgroundColor:'#389f9fff'
   }} >
        <Grid container spacing={3}>
            {rows.map((user)=>(
        <Grid>
                <Card style={{padding:'4px',border: "1px solid darkgreen", borderRadius:"12px", backgroundColor:"#f1f7f7ff"}}>
                    <CardMedia
        sx={{ height: 160 }}
        image="https://cdn-icons-png.flaticon.com/512/8053/8053471.png"
        title={user.name}
      />
      <CardContent>
        <Typography>
            Employee ID: {user.id}
        </Typography> <br /> 
        <Typography>
            Name: {user.name}
        </Typography>
        <Typography>
            Email: {user.email}
        </Typography>
      </CardContent>
                </Card>
                </Grid>
            ))}
        </Grid>
        
    </div>
  )
}

export default Home

