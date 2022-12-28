import React from "react";
import Footer from "../components/HomePageComponents/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
      <h1>Welcome</h1>
      <Footer />
    </>
  );
}

export default Dashboard;
