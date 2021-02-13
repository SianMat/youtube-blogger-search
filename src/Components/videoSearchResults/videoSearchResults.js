import VideoCard from "./videoCard";

function videoSearchResults(props) {
  let videoList = [];

  for (const video in props.searchResults) {
    const title = props.searchResults[video].snippet.title;
    const description = props.searchResults[video].snippet.description;
    const videoId = props.searchResults[video].id.videoId;

    videoList.push(
      <VideoCard title={title} description={description} videoId={videoId} />
    );
  }

  return <div className={props.className}>{videoList}</div>;
}

export default videoSearchResults;
