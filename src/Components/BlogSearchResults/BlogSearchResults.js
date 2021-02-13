import React from "react";
import Blogcard from "./blogCard";

function BlogSearchResults(props) {
  function createBlogList() {
    const searchResults = props.searchResults;
    let blogList = [];
    if (searchResults) {
      for (const blog in searchResults) {
        const title = searchResults[blog].title;
        const content = searchResults[blog].content;
        blogList.push(
          <Blogcard
            title={title}
            content={content}
            handleClick={props.handleClick}
          />
        );
      }
    } else {
      blogList = "No results found";
    }
    return blogList;
  }

  return <div className={props.className}>{createBlogList()}</div>;
}

export default BlogSearchResults;
