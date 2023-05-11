import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const  empty={
    email:"",
    password:""
  }


  // state for handle the login inputs
  
  const [handle, setHandle]= useState(empty)
  
  const gym_handler=(e)=>{
    const {name, value}= e.target;
    setHandle({...handle,[name]:value})
    e.preventDefault()
    console.log(handle)
  }
  
  
  //function for login
const gym_login=async()=>{
  console.log("Clicked");
  if(handle.email===""||handle.password===""){
    alert("Please Enter the Fields First")
  }else{
    try {
      let record= await fetch("http://localhost:4000/login",{
        method:"POST",
        headers:{
          "content-Type": "application/json",
         },
         body:JSON.stringify(handle)
      })
      record= await record.json()
      if(record.message==="Login Successfully"){
        // store id in SessionStorage
        sessionStorage.setItem("userId",record.LoginUser._id)
        sessionStorage.setItem("userEmail",record.LoginUser.email)
        alert("Login Successfully")
        window.location.href = "/plants"
  
      }else{
        alert("UserName And password is invalid")
      }
    } catch (error) {
      console.log(error);
      alert("There was an error logging in");
    }
  }
}

  return (

    <div className='container'>
        <h2 className='text-center'>Login Your Account</h2>
        <label>Enter Your Email</label>
        <input type="email" name='email' onChange={gym_handler}  className='form-control'/>
        <label>Enter Your Password</label>
        <input type="text" name='password' onChange={gym_handler} className='form-control'/>
        <Link to="/excr"><button onClick={gym_login}>Login</button></Link>

    </div>
  )
}

export default Login