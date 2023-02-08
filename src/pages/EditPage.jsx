import React from "react";
import { useParams } from "react-router-dom";
import DashboardNavbar from "../components/DashboardComponents/DashboardNavbar";
import EditForm from "../components/EditPageComponents/EditForm";
import Footer from "../components/HomePageComponents/Footer";
import Loader from "../components/DashboardComponents/Loader"
import { useSelector } from "react-redux";

function EditPage() {
  const { isLoading } = useSelector((store) => store.editCode);
  const { id } = useParams();
  return (
    <>
      {isLoading && <Loader/>}
      <DashboardNavbar />
      <EditForm id={id} />
      <Footer />
    </>
  );
}

export default EditPage;
