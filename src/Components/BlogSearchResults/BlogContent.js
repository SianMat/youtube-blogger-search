import React from "react";
import ReactHtmlParser from "react-html-parser";

function BlogContent(props) {
  return (
    <div className="fullScreenBlog">
      <button className="closeButton" onClick={props.handleClick}>X</button>
      <h1>{props.title}</h1>
      <section>{ReactHtmlParser(props.content)}</section>
    </div>
  );
}

export default BlogContent;
