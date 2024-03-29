import React, { useEffect } from "react";
import DashboardNavbar from "../components/DashboardComponents/DashboardNavbar";
import NewCodeForm from "../components/EditPageComponents/NewCodeForm";
import Footer from "../components/HomePageComponents/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SnackBar from "../components/LoginPageComponents/SnackBar";
import Redirecting from "../components/LoginPageComponents/Redirecting";
import LoadingModal from "../components/LoginPageComponents/LoadingModal";
function NewCode() {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.auth);
  const { err, isLoading, success } = useSelector((state) => state.editCode);
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);
  return (
    <>
      {isLogin ? (
        <>
          <div className="new-code-body">
            <DashboardNavbar />
            <NewCodeForm />
            {isLoading && <LoadingModal />}
            {!isLoading && err != "" && (
              <SnackBar err={!success} message={err} />
            )}
            <Footer />
          </div>
        </>
      ) : (
        <Redirecting />
      )}
    </>
  );
}

export default NewCode;
