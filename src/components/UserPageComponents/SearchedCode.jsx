import React, { useState } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Popup from "../DashboardComponents/PopUp";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fab } from "@mui/material";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import { Tooltip } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function SearchedCode(props) {
    const [popup, setPopup] = useState(false);
    const navigate = useNavigate();
    const { code } = useSelector((state) => state.searchUser);
    const handleCopy = () => {
        setPopup(true);
        navigator.clipboard.writeText(code.code);
        handleClose();
    };
    return (
        <>
            {popup && (
                <Popup setPopup={setPopup} message={"Copied to clipboard!"} />
            )}
            <div className="form-container">
                <h1 className="newCodeForm-title">Code</h1>
                <TextField
                    id="outlined-basic"
                    margin="normal"
                    placeholder="Add a title"
                    label="Title"
                    variant="filled"
                    required
                    name="title"
                    value={code.title}
                    InputProps={{
                        readOnly: true,
                    }}
                    fullWidth
                />
                <br />
                <SyntaxHighlighter style={a11yDark}>
                    {code.code}
                </SyntaxHighlighter>
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
                            navigate("/search/" + props.user);
                        }}
                        color="warning"
                        size="large"
                    >
                        Close
                    </Button>
                </div>
            </div>
            <Tooltip title="Copy Code" placement="left" onClick={handleCopy}>
                <Fab
                    size="large"
                    aria-label="add"
                    sx={{
                        zIndex: "2",
                        float: "right",
                        position: "fixed",
                        right: "4%",
                        bottom: "10%",
                        padding: "2rem",
                    }}
                >
                    <CopyAllIcon sx={{ fontSize: "1.78rem" }} />
                </Fab>
            </Tooltip>
        </>
    );
}

export default SearchedCode;
