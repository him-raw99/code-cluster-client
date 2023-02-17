import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import CloseIcon from "@mui/icons-material/Close";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import {
  close,
  deleteModal,
  getFullCode,
  updateCode,
} from "../../features/editCode/editCodeSlice";
import "./EditForm.css";

function EditForm(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  const { isLoading, codeState, backToDashboard } = useSelector(
    (store) => store.editCode
  );
  const [edittedCode, setEdittedState] = useState({
    title: "",
    code: "",
    isPublic: false,
  });
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

  function makePublic() {
    setEdittedState((prevVal) => {
      return { ...prevVal, isPublic: !edittedCode.isPublic };
    });
  }

  return (
    <>
      {!isLoading && (
        <>
          <div className="form-container">
            <h1 className="newCodeForm-title">Edit Code</h1>
            <TextField
              id="outlined-basic"
              margin="normal"
              placeholder="Add a title"
              label="Title"
              value={edittedCode.title || ""}
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
              value={edittedCode.code || ""}
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
                  checked={edittedCode.isPublic || false}
                  onChange={() => {
                    makePublic();
                  }}
                />
              }
              label="Public"
              className="toggleButton"
              sx={{ marginLeft: "0" }}
            />

            <div className="button-holder-newCode button-holder-editCode">
              <Button
                variant="contained"
                color="success"
                endIcon={<SaveAsIcon />}
                onClick={() => {
                  dispatch(updateCode({ token, id: props.id, edittedCode }));
                }}
                sx={{ marginRight: "1rem" }}
                size="large"
              >
                Save
              </Button>

              <Button
                variant="contained"
                endIcon={<DeleteIcon />}
                onClick={() => {
                dispatch(deleteModal());
              }}
              sx={{ marginRight: "1rem" }}
                color="error"
                size="large"
              >
                Delete
              </Button>
              <Button
                variant="outlined"
                endIcon={<CloseIcon />}
                onClick={() => {
                  dispatch(close());
                }}
                color="warning"
                size="large"
              >
                Close
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default EditForm;
