import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
export default function Search() {
  return (
    <form className="search">
      <div className="search__row">
        <SearchIcon />
        <input
          className="search__input"
          type="text"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </div>
    </form>
  );
}
