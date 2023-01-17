import React from "react";
import Footer from "../components/HomePageComponents/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../components/DashboardComponents/CardContainer";
import AssistBall from "../components/DashboardComponents/AssistBall";
import DashboardNavbar from "../components/DashboardComponents/DashboardNavbar";
import Loader from "../components/DashboardComponents/Loader";
import EmptyDashboard from "../components/DashboardComponents/EmptyDashboard";
import SingleCodeModal from "../components/DashboardComponents/SingleCodeModal";
import { getCode } from "../features/dashboard/dashboardSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLogin,token} = useSelector((state) => state.auth);
  const {isLoading,codes,success} = useSelector((state) => state.dashboard);
  const {show} = useSelector((state) => state.editCode);
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
    else{
      dispatch(getCode(token));
    }
  }, [isLogin]);


  return (
    <>
      <div className="dashboard__body">
      {isLoading&&<Loader/>}
      <DashboardNavbar/>
      <CardContainer/>
      {success&&codes.length===0&&<EmptyDashboard/>}
      <AssistBall/>
      <Footer />
      {show&&<SingleCodeModal/>}
      </div>
    </>
  );
}

export default Dashboard;
