import React from "react";
import ReactHtmlParser from "react-html-parser";

function BlogIntro(props) {
  let firstParagraph = props.content.split("<br />")[0];
  return <div className="blogIntro">{ReactHtmlParser(firstParagraph)};</div>;
}

export default BlogIntro;
