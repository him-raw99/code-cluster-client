import React from 'react'
import Footer from '../components/HomePageComponents/Footer'
import Navbar from '../components/HomePageComponents/Navbar'
import LoginForm from '../components/LoginPageComponents/LoginForm'

function LoginPage() {
  return (
    <>
      <div className="login__body">
      <Navbar/>
      <LoginForm/>
      <Footer/>
      </div>
    </>
    
  )
}

export default LoginPage