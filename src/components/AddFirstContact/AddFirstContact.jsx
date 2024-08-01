import { IoIosContacts } from "react-icons/io";
import css from "./AddFirstContact.module.css";
export default function AddFirstContact() {
  return (
    <div className={css.container}>
      <p className={css.text}>
        Please add first contact <IoIosContacts />
      </p>
    </div>
  );
}
