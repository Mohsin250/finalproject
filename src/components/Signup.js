import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {


    const empty={
        name:"",
        email:"",
        password:""
        
    }
    const [handle,setHandle]=useState(empty)
    const gym_handler=(e)=>
    {
        const {name,value}=e.target;
        setHandle({...handle,[name]:value})
        console.log(handle)
    }
    
    const gymsignup=async()=>{
      console.log("Signup Clicked")
        if(handle.name===""||handle.email === ""||handle.password==="")
        {
            alert("Please enter the input fields first")
        }
        else{
            let record= await fetch("http://localhost:4000/signup",{
                method:"POST",
                headers:{
                    "content-Type":"application/json",
                },
                body:JSON.stringify(handle)
            })
            record= await record.json()
            if(record.message==="User Email is Already Exist")
            {
                alert("User Email is Already Exist");
            }
            else{
    
                alert("User Created Successfully");
            }
        }
    }
  return (
    <div className='container'>
        <h2 className='text-center'>Create Your Account</h2>
        <label>Enter Your Name</label>
        <input type="text" name='name' onChange={gym_handler}  className='form-control'/>
        <label>Enter Your Email</label>
        <input type="email" name='email' onChange={gym_handler} className='form-control'/>
        <label>Enter Your Password</label>
        <input type="text" name='password' onChange={gym_handler} className='form-control'/>
        <button
        onClick={gymsignup}>Create</button>
    

    </div>
  )
}

export default Signup;