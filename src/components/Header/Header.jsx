import "./Header.css";
import logo from "./../../images/logo.png";
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="conteiner">
        <div className="header__row">
          <img
            onClick={() => navigate("/")}
            className="header__image"
            src={logo}
            alt=""
          />
          <div className="search__comp">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
}
