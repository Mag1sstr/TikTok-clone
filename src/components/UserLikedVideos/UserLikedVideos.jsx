import VideoItem from "../VideoItem/VideoItem";
import "./UserLikedVideos.css";

export default function UserLikedVideos({ userLiked }) {
  return (
    <div>
      {userLiked
        ? userLiked.videos.map((item) => {
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
