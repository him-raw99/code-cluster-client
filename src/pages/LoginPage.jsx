import React, { useState } from 'react'
import Footer from '../components/HomePageComponents/Footer'
import Navbar from '../components/HomePageComponents/Navbar'
import LoginForm from '../components/LoginPageComponents/LoginForm'
import SignUpForm from '../components/LoginPageComponents/SignUpForm';

function LoginPage() {
  const [newUser,setNewUser] = useState(false) ;
  return (
    <>
      <div className="login__body">
      <Navbar/>
      {!newUser?<LoginForm setNewUser={setNewUser} />:<SignUpForm/>}
      <Footer/>
      </div>
    </>
    
  )
}

export default LoginPage