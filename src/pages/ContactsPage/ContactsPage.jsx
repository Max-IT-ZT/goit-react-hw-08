import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import AddFirstContact from "../../components/AddFirstContact/AddFirstContact";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect, useState } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/Loader/Loader";
export default function ContactsPage() {
  const [loading, setLoading] = useState(true);
  const contacts = useSelector(selectContacts);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      setLoading(true);
      dispatch(fetchContacts())
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    }
  }, [isLoggedIn, dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ContactForm />
      {contacts.length <= 0 ? (
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
