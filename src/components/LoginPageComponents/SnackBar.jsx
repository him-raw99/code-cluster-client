import React from "react";
import { Snackbar, Alert, Collapse } from "@mui/material";
import { useState } from "react";
function SnackBar(props) {
    const [open, setOpen] = useState(true);
    // {(!isLoading && message!="")?<SnackBar/>:console.log("hehehhe")}
  return (
    <>
    <Collapse in={open}>
      <Snackbar open={open}  autoHideDuration={6000}>
        <Alert severity={!props.err?"success":"error"} onClose={() => {setOpen(false)}} variant="filled" sx={{ width: "100%" }}>
          {props.message}
        </Alert>
      </Snackbar>
      </Collapse>
    </>
  );
}

export default SnackBar;
