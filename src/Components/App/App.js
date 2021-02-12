import "./App.css";

import SearchResultsList from "../SearchResultsList/SearchResultList";
import FilterBar from "../FilterBar/FilterBar";
import youtubeSearch from "../../util/youtube";
import bloggerSearch from "../../util/blogger";
import React from "react";
import BlogContent from "../BlogSearchResults/BlogContent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearchTerm: "",
      searches: {},
      oxMathResults: [],
      kiducationResults: [],
      blogResults: [],
      fullScreenBlogMode: false,
      targetBlogContents: "",
      targetBlogTitle: "",
    };
    this.searchForResults = this.searchForResults.bind(this);
    this.handleBlogClick = this.handleBlogClick.bind(this);
  }

  handleBlogClick(e) {
    this.setState({
      fullScreenBlogMode: !this.state.fullScreenBlogMode,
      targetBlogContents: e.target.getAttribute("content"),
      targetBlogTitle: e.target.getAttribute("title"),
    });
  }

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

  async searchForResults(e) {
    const searchTerm = e.target.innerHTML;
    //if new search term is current search term, return without doing anything
    if (searchTerm === this.state.currentSearchTerm) {
      return;
    }
    //else find results for current search term
    let blogResults = [];
    let oxMathResults = [];
    let kiducationResults = [];
    //only search if searchTerm has not already been used
    if (!this.state.searches.hasOwnProperty(searchTerm)) {
      const allSearches = await Promise.all([
        bloggerSearch(e.target.innerHTML),
        youtubeSearch(
          e.target.innerHTML,
          "UCFPUEHFAgnkp86HGVkc3l9A",
          "AIzaSyCIlwORFT3Rz5N4NkrhdEk1sz_OkiMj_Cw"
        ),
        youtubeSearch(
          e.target.innerHTML,
          "UCnWm2gOPjApqc5E0AhQvQ0Q",
          "AIzaSyCXS0AXhqzQHu85FObMwDSGi-uwbIq8Ldo"
        ),
      ]);
      const blogSearch = allSearches[0];
      const oxMathSearch = allSearches[1];
      const kiducationSearch = allSearches[2];
      const existingSearches = this.state.searches;
      const newSearch = {
        blogResults: blogSearch,
        kiducationResults: kiducationSearch,
        oxMathResults: oxMathSearch,
      };
      existingSearches[searchTerm] = newSearch;
      //add new search term and results to state for future use
      this.setState({ searches: existingSearches });
    }
    //set state to current search term results
    blogResults = this.state.searches[searchTerm].blogResults;
    oxMathResults = this.state.searches[searchTerm].oxMathResults;
    kiducationResults = this.state.searches[searchTerm].kiducationResults;
    this.setState({
      oxMathResults: oxMathResults,
      kiducationResults: kiducationResults,
      blogResults: blogResults,
    });
  }
  render() {
    return (
      <div className="App">
        <FilterBar onClick={this.searchForResults} />
        <SearchResultsList
          className="searchResultsList"
          channelName="OxMath Tutorials"
          searchResults={this.state.oxMathResults}
          type="video"
        />
        <SearchResultsList
          className="searchResultsList"
          channelName="Kiducation"
          searchResults={this.state.kiducationResults}
          type="video"
        />
        <SearchResultsList
          className="searchResultsList"
          channelName="Blog"
          searchResults={this.state.blogResults}
          handleClick={this.handleBlogClick}
          type="blog"
        />
        {this.fullScreenBlog()}
      </div>
    );
  }
}

export default App;
