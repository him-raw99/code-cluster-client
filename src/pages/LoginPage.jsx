import React, { useState } from 'react'
import Footer from '../components/HomePageComponents/Footer'
import Navbar from '../components/HomePageComponents/Navbar'
import LoginForm from '../components/LoginPageComponents/LoginForm'
import SignUpForm from '../components/LoginPageComponents/SignUpForm';
import { useSelector } from 'react-redux';
import LoadingModal from '../components/LoginPageComponents/LoadingModal';
import SnackBar from '../components/LoginPageComponents/SnackBar';

function LoginPage() {
  const [newUser,setNewUser] = useState(false) ;
  const { isLoading , message } = useSelector((store) => store.auth);
  return (
    <>
      <div className="login__body">
      <Navbar/>
      {!newUser?<LoginForm setNewUser={setNewUser} />:<SignUpForm setNewUser={setNewUser} />}
      {isLoading&&<LoadingModal/>}
      {(!isLoading && message!="")&&<SnackBar/>}
      
      <Footer/>
      </div>
    </>
    
  )
}

export default LoginPage