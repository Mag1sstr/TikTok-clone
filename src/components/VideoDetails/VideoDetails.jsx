import "./VideoDetails.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { compactFormatNum } from "../../utils/common";

export default function VideoDetails({
  play_count,
  comment_count,
  digg_count,
  share_count,
}) {
  const details = [
    {
      icon: <PlayArrowIcon />,
      count: play_count,
    },
    {
      icon: <ChatBubbleIcon />,
      count: comment_count,
    },
    {
      icon: <FavoriteIcon />,
      count: digg_count,
    },
    {
      icon: <ShareIcon />,
      count: share_count,
    },
  ];
  return (
    <ul className="video__details">
      {details.map(({ icon, count }, i) => (
        <li className="video__details-item" key={i}>
          {icon}
          <p>{compactFormatNum(count)}</p>
        </li>
      ))}
    </ul>
  );
}
