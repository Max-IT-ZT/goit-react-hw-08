import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { BsPersonCircle } from "react-icons/bs";
export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.container}>
      <p className={css.text}>
        {user.name}
        <BsPersonCircle />
      </p>
      <button className={css.btn} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
