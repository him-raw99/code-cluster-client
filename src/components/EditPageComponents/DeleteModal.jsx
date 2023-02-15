import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { deleteCode, deleteModal } from "../../features/editCode/editCodeSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal(props) {
  const dispatch = useDispatch();
  const Delete = useSelector((store) => store.editCode.delete);
  const { token } = useSelector((store) => store.auth);
  const handleClose = () => dispatch(deleteModal());
  const handleDelete = () => dispatch(deleteCode({ id: props.id, token }));
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={Delete}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={Delete}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              DELETE
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to delete this code. the changes you make
              will be irreversable.
            </Typography>

            <Stack direction="row" spacing={2} sx={{marginTop:"20px"}}>
              <Button variant="contained" color="error" onClick={handleDelete} startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button variant="outlined" onClick={handleClose} >
                Close
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
