import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const onFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.searchContainer}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        className={css.input}
        placeholder="🔎 Search "
        type="text"
        name="search"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
}
