import { Link } from "react-router-dom";
import "./VideoUser.css";

export default function VideoUser({ nickname, unique_id, avatar }) {
  return (
    <Link className="video__user-row" to={`/user/${unique_id}`}>
      <div
        style={{ backgroundImage: `url(${avatar})` }}
        className="video__author-image"
      ></div>
      <div className="video__author-info">
        <p>{nickname}</p>
        <span>{unique_id}</span>
      </div>
    </Link>
  );
}
