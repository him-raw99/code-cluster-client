import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditForm.css"

function NewCodeForm() {
  const [code, setCode] = useState({ title: "", code: "", isPublic: false });
  function handleChange(event) {
    const { name, value } = event.target;
    setCode((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function makePublic(){
    setCode((prevVal)=>{return {...prevVal,isPublic:!prevVal.isPublic}})
  }
  const navigate = useNavigate();
  return (
    <>
      title
      <textarea
        type="text"
        name="title"
        value={code.title}
        onChange={handleChange}
      />
      <br />
      code
      <textarea
        style={{ width: "50rem", height: "10rem" }}
        type="text"
        name="code"
        className="newLine"
        value={code.code}
        onChange={handleChange}
      />
      <br />
      make public
      <label className="container" >
        <input onChange={makePublic} type="checkbox" />
        <div className="checkmark"></div>
      </label>
      <div
        className="btn btn-primary"
        onClick={() => {
          console.log(code);
        }}
      >
        save
      </div>
      <div
        className="btn btn-primary"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        close
      </div>
    </>
  );
}

export default NewCodeForm;
