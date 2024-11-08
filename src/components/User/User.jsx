import { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { compactFormatNum } from "../../utils/common";

export default function User() {
  const [user, setUser] = useState(null);
  const { unique_id } = useParams();
  //   console.log(unique_id);

  const options = {
    method: "GET",
    url: "https://tiktok-video-no-watermark2.p.rapidapi.com/user/info",
    params: {
      unique_id: unique_id,
    },
    headers: {
      "x-rapidapi-key": "11d42e5b2bmshddfbad72c572160p1af565jsnb818000f27e0",
      "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios.request(options).then((resp) => {
      setUser(resp.data.data);
      console.log(resp.data);
    });
  }, [unique_id]);

  const [mainStage, setMainStage] = useState(0);
  const tabs = [
    {
      title: "Videos",
    },
    {
      title: "Liked",
    },
  ];
  return (
    <div className="user">
      {user ? (
        <div className="user__inner">
          <div className="user__top">
            <img className="user__avatar" src={user.user.avatarMedium} alt="" />
            <div className="user__top-row">
              <p className="user__top-title">{user.user.ins_id}</p>
              <p className="user__top-nickname">{user.user.nickname}</p>
            </div>
          </div>
          <div className="user__counts">
            <div className="user__counts-item">
              <p className="user__counts-num">
                {compactFormatNum(user.stats.followerCount)}
              </p>
              <p className="user__counts-text">Followers</p>
            </div>
            <div className="user__counts-item">
              <p className="user__counts-num">
                {compactFormatNum(user.stats.followingCount)}
              </p>
              <p className="user__counts-text">Following</p>
            </div>
            <div className="user__counts-item">
              <p className="user__counts-num">
                {compactFormatNum(user.stats.heartCount)}
              </p>
              <p className="user__counts-text">Likes</p>
            </div>
            <div className="user__counts-item">
              <p className="user__counts-num">
                {compactFormatNum(user.stats.videoCount)}
              </p>
              <p className="user__counts-text">Videos</p>
            </div>
          </div>
          <p className="user__desc">{user.user.signature}</p>
          <div className="user__buttons">
            {tabs.map((item, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setMainStage(i)}
                  className={`user__buttons-btn ${
                    i == mainStage ? "main__stage" : ""
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
            {/* <button className="user__buttons-btn">Videos</button>
            <button className="user__buttons-btn">Liked</button> */}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
