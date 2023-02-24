import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchPage.css";
function SearchComponent() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  function handelChange(event) {
    setUser(event.target.value);
  }

  function handelSubmit() {
    navigate("/search/"+user);
  }
  return (
    <>
      <div className="search-bar-holder">
        <input
          type="text"
          placeholder="Enter the username..."
          className="search-bar"
          value={user}
          onChange={handelChange}
        />
        <button className="search-button" onClick={handelSubmit}>
          Search
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </div>
    </>
  );
}

export default SearchComponent;
