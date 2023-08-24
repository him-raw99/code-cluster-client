import React from "react";
import DashboardNavbar from "../components/DashboardComponents/DashboardNavbar";
import Footer from "../components/HomePageComponents/Footer";
import Loader from "../components/DashboardComponents/Loader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../features/dashboard/dashboardSlice";
import ProfileContainer from "../components/ProfilePageComponents/ProfileContainer";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, token } = useSelector((state) => state.auth);
  const { isLoading, profile } = useSelector((state) => state.dashboard);
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else {
      dispatch(getProfile(token));
    }
  }, [isLogin]);
  return (
    <>
      {isLoading && <Loader />}
      <DashboardNavbar />
      
      <ProfileContainer profile={profile} />
      <NavLink to="/dashboard">
        <Button
          startIcon={<ArrowBackIcon />}
          variant={"contained"}
          color={"error"}
          size={"large"}
          sx={{
            padding: "0.7rem 1.7rem",
            marginLeft: "15%",
            marginTop: "3rem",
          }}
        >
          Back
        </Button>
      </NavLink>
      <Footer />
    </>
  );
}

export default Profile;
