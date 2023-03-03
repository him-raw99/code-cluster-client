import * as React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Card.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Popup from "./PopUp";
export default function MediaCard(props) {
  const {username} = useSelector((store)=>store.dashboard);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popup, setPopup] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleShareCode = () =>{
    setPopup(true);
    navigator.clipboard.writeText("code-cluster.netlify.app/search/"+username+"/id/"+props.id);
    handleClose();
  }


  return (
    <>
    {popup&&<Popup setPopup={setPopup} message={"Copied to clipboard!"}/>}
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card">
        <div className="card-head">
          <h1 className="card-heading">{props.title}</h1>
          <IconButton
            className="more-icon"
            color="inherit"
            aria-label="upload picture"
            component="label"
            onClick={handleOpen}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleShareCode}>Share code</MenuItem>
            <NavLink to={"/edit/" + props.id}>
              <MenuItem onClick={handleClose}>Edit code</MenuItem>
            </NavLink>
            <NavLink to={"/edit/" + props.id}>
              <MenuItem onClick={handleClose}>Delete code</MenuItem>
            </NavLink>
          </Menu>
        </div>
        <div className="card-body">
          <p className="code newLine">{props.code}</p>
        </div>
        <div className="blur button-holder">
          <NavLink to={"/edit/" + props.id}>
            <Button
              variant="contained"
              className="card-button"
              color="secondary"
              size="small"
            >
              view / edit code
            </Button>
          </NavLink>
      
        </div>
      </div>
    </div>
    </>
  );
}
