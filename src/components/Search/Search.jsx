import { useContext, useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { RequestsContext } from "../../contexts/RequestsContext";
export default function Search() {
  const [value, setValue] = useState("");
  const { searchByKeywords } = useContext(RequestsContext);
  const navigate = useNavigate();
  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search?q=${value}`);
        searchByKeywords(value);
      }}
    >
      <div className="search__row">
        <SearchIcon />
        <input
          value={value}
          className="search__input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
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
