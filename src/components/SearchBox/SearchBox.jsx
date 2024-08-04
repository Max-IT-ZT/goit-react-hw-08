import { useDispatch, useSelector } from "react-redux";
import { changeFilterByValue } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import { Box, TextField, Card, CardContent, Typography } from "@mui/material";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const onFilterChange = (e) => {
    dispatch(changeFilterByValue(e.target.value));
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "auto",
        marginTop: 2,
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
          Find Contacts
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-search"
            label="Search"
            type="search"
            value={filterValue}
            onChange={onFilterChange}
            variant="outlined"
          />
        </Box>
      </CardContent>
    </Card>
  );
}
