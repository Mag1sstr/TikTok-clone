import { Route, Routes } from "react-router-dom";
import Feed from "./Feed/Feed";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
    </Routes>
  );
}
