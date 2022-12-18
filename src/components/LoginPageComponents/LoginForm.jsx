import React from 'react'
import { Button, TextField } from '@mui/material'
function LoginForm() {
  return (
    <div className='login__form'>
      <TextField className='login-form-inputs' id="outlined-basic" label="Username" variant="outlined" margin='normal' fullWidth sx={{backgroundColor:"rgba(239, 239, 239, 0.461)"}} />
      <TextField className='login-form-inputs' id="outlined-basic" label="Password" type={"password"} variant="outlined" margin='normal' fullWidth sx={{backgroundColor:"rgba(239, 239, 239, 0.461)"}} />
      <Button variant='contained' color='success' sx={{marginTop:"5%"}} fullWidth>login</Button>
      <p className='signup__button'>not registered with us? <Button>SignUp Now</Button> </p>
    </div>
  )
}

export default LoginForm