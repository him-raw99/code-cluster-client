import React from "react";
import Footer from "../components/HomePageComponents/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CardContainer from "../components/DashboardComponents/CardContainer";
import AssistBall from "../components/DashboardComponents/AssistBall";
import DashboardNavbar from "../components/DashboardComponents/DashboardNavbar";


function Dashboard() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.isLogin);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);


  return (
    <>
      <DashboardNavbar/>
      <CardContainer/>
      <AssistBall/>
      <Footer />
    </>
  );
}

export default Dashboard;
