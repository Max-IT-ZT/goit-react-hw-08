import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

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
      <button className={css.contactBtn} onClick={handleDelete}>
        <BsTrashFill />
        Delete
      </button>
    </li>
  );
}
