import React from 'react'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
function LoginForm(props) {
  const [userData,setUserData]=useState({
    username:"",
    password:""
  });

  function handelChange(event){
    const {name,value}=event.target;
    setUserData(prevVal=>({...userData,[name]:value}));
  }
  
  function handelSubmit(){
    console.log(userData);
  }

  function handelNewUser(){
    props.setNewUser(true);
  }
  return (
    <div className='login__form'>
      <TextField onChange={handelChange}  name="username" className='login-form-inputs' label="Username" variant="outlined" margin='normal' fullWidth sx={{backgroundColor:"rgba(239, 239, 239, 0.461)"}} />
      <TextField  onChange={handelChange} name="password" className='login-form-inputs' label="Password" type={"password"} variant="outlined" margin='normal' fullWidth sx={{backgroundColor:"rgba(239, 239, 239, 0.461)"}} />
      <Button onClick={handelSubmit} variant='contained' color='success' sx={{marginTop:"5%"}} fullWidth>login</Button>
      <p className='signup__button'>not registered with us? <Button onClick={handelNewUser} >SignUp Now</Button> </p>
    </div>
  )
}

export default LoginForm