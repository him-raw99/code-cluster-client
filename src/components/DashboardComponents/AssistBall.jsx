import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import Backdrop from '@mui/material/Backdrop';
import AddIcon from '@mui/icons-material/Add';
import "./AssistBall.css"
import { NavLink } from "react-router-dom";


function AssistBall() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
            icon=<NavLink to="/edit"><AddIcon /></NavLink>
            tooltipTitle="New Code"
            onClick={handleClose}
          />
          
          <SpeedDialAction
            key="Share Code"
            icon=<ShareIcon />
            tooltipTitle="Share Code"
            onClick={handleClose}
          />
          <SpeedDialAction
            key="Print Code"
            icon=<PrintIcon />
            tooltipTitle="Print Code"
            onClick={handleClose}
          />
      </SpeedDial>
    </Box>
    </>
  );
}

export default AssistBall;
