import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import SearchFalse from "../SearchFalse/SearchFalse";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { Box } from "@mui/material";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <Box
      sx={{
        margin: 3,
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
        <SearchFalse />
      )}
    </Box>
  );
}
