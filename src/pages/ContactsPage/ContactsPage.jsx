import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectContacts } from "../../redux/contacts/selectors";
import AddFirstContact from "../../components/AddFirstContact/AddFirstContact";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <>
      <ContactForm />
      {contacts <= 0 ? (
        <AddFirstContact />
      ) : (
        <>
          <SearchBox />
          <ContactList />
        </>
      )}
    </>
  );
}
