import { useState } from "react";
import ModalDelete from "../ModalDelete/ModalDelete";
import ModalEdit from "../ModalEdit/ModalEdit";
import { IoPersonSharp } from "react-icons/io5";
import {
  BsFillTelephoneFill,
  BsFillPencilFill,
  BsTrashFill,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { updateContact } from "../../redux/auth/operations";
import {
  IconButton,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

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
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: { xs: "14px", sm: "16px" },
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
      <ModalDelete
        isOpen={modalIsOpen}
        onRequestClose={closeDeleteModal}
        onDelete={handleDelete}
      />
      <ModalEdit
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        updatedName={updatedName}
        setUpdatedName={setUpdatedName}
        updatedNumber={updatedNumber}
        setUpdatedNumber={setUpdatedNumber}
        onUpdate={handleUpdate}
      />
    </Card>
  );
}
