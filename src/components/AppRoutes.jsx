import { Route, Routes } from "react-router-dom";
import Feed from "./Feed/Feed";
import SearchFeed from "./SearchFeed/SearchFeed";
import User from "./User/User";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/search" element={<SearchFeed />} />
      <Route path="/user/:unique_id" element={<User />} />
    </Routes>
  );
}
