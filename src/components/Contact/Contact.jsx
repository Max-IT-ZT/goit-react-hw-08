import { useState } from "react";
import ModalDelete from "../ModalDelete/ModalDelete";
import ModalEdit from "../ModalEdit/ModalEdit";
import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import {
  BsFillTelephoneFill,
  BsFillPencilFill,
  BsTrashFill,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { updateContact } from "../../redux/auth/operations";

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
    <li className={css.contactItem}>
      <div className={css.contactText}>
        <p className={css.contactName}>
          <IoPersonSharp /> {name}
        </p>
        <p className={css.contactNumber}>
          <BsFillTelephoneFill /> {number}
        </p>
      </div>
      <div className={css.btnContainer}>
        <button className={css.contactBtnAdd} onClick={openEditModal}>
          <BsFillPencilFill />
        </button>
        <button className={css.contactBtnDel} onClick={openDeleteModal}>
          <BsTrashFill />
        </button>
      </div>
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
    </li>
  );
}
