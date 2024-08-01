import Modal from "react-modal";
import css from "./ModalDelete.module.css";

Modal.setAppElement("#root");

const ModalDelete = ({ isOpen, onRequestClose, onDelete }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Confirm Delete"
    className={css.modal}
    overlayClassName={css.overlay}
  >
    <h3>Are you sure you want to delete this contact?</h3>
    <div className={css.btnContainer}>
      <button onClick={onDelete} className={css.confirmBtn}>
        Yes, delete
      </button>
      <button onClick={onRequestClose} className={css.cancelBtn}>
        Cancel
      </button>
    </div>
  </Modal>
);

export default ModalDelete;
