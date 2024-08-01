import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import SearchFalse from "../SearchFalse/SearchFalse";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))
      ) : (
        <li>
          <SearchFalse />
        </li>
      )}
    </ul>
  );
}
