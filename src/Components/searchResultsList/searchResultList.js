import "./searchResultList.css";
import VideoSearchResults from "../videoSearchResults/videoSearchResults";
import BlogSearchResults from "../blogSearchResults/blogSearchResults";

function SearchResultsList(props) {
  function createResultsList() {
    if (props.type === "blog") {
      return (
        <BlogSearchResults
          className="resultsGrid"
          channelName={props.channelName}
          searchResults={props.searchResults}
          handleClick={props.handleClick}
        />
      );
    } else {
      return (
        <VideoSearchResults
          className="resultsGrid"
          channelName={props.channelName}
          searchResults={props.searchResults}
        />
      );
    }
  }

  return (
    <div className={props.className}>
      <h1 className="title">{props.channelName}</h1>
      {createResultsList()}
    </div>
  );
}

export default SearchResultsList;
