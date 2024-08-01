import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
export default function Navigation() {
  const activeClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <div className={css.navContainer}>
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/contacts" className={activeClass}>
              Contacts
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
}
