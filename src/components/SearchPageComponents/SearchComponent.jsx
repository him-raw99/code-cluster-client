import React from 'react'
import "./SearchPage.css"
import SearchBar from './SearchBar';
function SearchComponent() {
  return (
    <>
        <div className="search-bar-holder">
            <SearchBar/>
        </div>
    </>
  )
}

export default SearchComponent