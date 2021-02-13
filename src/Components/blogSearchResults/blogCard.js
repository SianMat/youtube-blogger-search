import BlogIntro from "./blogIntro";
import "./blogCard.css";

function Blogcard(props) {
    return (
        <div className="blogResult card">
        <h1 className="cardTitle blogTitle">{props.title}</h1>
        <BlogIntro content={props.content} />
        <button
          id="viewMore"
          content={props.content}
          title={props.title}
          onClick={props.handleClick}
        >
          View more
        </button>
      </div>
    )
}

export default Blogcard;