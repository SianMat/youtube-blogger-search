import React from "react";

function FilterBarHeader(props) {
  function returnText(searchTerm) {
    if (searchTerm.length) {
      return (
        <h1 className="filterBarHeader">
          Showing results for
          <span
            style={{ color: "darkmagenta", fontWeight: "bold" }}
          >{` ${searchTerm}`}</span>
        </h1>
      );
    }
    return <h1 className="filterBarHeader">Filter by topic</h1>;
  }

  return returnText(props.searchTerm);
}

export default FilterBarHeader;
