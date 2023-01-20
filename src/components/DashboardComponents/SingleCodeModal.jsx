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
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function SingleCodeModal() {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({title:"",code:"",isPublic:false});


  const store = useSelector((state) => state);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getFullCode(store));
    setOpen(store.editCode.show);
  }, []);


  useEffect(() => {
    if(!store.editCode.isLoading){
      setForm(()=>{return {title:store.editCode.title,code:store.editCode.code,isPublic:store.editCode.isPublic}})
    }
  }, [store.editCode.isLoading]);


  const handleClose = () => {
    setOpen(false);
    dispatch(hideCode());
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
                defaultValue={form.title}
                sx={{ margin: "10px" }}
              />
              <br />
              {store.editCode.isLoading ? (
                <Skeleton height={100} sx={{ padding: "10px"}} />
              ) : (
                <TextField
                  required
                  label="Code"
                  multiline
                  fullWidth
                  defaultValue={store.editCode.code}
                  sx={{margin:"10px",paddingRight:"10px",whiteSpace: "pre-wrap"}}
                />
              )}
              <FormControlLabel
                value="start"
                control={store.editCode.isPublic ? <Switch color="success"  defaultChecked /> : <Switch color="success" />}
                label="Make Code Public"
                labelPlacement="start"
              />
              

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>save</Button>
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
