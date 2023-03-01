import React from 'react'
import DashboardNavbar from "../components/DashboardComponents/DashboardNavbar";
import Footer from "../components/HomePageComponents/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
    const navigate = useNavigate();
  const {isLogin,token} = useSelector((state) => state.auth);

    useEffect(() => {
        if (!isLogin) {
          navigate("/login");
        }
      }, [isLogin]);
  return (
  <>
  <DashboardNavbar/>
    Profile page

    <Footer/>

    </>
  )
}

export default Profile