import React from "react";
import DashboardNavbar from "../components/DashboardComponents/DashboardNavbar";
import Footer from "../components/HomePageComponents/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../features/dashboard/dashboardSlice";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
    else{
      dispatch(getProfile(token));
    }
  }, [isLogin]);
  return (
    <>
      <DashboardNavbar />
      Profile page
      <Footer />
    </>
  );
}

export default Profile;
