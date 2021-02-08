import ReactPlayer from "react-player";
import searchResults from "./videos";
import "../../../node_modules/react-player/";
import "./VideoSearchResults.css";

function videoSearchResults() {
  let videoList = [];
  for (const video in searchResults.items) {
    const title = searchResults.items[video].snippet.title;
    const description = searchResults.items[video].snippet.description;
    const videoId = searchResults.items[video].id.videoId;

    videoList.push(
      <div className="videoResult">
        <h1 className="videoTitle">{title}</h1>
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

  return <div className="videoList">{videoList}</div>;
}

export default videoSearchResults;
