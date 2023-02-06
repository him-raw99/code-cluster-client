import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newCode, reset } from "../../features/editCode/editCodeSlice";
import "./EditForm.css"

function NewCodeForm() {
  const [code, setCode] = useState({ title: "", code: "", isPublic: false });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useSelector((store)=>store.auth);
  const { isLoading, backToDashboard } = useSelector(
    (store) => store.editCode
  );

  useEffect(() => {
      backToDashboard && navigate("/dashboard");
  }, [isLoading]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCode((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function makePublic(){
    setCode((prevVal)=>{return {...prevVal,isPublic:!prevVal.isPublic}})
  }

  function handelSubmit(){
    dispatch(newCode({token,code}));
  }
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
        onClick={handelSubmit}
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
