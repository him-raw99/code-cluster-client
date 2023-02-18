import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardNavbar from "../components/DashboardComponents/DashboardNavbar";
import EditForm from "../components/EditPageComponents/EditForm";
import Footer from "../components/HomePageComponents/Footer";
import Loader from "../components/DashboardComponents/Loader";
import SnackBar from "../components/LoginPageComponents/SnackBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Redirecting from "../components/LoginPageComponents/Redirecting";
import DeleteModal from "../components/EditPageComponents/DeleteModal";

function EditPage() {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.auth);
  const { err, isLoading, success } = useSelector((store) => store.editCode);
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);
  const { id } = useParams();
  return (
    <>
      {isLogin ? (
        <>
          <DeleteModal id={id} />
          {isLoading && <Loader />}
          <DashboardNavbar />
          {!isLoading && err != "" && <SnackBar err={!success} message={err} />}
          <EditForm id={id} />
          <Footer />
        </>
      ) : (
        <Redirecting />
      )}
    </>
  );
}

export default EditPage;
