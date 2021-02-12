import React from "react";
import "./BlogSearchResults.css";
import BlogIntro from "./BlogIntro";

function BlogSearchResults(props) {
  function createBlogList() {
    const searchResults = props.searchResults;
    let blogList = [];
    if (searchResults) {
      for (const blog in searchResults) {
        const title = searchResults[blog].title;
        const content = searchResults[blog].content;
        // const url = searchResults[blog].url;

        blogList.push(
          <div className="blogResult card">
            <h1 className="cardTitle blogTitle">{title}</h1>
            <BlogIntro content={content} />
            <button
              id="viewMore"
              content={content}
              title={title}
              onClick={props.handleClick}
            >
              View more
            </button>
          </div>
        );
      }
    } else {
      blogList = "No results found";
    }
    return blogList;
  }

  return (
      <div className={props.className}>{createBlogList()}</div>
  );
}

export default BlogSearchResults;
