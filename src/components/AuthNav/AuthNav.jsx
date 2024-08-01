import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  const activeClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <div className={css.container}>
      <div className={css.logContainer}>
        <NavLink to="/register" className={activeClass}>
          Register
        </NavLink>
        <NavLink to="/login" className={activeClass}>
          Log In
        </NavLink>
      </div>
    </div>
  );
}
