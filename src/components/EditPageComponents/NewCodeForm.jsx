import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newCode } from "../../features/editCode/editCodeSlice";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import "./NewCodeForm.css";
import "./EditForm.css";

function NewCodeForm() {
  const [code, setCode] = useState({ title: "", code: "", isPublic: false });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.auth);
  const { isLoading, backToDashboard } = useSelector((store) => store.editCode);

  useEffect(() => {
    backToDashboard && navigate("/dashboard");
  }, [isLoading]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCode((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function makePublic() {
    setCode((prevVal) => {
      return { ...prevVal, isPublic: !prevVal.isPublic };
    });
  }

  function handelSubmit() {
    dispatch(newCode({ token, code }));
  }
  return (
    <>
      <div className="form-container">
        <h1 className="newCodeForm-title">New Code</h1>
        <TextField
          id="outlined-basic"
          margin="normal"
          placeholder="Add a title"
          label="Title"
          value={code.title}
          onChange={handleChange}
          variant="outlined"
          required
          name="title"
          fullWidth
        />
        <br />
        <TextField
          id="outlined-textarea"
          label="Code"
          placeholder="Write Code"
          multiline
          name="code"
          margin="normal"
          className="newLine"
          value={code.code}
          onChange={handleChange}
          minRows={4}
          required
          fullWidth
        />
        <br />
        <br />
        <FormControlLabel
          labelPlacement="start"
          control={
            <Switch
              onChange={() => {
                makePublic();
              }}
            />
          }
          label="Public"
          className="toggleButton"
          sx={{ marginLeft: "0" }}
        />
        <div className="button-holder-newCode">
          <Button
            variant="contained"
            color="success"
            endIcon={<SaveAsIcon />}
            onClick={handelSubmit}
            sx={{ marginRight: "1.5rem" }}
            size="large"
          >
            Save
          </Button>
          <Button
            variant="outlined"
            endIcon={<CloseIcon />}
            onClick={() => {
              navigate("/dashboard");
            }}
            color="warning"
            size="large"
          >
            Close
          </Button>
        </div>
      </div>
    </>
  );
}

export default NewCodeForm;
