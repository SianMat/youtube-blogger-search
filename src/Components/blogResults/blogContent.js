import React from "react";
import ReactHtmlParser from "react-html-parser";


//full screen blog article to display when 'view more' is clicked from snippet
function BlogContent(props) {
  return (
    <div className="fullScreenBlog">
      <header className="fullPageBlogHeader">
        <button className="closeButton" onClick={props.handleClick}>
          Close
        </button>
        <h1 className="fullBlogTitle">{props.title}</h1>
      </header>
      <section>{ReactHtmlParser(props.content)}</section>
    </div>
  );
}

export default BlogContent;
