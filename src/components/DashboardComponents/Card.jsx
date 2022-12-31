import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Card.css"

export default function MediaCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Card sx={{ maxWidth: 340 , display:"inline-block" , margin:"4%"}}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.date}
      />

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Make Private</MenuItem>
      </Menu>

      <CardContent>
        <Typography variant="body1" color="text.secondary">
          <div className="newLine">
          {props.code}
          </div>
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">View full code</Button>
      </CardActions>
    </Card>
  );
}
