import React from "react";
import { CircularProgress } from "@mui/material";
function LoadingModal() {
  return (
    <>
        <div className="loading_modal">
            <div className="loader"><CircularProgress /></div>
        </div>
    </>
  );
}

export default LoadingModal;
