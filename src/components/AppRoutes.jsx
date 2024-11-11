import { Route, Routes } from "react-router-dom";
import Feed from "./Feed/Feed";
import SearchFeed from "./SearchFeed/SearchFeed";
import User from "./User/User";
import VideoInfo from "./VideoInfo/VideoInfo";

export default function AppRoutes() {
  return (
    <>
      <div className="conteiner">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/search" element={<SearchFeed />} />
          <Route path="/user/:unique_id" element={<User />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/video/:video_id" element={<VideoInfo />} />
      </Routes>
    </>
  );
}
