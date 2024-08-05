import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { updateContact } from "../../redux/auth/operations";
import {
  IconButton,
  Typography,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { IoPersonSharp } from "react-icons/io5";
import {
  BsFillTelephoneFill,
  BsFillPencilFill,
  BsTrashFill,
} from "react-icons/bs";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedNumber, setUpdatedNumber] = useState(number);

  const openDeleteModal = () => setModalIsOpen(true);
  const closeDeleteModal = () => setModalIsOpen(false);

  const openEditModal = () => setEditModalIsOpen(true);
  const closeEditModal = () => setEditModalIsOpen(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    closeDeleteModal();
  };

  const handleUpdate = () => {
    dispatch(updateContact({ id, name: updatedName, number: updatedNumber }));
    closeEditModal();
  };

  return (
    <Card
      sx={{
        width: 235,
        padding: 2,
        borderRadius: 4,
        boxShadow: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 1,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: { xs: "18px", sm: "20px" },
          }}
        >
          <IoPersonSharp sx={{ fontSize: { xs: 20, sm: 24 } }} />
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          component="a"
          href={`tel:${number}`}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: { xs: "14px", sm: "16px" },
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <BsFillTelephoneFill sx={{ fontSize: { xs: 16, sm: 20 } }} /> {number}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: "absolute",
          bottom: 8,
          left: 8,
          right: 8,
          display: "flex",
          justifyContent: "space-between",
          padding: 0,
        }}
      >
        <IconButton
          color="primary"
          onClick={openEditModal}
          sx={{ fontSize: { xs: 16, sm: 20 } }}
        >
          <BsFillPencilFill />
        </IconButton>
        <IconButton
          color="error"
          onClick={openDeleteModal}
          sx={{ fontSize: { xs: 16, sm: 20 } }}
        >
          <BsTrashFill />
        </IconButton>
      </CardActions>

      {/* Delete Modal */}
      <Dialog
        open={modalIsOpen}
        onClose={closeDeleteModal}
        aria-labelledby="confirm-delete-title"
        aria-describedby="confirm-delete-description"
      >
        <DialogTitle id="confirm-delete-title">Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography id="confirm-delete-description">
            Are you sure you want to delete this contact?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} color="error">
            Yes, delete
          </Button>
          <Button onClick={closeDeleteModal} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Modal */}
      <Dialog
        open={editModalIsOpen}
        onClose={closeEditModal}
        aria-labelledby="edit-contact-title"
        aria-describedby="edit-contact-description"
      >
        <DialogTitle id="edit-contact-title">Edit Contact</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <TextField
              label="Name"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Number"
              value={updatedNumber}
              onChange={(e) => setUpdatedNumber(e.target.value)}
              fullWidth
              margin="normal"
            />
            <DialogActions>
              <Button type="submit" color="primary">
                Save
              </Button>
              <Button onClick={closeEditModal} color="secondary">
                Cancel
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
