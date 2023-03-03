import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import Backdrop from '@mui/material/Backdrop';
import AddIcon from '@mui/icons-material/Add';
import Popup from "./PopUp";
import "./AssistBall.css"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


function AssistBall() {
  const {username} = useSelector((store)=>store.dashboard);
  const [open, setOpen] = React.useState(false);
  const [popup, setPopup] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleShareProfile = () =>{
    setPopup(true);
    navigator.clipboard.writeText("code-cluster.netlify.app/search/"+username);
    handleClose();
  }

  return (
    <>
    {popup&&<Popup setPopup={setPopup} message={"Copied to clipboard!"}/>}
    <Backdrop open={open} />
    <Box className="action-button" sx={{ height: 150, transform: 'translateZ(0px)', flexGrow: 1 }}>
    
      <SpeedDial
        color=""
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 16, right: 26 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
          <SpeedDialAction
            key="New Code"
            icon={<NavLink to="/edit"><AddIcon /></NavLink>}
            tooltipTitle="New Code"
            onClick={handleClose}
          />
          
          <SpeedDialAction
            key="Share Profile"
            icon={<ShareIcon />}
            tooltipTitle="Share Profile"
            onClick={handleShareProfile}
          />
          <SpeedDialAction
            key="Print Code"
            icon={<PrintIcon />}
            tooltipTitle="Print Code"
            onClick={handleClose}
          />
      </SpeedDial>
    </Box>
    </>
  );
}

export default AssistBall;
