import "./Feed.css";
import { Link } from "react-router-dom";
import { MusicNote } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const feed = [1, 2];
  // const [feed,setFeed] = useState[null]
  // const options = {
  //   method: "GET",
  //   url: "https://tiktok-video-no-watermark2.p.rapidapi.com/feed/list",
  //   params: {
  //     region: "RU",
  //     count: "20",
  //   },
  //   headers: {
  //     "x-rapidapi-key": "11d42e5b2bmshddfbad72c572160p1af565jsnb818000f27e0",
  //     "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
  //   },
  // };
  // useEffect(() => {
  //   axios.request(options).then((resp) => {
  //     console.log(resp);
  //     setFeed(resp.data)
  //   });
  // }, []);

  return (
    <div className="feed">
      {feed?.map((item) => {
        return (
          <div className="video">
            <Link className="video__user-row" to="/user">
              <div
                style={{ backgroundImage: "url()" }}
                className="video__author-image"
              ></div>
              <div className="video__author-info">
                <p>nickname</p>
                <span>uniqid</span>
              </div>
            </Link>

            <div className="video__wrapper">
              <video src="" loop autoPlay={false} muted></video>
              <ul className="video__details">
                {[].map((detailData, i) => (
                  <li className="video__details-item" key={i}>
                    icon
                    <p>text</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="video__music">
              <span>original</span>
              <MusicNote style={{ width: "20px" }} />
              <p className="video__music-title">song title</p>
            </div>

            <div className="video__title">video title</div>
          </div>
        );
      })}
    </div>
  );
}
