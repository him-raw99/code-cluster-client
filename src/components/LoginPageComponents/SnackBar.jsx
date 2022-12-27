import React from "react";
import { Snackbar, Alert, Collapse } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
function SnackBar() {
    const {message , isLogin} = useSelector((store)=>store.auth);
    const [open, setOpen] = useState(true);
    // {(!isLoading && message!="")?<SnackBar/>:console.log("hehehhe")}
  return (
    <>
    <Collapse in={open}>
      <Snackbar open={open}  autoHideDuration={6000}>
        <Alert severity={isLogin?"success":"error"} onClose={() => {setOpen(false)}} variant="filled" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      </Collapse>
    </>
  );
}

export default SnackBar;
