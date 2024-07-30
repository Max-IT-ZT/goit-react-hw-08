import { FaAddressBook } from "react-icons/fa";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import css from "./App.module.css";
import { TbError404 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import Loader from "../Loader/Loader";
import { selectorError, selectorLoading } from "../../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectorLoading);
  const error = useSelector(selectorError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook <FaAddressBook />
      </h1>
      {error ? (
        <>
          <TbError404 size={150} />
          <p className={css.textError}>
            Sorry, but there were problems loading the page, try reloading the
            page or check your internet connection
          </p>
        </>
      ) : (
        <>
          <ContactForm />
          <SearchBox />
          {loading && <Loader />}
          <ContactList />
        </>
      )}
    </div>
  );
}
