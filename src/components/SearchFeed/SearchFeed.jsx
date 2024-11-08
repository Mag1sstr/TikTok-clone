import { useSearchParams } from "react-router-dom";
import "./SearchFeed.css";
import { useContext } from "react";
import { RequestsContext } from "../../contexts/RequestsContext";
import Spinner from "../Spinner/Spinner";
import VideoItem from "../VideoItem/VideoItem";

export default function SearchFeed() {
  const [searchParams] = useSearchParams();
  const { searchData } = useContext(RequestsContext);
  //   console.log(searchParams.get("q"));
  console.log(searchData);
  //   const search = searchData.videos;
  if (!searchData) {
    return <Spinner />;
  }
  return (
    <div className="search__conteiner">
      {searchData.videos?.map((item) => {
        return (
          <div className="search__feed">
            <VideoItem key={item.video_id} {...item} />
          </div>
        );
      })}
    </div>
  );
}
