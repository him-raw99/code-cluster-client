import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCode, changeTitle, changeVisibility, editCode, getFullCode, hideCode } from "../../features/editcode/editCodeSlice";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Skeleton from "@mui/material/Skeleton";
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useNavigate } from "react-router-dom";
import { reset } from "../../features/dashboard/dashboardSlice";

function SingleCodeModal() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const store = useSelector((state) => state);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getFullCode(store));
    setOpen(store.editCode.show);
  }, []);



  const handleClose = () => {
    setOpen(false);
    dispatch(hideCode());
  };
  
  const saveChanges = () => {
    dispatch(editCode(store));
    dispatch(hideCode());
    dispatch(reset());
    {!store.editCode.isLoading&&navigate("/login")}
  };
  
  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth={true}
          maxWidth="md"
        >
          <DialogTitle id="alert-dialog-title">
            <EditIcon sx={{ marginRight: "8px" }} />
            {"Edit Your Code"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" component={'div'}>
              <TextField
                required
                label="Title"
                defaultValue={store.editCode.title}
                sx={{ margin: "10px" }}
                onChange={()=>{dispatch(changeTitle(event.target.value))}}
              />
              <br />
              {store.editCode.isLoading ? (
                <Skeleton height={100} sx={{ margin: "10px"}} />
              ) : (
                <TextField
                  required
                  label="Code"
                  multiline
                  fullWidth
                  onChange={()=>{dispatch(changeCode(event.target.value))}}
                  defaultValue={store.editCode.code}
                  sx={{margin:"10px",paddingRight:"10px",whiteSpace: "pre-wrap"}}
                />
              )}
              <FormControlLabel
                value="start"
                control={<Switch color="success" checked={store.editCode.isPublic} />}
                label="Make Code Public"
                labelPlacement="start"
                onClick={()=>dispatch(changeVisibility())}
              />
              

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={saveChanges}>
            save
            </Button>
            <Button onClick={handleClose} autoFocus>
              close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default SingleCodeModal;
