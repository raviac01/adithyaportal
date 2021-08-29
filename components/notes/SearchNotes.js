import { MdSearch } from "react-icons/md";
import classes from "./notes.module.css";

export default function SearchNotes({ handleSearch, SearchNotes, searchStatusChange }) {
  const searchEvent = (event) => {
    handleSearch(event.target.value);
  };

  function handleStatusChangeEvent(event) {
      searchStatusChange(event.target.value)
  }

  return (
    <div className={classes.search}>
      <MdSearch className={classes.searchicons} size="1.3em" />
      <input
        type="text"
        onChange={searchEvent}
        value={SearchNotes}
        placeholder="type to search..."
      />
      <select
        name="status"
        id="status"
        className={classes.status}
        onChange={handleStatusChangeEvent}
        >
        <option value="">All</option>
        <option value="Active">Active</option>
        <option value="Complete">Complete</option>
      </select>
    </div>
  );
}
