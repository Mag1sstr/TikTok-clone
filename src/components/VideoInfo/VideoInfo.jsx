import axios from "axios";
import Video from "../Video/Video";
import "./VideoInfo.css";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

export default function VideoInfo() {
  const [singleVideo, setSingleVideo] = useState(null);
  const [comments, setComments] = useState(null);
  const { video_id } = useParams();
  const getSingleVideo = {
    method: "GET",
    url: "https://tiktok-video-no-watermark2.p.rapidapi.com/",
    params: {
      url: `https://www.tiktok.com/@tiktok/video/${video_id}`,
      hd: "1",
    },
    headers: {
      "x-rapidapi-key": "11d42e5b2bmshddfbad72c572160p1af565jsnb818000f27e0",
      "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios.request(getSingleVideo).then((resp) => {
      setSingleVideo(resp.data.data);
      console.log(resp.data);
    });
  }, [video_id]);

  const getComment = {
    method: "GET",
    url: "https://tiktok-video-no-watermark2.p.rapidapi.com/comment/list",
    params: {
      url: `https://www.tiktok.com/video/${video_id}`,
      count: "10",
      cursor: "0",
    },
    headers: {
      "x-rapidapi-key": "11d42e5b2bmshddfbad72c572160p1af565jsnb818000f27e0",
      "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios.request(getComment).then((resp) => {
      setComments(resp.data.data);
      console.log(resp.data);
    });
  }, [video_id]);

  const navigate = useNavigate();

  if (!singleVideo) {
    return <Spinner />;
  }
  return (
    <div className="conteiner__videoinfo">
      <div className="videoinfo__row">
        <div className="videoinfo__sidebar">
          <CloseIcon sx={{ fontSize: "40px" }} className="videoinfo__close" />
        </div>
        <div className="videoinfo__main">
          <div className="videoinfo__close" onClick={() => navigate("/")}>
            <Video width="100%" height="850px" url={singleVideo.play} />
          </div>
        </div>
        <div className={"videoinfo__sidebar ptop"}>
          {comments.comments?.map((item) => (
            <div className="comment">
              <div className="comment__author">
                <img
                  className="comment__author-img"
                  src={item.user.avatar}
                  alt=""
                />
                <div className="comment__author-info">
                  <p>{item.user.nickname}</p>
                  <p>{item.user.unique_id}</p>
                </div>
              </div>
              <p className="comment__text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
