import { MdNoAccounts } from "react-icons/md";
import css from "./SearchFalse.module.css";
export default function SearchFalse() {
  return (
    <div className={css.container}>
      <h2>There is no contact with that name!</h2>
      <MdNoAccounts size={100} />
    </div>
  );
}
