import { Link } from "react-router-dom";
import "./Video.css";
import ReactPlayer from "react-player";
import { useRef, useState } from "react";
import PauseIcon from "@mui/icons-material/Pause";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Spinner from "../Spinner/Spinner";

export default function Video({
  videoId,
  url = "",
  width = "100%",
  height = "500px",
}) {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleProgress = ({ loaded, played }) => {
    if (!loaded) return;
    setProgress(played * 100);
  };

  //   if (!ready) {
  //     return <Spinner />;
  //   }
  return (
    <div ref={videoRef} className={`video__item ${isPlaying ? "playing" : ""}`}>
      <Link to={`/video/${videoId}`}>
        <ReactPlayer
          playing={isPlaying}
          loop={true}
          url={url}
          width={width}
          height={height}
          onProgress={handleProgress}
          onReady={() => setReady(true)}
        />
      </Link>
      <div
        className="video__item-controls"
        onClick={() => {
          setIsPlaying(!isPlaying);
          videoRef?.current.parentElement.classList.toggle("playing");
        }}
      >
        {isPlaying ? (
          <PauseIcon className="video__icon" />
        ) : (
          <PlayCircleIcon
            style={{ width: "40px", height: "40px" }}
            className="video__icon"
          />
        )}
      </div>
      <div className="video__progress">
        <span style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
