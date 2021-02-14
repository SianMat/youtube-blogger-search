import VideoCard from "./videoCard";

function videoSearchResults(props) {
  let videoList = [];

  props.searchResults.forEach((video) => {
    videoList.push(
      <VideoCard
        title={video.title}
        description={video.description}
        videoId={video.videoId}
      />
    );
  });

  return <div className={props.className}>{videoList}</div>;
}

export default videoSearchResults;
