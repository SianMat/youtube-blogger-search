import youtubeSearch from "../../util/youtube";
import bloggerSearch from "../../util/blogger";
import store from "storejs";

async function searchForResults(e) {
  const searchTerm = e.target.innerHTML;
  //if new search term is current search term, return without doing anything
  if (searchTerm === this.state.currentSearchTerm) {
    return;
  }
  this.setState({
    currentSearchTerm: searchTerm,
  });
  //else find results for current search term
  let blogResults = [];
  let oxMathResults = [];
  let kiducationResults = [];
  let allSearches = [];
  //only search if searchTerm has not already been used
  if (!this.state.searches.hasOwnProperty(searchTerm)) {
    allSearches = await Promise.all([
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
  let gridWidth = 0;
  if (kiducationResults.length) {
    gridWidth++;
  }
  if (oxMathResults.length) {
    gridWidth++;
  }
  if (blogResults.length) {
    gridWidth++;
  }
  this.setState({
    oxMathResults: oxMathResults,
    kiducationResults: kiducationResults,
    blogResults: blogResults,
    gridWidth: gridWidth,
  });
  store.set({
    searches: this.state.searches,
  });
}

export default searchForResults;
