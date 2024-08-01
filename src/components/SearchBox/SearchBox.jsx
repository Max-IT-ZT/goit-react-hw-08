import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilterByValue } from "../../redux/filters/slice";
import { selectFilterValue } from "../../redux/filters/selectors";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  const onFilterChange = (e) => {
    dispatch(changeFilterByValue(e.target.value));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>

      <div className={css.searchContainer}>
        <TextField
          id="outlined-search"
          label="Find contacts"
          type="search"
          value={filterValue}
          onChange={onFilterChange}
        />
      </div>
    </>
  );
}
