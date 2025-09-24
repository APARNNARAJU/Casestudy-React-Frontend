import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import './Style.css'

const Empform = (eform) => {

    const [form,setform]=useState(
        {id:11,name:'',designation:'',location:'',salary:0}
    )
    function capture() {
        console.log(form);
        setform({
      ...form,
      id: form.id + 1,   // increment id
      name: '',
      designation: '',
      location: '',
      salary: 0
    });
    }
  return (
    <div>
         <div style={{margin:'6% 30% 0% 30%', paddingTop:'30px', paddingBottom:'30px', textAlign:'center', backgroundColor:'#fdfdfdaa', border: "4px solid #3b615eaa", borderRadius:"12px"}}>
        <h3>CloudFare Employee Form</h3> <br />
        {/* <TextField id="outlined-basic"  label="Employee ID" name="id" onChange={(e)=>{
            setform({...form,id:e.target.value})
        }}  focused /> <br /> <br /> */}
        <TextField id="outlined-basic" label="Name" color='dark' name="name" onChange={(e)=>{
            setform({...form,name:e.target.value})
        }}  focused /> <br /> <br />
        <TextField id="outlined-basic" label="Designation" color='dark' name="designation" onChange={(e)=>{
            setform({...form,designation:e.target.value})
        }}   focused /> <br /> <br />
        <TextField id="outlined-basic" label="Location" color='dark' name="location" onChange={(e)=>{
            setform({...form,location:e.target.value})
        }}   focused /> <br /> <br />
        <TextField id="outlined-basic" label="Salary"  color='dark' name="salary" onChange={(e)=>{
            setform({...form,salary:e.target.value})
        }}   focused /> <br /> <br />
        
        <Button sx={{ backgroundColor: "#3b615e", color: "white", "&:hover": { backgroundColor: "#2a4745" } }} variant="contained" onClick={capture} >Submit</Button>
    </div> 
    </div>
  )
}

export default Empform