import { useState } from "react";
import Modal from "react-modal";
import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

Modal.setAppElement("#root");

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    closeModal();
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

      <button className={css.contactBtn} onClick={openModal}>
        <BsTrashFill />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <h3>Are you sure you want to delete this contact?</h3>
        <div className={css.btnContainer}>
          <button onClick={handleDelete} className={css.confirmBtn}>
            Yes, delete
          </button>
          <button onClick={closeModal} className={css.cancelBtn}>
            Cancel
          </button>
        </div>
      </Modal>
    </li>
  );
}
