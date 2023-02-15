import React, { useEffect } from "react";
import DashboardNavbar from "../components/DashboardComponents/DashboardNavbar";
import NewCodeForm from "../components/EditPageComponents/NewCodeForm";
import Footer from "../components/HomePageComponents/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SnackBar from "../components/LoginPageComponents/SnackBar";
import Redirecting from "../components/LoginPageComponents/Redirecting";
function NewCode() {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.auth);
  const { err, isLoading , success } = useSelector((state) => state.editCode);
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);
  return (
    <>
      {isLogin?<>
        <DashboardNavbar />
        <NewCodeForm />
        {!isLoading && err != "" && <SnackBar err={success} message={err} />}
        <Footer />
      </>:<Redirecting />}
    </>
  );
}

export default NewCode;
