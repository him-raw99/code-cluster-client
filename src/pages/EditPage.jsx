import React from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditPageComponents/EditForm";

function EditPage() {
  const { id } = useParams();
  return (
    <>
    <EditForm id={id}/>
    </>
  );
}

export default EditPage;
