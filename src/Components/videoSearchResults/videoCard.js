import ReactPlayer from "react-player";
import "react-player";
import "./videoCard.css";

function VideoCard(props) {
  return (
    <div className="videoResult card">
      <h1 className="cardTitle">{props.title}</h1>
      <div className="video">
        <ReactPlayer
          controls
          width="380px"
          height="210px"
          url={`"https://www.youtube.com/watch?v=${props.videoId}"`}
        />
      </div>
      <p className="videoDescription">{props.description}</p>
    </div>
  );
}

export default VideoCard;
