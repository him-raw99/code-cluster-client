import React from "react";
import Footer from "../components/HomePageComponents/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CardContainer from "../components/DashboardComponents/CardContainer";
import AssistBall from "../components/DashboardComponents/AssistBall";
import DashboardNavbar from "../components/DashboardComponents/DashboardNavbar";
import Loader from "../components/DashboardComponents/Loader";
import EmptyDashboard from "../components/DashboardComponents/EmptyDashboard";
import SingleCodeModal from "../components/DashboardComponents/SingleCodeModal";


function Dashboard() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const {isLoading,codes} = useSelector((state) => state.dashboard);
  const {show} = useSelector((state) => state.editCode);
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);


  return (
    <>
      <div className="dashboard__body">
      {isLoading&&<Loader/>}
      <DashboardNavbar/>
      <CardContainer/>
      {codes.length===0&&<EmptyDashboard/>}
      <AssistBall/>
      <Footer />
      {show&&<SingleCodeModal/>}
      </div>
    </>
  );
}

export default Dashboard;
