import "./App.css";

import SearchResultsList from "../searchResultsList/searchResultList";
import FilterBar from "../filterBar/filterBar";
import searchForResults from "./searchForResults";
import React from "react";
import BlogContent from "../blogSearchResults/blogContent";
import store from "storejs";

class App extends React.Component {
  constructor(props) {
    super(props);
    let searches = {};
    //retrieve search results from previous searches stored in local storage
    if (store.has("searches")) {
      searches = store.get("searches");
    }
    this.state = {
      currentSearchTerm: "",
      searches: searches, //store all previous searches to save searching again
      oxMathResults: [], //results from OxMath tutorials for current search term
      kiducationResults: [], //results from Kiducation youTube for current search term
      blogResults: [], //results from Kiducation blog for current search term
      fullScreenBlogMode: false,
      targetBlogContents: "", //blog contents from blog snippet 'view more'
      targetBlogTitle: "",
      gridWidth: 0, //number of grids to display depending on search results from each source
    };
    this.handleBlogClick = this.handleBlogClick.bind(this);
  }

  //view full screen blog when 'view more' is clicked from blog snippet
  handleBlogClick(e) {
    this.setState({
      fullScreenBlogMode: !this.state.fullScreenBlogMode,
      targetBlogContents: e.target.getAttribute("content"),
      targetBlogTitle: e.target.getAttribute("title"),
    });
  }

  //render full screen blog if relevant button has been clicked
  fullScreenBlog() {
    if (!this.state.fullScreenBlogMode) {
      return;
    }
    return (
      <BlogContent
        handleClick={this.handleBlogClick}
        content={this.state.targetBlogContents}
        title={this.state.targetBlogTitle}
      />
    );
  }

  //set the number of columns to display based on results from each source
  setGridStyles() {
    if (this.state.gridWidth) {
      return {
        gridTemplate: `100% / 200px repeat(${this.state.gridWidth},1fr)`,
      };
    } else {
      return { gridTemplate: `100% / 200px 1fr` };
    }
  }

  //only render each list if there are any results for current search term
  renderList(results, name, type) {
    if (results.length) {
      return (
        <SearchResultsList
          className="searchResultsList"
          channelName={name}
          searchResults={results}
          type={type}
          handleClick={this.handleBlogClick}
        />
      );
    }
  }

  renderWelcome() {
    if (this.state.gridWidth === 0) {
      return (
        <div className="welcome">
          <span style={{ fontSize: "7rem", color: "darkmagenta" }}>
            Welcome!
          </span>
          To search for one of my videos or blogs, select a topic from the menu
          on the left
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App" style={this.setGridStyles()}>
        <FilterBar
          onClick={searchForResults.bind(this)}
          searchTerm={this.state.currentSearchTerm}
        />
        {this.renderList(this.state.oxMathResults, "OxMath Tutorials", "video")}
        {this.renderList(this.state.kiducationResults, "Kiducation", "video")}
        {this.renderList(this.state.blogResults, "Blog", "blog")}
        {this.renderWelcome()}
        {this.fullScreenBlog()}
      </div>
    );
  }
}

export default App;
