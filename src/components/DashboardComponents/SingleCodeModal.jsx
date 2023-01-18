import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFullCode, hideCode } from "../../features/editcode/editCodeSlice";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Skeleton from "@mui/material/Skeleton";

function SingleCodeModal() {
  const [open, setOpen] = React.useState(false);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFullCode(store));
    setOpen(store.editCode.show);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(hideCode());
  };

  return (
    <>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {store.editCode.isLoading?<Skeleton/>:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default SingleCodeModal;
