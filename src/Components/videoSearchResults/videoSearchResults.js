import ReactPlayer from "react-player";
import "../../../node_modules/react-player/";
import "./VideoSearchResults.css";

function videoSearchResults(props) {
  let videoList = [];

  for (const video in props.searchResults) {
    const title = props.searchResults[video].snippet.title;
    const description = props.searchResults[video].snippet.description;
    const videoId = props.searchResults[video].id.videoId;

    videoList.push(
      <div className="videoResult card">
        <h1 className="cardTitle">{title}</h1>
        <div className="video">
          <ReactPlayer
            controls
            width="400px"
            height="225px"
            url={`"https://www.youtube.com/watch?v=${videoId}"`}
          />
        </div>
        <p className="videoDescription">{description}</p>
      </div>
    );
  }

  return (
      <div className={props.className}>{videoList}</div>
  );
}

export default videoSearchResults;
