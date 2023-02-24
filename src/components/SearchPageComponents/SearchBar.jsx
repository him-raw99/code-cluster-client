import React from "react";

function SearchBar() {
  return (
    <>
      <div className="search-bar-holder">
        <input
          type="text"
          placeholder="Enter the username..."
          className="search-bar"
        />
        <button className="search-button">
          Search
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </div>
    </>
  );
}

export default SearchBar;
