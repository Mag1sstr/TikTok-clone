import VideoItem from "../VideoItem/VideoItem";
import "./UserPostVideos.css";

export default function UserPostVideos({ userVideos }) {
  return (
    <div>
      {userVideos
        ? userVideos.videos.map((item) => {
            return (
              <div className="user__videos">
                <VideoItem key={item.video_id} {...item} />
              </div>
            );
          })
        : null}
    </div>
  );
}
