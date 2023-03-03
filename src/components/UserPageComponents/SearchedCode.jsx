import React, { useState, useEffect } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function SearchedCode(props) {
    const navigate = useNavigate();
    return (
      <>
        <div className="form-container">
          <h1 className="newCodeForm-title">Code</h1>
          <TextField
            id="outlined-basic"
            margin="normal"
            placeholder="Add a title"
            label="Title"
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
            minRows={4}
            required
            fullWidth
          />
          <br />
          <br />
          <div className="button-holder-newCode">
            <Button
              variant="contained"
              color="success"
              endIcon={<SaveAsIcon />}
              sx={{ marginRight: "1.5rem" }}
              size="large"
              onClick={() => {
                navigate("/login");
              }}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              endIcon={<CloseIcon />}
              onClick={() => {
                navigate("/search/"+props.user);
              }}
              color="warning"
              size="large"
            >
              Close
            </Button>
          </div>
        </div>
      </>
    )
}

export default SearchedCode;