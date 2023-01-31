import React from "react";
import { useParams } from "react-router-dom";
import DashboardNavbar from "../components/DashboardComponents/DashboardNavbar";
import EditForm from "../components/EditPageComponents/EditForm";
import Footer from "../components/HomePageComponents/Footer";

function EditPage() {
  const { id } = useParams();
  return (
    <>
    <DashboardNavbar/>
    <EditForm id={id}/>
    <Footer/>
    </>
  );
}

export default EditPage;
