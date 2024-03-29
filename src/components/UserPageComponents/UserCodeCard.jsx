import * as React from "react";
import Popup from "../DashboardComponents/PopUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";

export default function MediaCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [popup, setPopup] = React.useState(false);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleCopy = () => {
    setPopup(true);
    navigator.clipboard.writeText(
      "code-cluster.netlify.app/search/" + props.user + "/id/" + props.id
    );
    handleClose();
  };

  return (
    <>
    {popup&&<Popup setPopup={setPopup} message={"Copied to clipboard!"}/>}
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card">
          <div className="user-card-head">
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
              <MenuItem onClick={handleCopy}>Share code</MenuItem>
            </Menu>
          </div>
          <div className="card-body">
            <p className="code newLine">{props.code}</p>
          </div>
          <div className="user-blur button-holder">
            <NavLink to={"/search/" + props.user + "/id/" + props.id}>
              <Button
                variant="contained"
                className="user-card-button"
                color="secondary"
                size="small"
              >
                view code
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
