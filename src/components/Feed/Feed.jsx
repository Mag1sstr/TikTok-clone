import "./Feed.css";
import { Link } from "react-router-dom";
import { MusicNote } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

import VideoUser from "../VideoUser/VideoUser";
import VideoDetails from "../VideoDetails/VideoDetails";
import Spinner from "../Spinner/Spinner";
import Video from "../Video/Video";

export default function Feed() {
  // const feed = [1, 2];
  const [feed, setFeed] = useState(null);
  const options = {
    method: "GET",
    url: "https://tiktok-video-no-watermark2.p.rapidapi.com/feed/list",
    params: {
      region: "RU",
      count: "10",
    },
    headers: {
      "x-rapidapi-key": "11d42e5b2bmshddfbad72c572160p1af565jsnb818000f27e0",
      "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios.request(options).then((resp) => {
      console.log(resp);
      setFeed(resp.data.data);
    });
  }, []);

  if (feed == null) {
    return <Spinner />;
  }

  return (
    <div className="feed">
      {feed?.map((item) => {
        return (
          <div className="video">
            <VideoUser
              nickname={item.author.nickname}
              unique_id={item.author.unique_id}
              avatar={item.author.avatar}
            />

            <div className="video__wrapper">
              {/* <video src={item.play} loop autoPlay={false} muted></video> */}
              <Video height="auto" url={item.play} videoId={item.video_id} />
              <VideoDetails
                play_count={item.play_count}
                comment_count={item.comment_count}
                digg_count={item.digg_count}
                share_count={item.share_count}
              />
            </div>

            <div className="video__music">
              <span>original</span>
              <MusicNote style={{ width: "20px" }} />
              <p className="video__music-title">{item.music_info.title}</p>
            </div>

            <div className="video__title">{item.title}</div>
          </div>
        );
      })}
      <p className="made">Made by danilkarachev234 | Git</p>
    </div>
  );
}
