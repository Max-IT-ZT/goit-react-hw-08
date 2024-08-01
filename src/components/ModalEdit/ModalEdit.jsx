import Modal from "react-modal";
import css from "./ModalEdit.module.css";

Modal.setAppElement("#root");

const ModalEdit = ({
  isOpen,
  onRequestClose,
  updatedName,
  setUpdatedName,
  updatedNumber,
  setUpdatedNumber,
  onUpdate,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Edit Contact"
    className={css.modal}
    overlayClassName={css.overlay}
  >
    <h3>Edit Contact</h3>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onUpdate();
      }}
    >
      <label>
        Name:
        <input
          type="text"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
      </label>
      <label>
        Number:
        <input
          type="text"
          value={updatedNumber}
          onChange={(e) => setUpdatedNumber(e.target.value)}
        />
      </label>
      <div className={css.btnContainer}>
        <button type="submit" className={css.confirmBtn}>
          Save
        </button>
        <button
          type="button"
          onClick={onRequestClose}
          className={css.cancelBtn}
        >
          Cancel
        </button>
      </div>
    </form>
  </Modal>
);

export default ModalEdit;
