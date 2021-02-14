import React from "react";
import Blogcard from "./blogCard";

function BlogSearchResults(props) {
  function createBlogList() {
    let blogList = [];

    props.searchResults.forEach((blog) => {
      blogList.push(
        <Blogcard
          title={blog.title}
          content={blog.content}
          handleClick={props.handleClick}
        />
      );
    });

    return blogList;
  }

  return <div className={props.className}>{createBlogList()}</div>;
}

export default BlogSearchResults;
