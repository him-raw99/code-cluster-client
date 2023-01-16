import * as React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { showCode } from "../../features/editcode/editCodeSlice";
import "./Card.css";

export default function MediaCard(props) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const viewCode= ()=>{
    dispatch(showCode({...props}));
  }

  return (
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
            <MenuItem onClick={handleClose}>Share code</MenuItem>
            <MenuItem onClick={handleClose}>Edit code</MenuItem>
            <MenuItem onClick={handleClose}>Delete code</MenuItem>
          </Menu>
        </div>
        <div className="card-body">
          <p className="code newLine">{props.code}</p>
        </div>
        <div className="blur button-holder">
          <Button
            variant="contained"
            className="card-button"
            color="secondary"
            size="small"
            onClick={viewCode}
          >
            view code
          </Button>
          <Button
            variant="contained"
            className="card-button"
            color="secondary"
            size="small"
          >
            make {props.isPublic ? "Private" : "Public"}
          </Button>
        </div>
      </div>
    </div>
  );
}
