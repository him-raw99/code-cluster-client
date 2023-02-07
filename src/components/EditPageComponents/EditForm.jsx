import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { close, deleteCode, getFullCode, updateCode } from "../../features/editCode/editCodeSlice";
import Loader from "../DashboardComponents/Loader";
import "./EditForm.css"

function EditForm(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  const { isLoading, codeState, backToDashboard } = useSelector(
    (store) => store.editCode
  );
  const [edittedCode, setEdittedState] = useState({title:"",code:"",isPublic:false});
  useEffect(() => {
    dispatch(getFullCode({ token, id: props.id }));
  }, []);

  useEffect(() => {
    setEdittedState(codeState);
    {
      backToDashboard && navigate("/dashboard");
    }
  }, [isLoading]);

  function handleChange(event) {
    const { name, value } = event.target;
    setEdittedState((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function makePublic(){
    setEdittedState((prevVal)=>{return {...prevVal,isPublic:!edittedCode.isPublic}})
  }

  return (
    <>
      {isLoading && <Loader />}
      <textarea
        type="text"
        name="title"
        value={edittedCode.title}
        onChange={handleChange}
      />
      <br />
      <textarea
        style={{ width: "50rem", height: "10rem" }}
        type="text"
        name="code"
        className="newLine"
        value={edittedCode.code}
        onChange={handleChange}
      />
      <br />
      <label className="container" >
        <input checked={edittedCode.isPublic} onChange={makePublic} type="checkbox" />
        <div className="checkmark"></div>
      </label>
      <br/>
      <div
        className="btn btn-primary"
        onClick={() => {
          dispatch(updateCode({ token, id: props.id, edittedCode }));
        }}
      >
        save
      </div>
      <div
        className="btn btn-primary"
        onClick={() => {
          dispatch(close());
        }}
      >
        close
      </div>
      <div
        className="btn btn-danger"
        onClick={() => {
          dispatch(deleteCode({id:props.id,token}));
        }}
      >
        dlt
      </div>
    </>
  );
}

export default EditForm;
