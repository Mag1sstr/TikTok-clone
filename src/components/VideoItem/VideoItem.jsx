import Video from "../Video/Video";
import VideoUser from "../VideoUser/VideoUser";
import "./VideoItem.css";

export default function VideoItem({ video_id, author, title, play }) {
  return (
    <div className="video">
      <VideoUser {...author} />
      <Video url={play} videoId={video_id} />
      <div className="video__title">{title}</div>
    </div>
  );
}
