import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const SearchBar = () => {
  const [word, setWord] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The word you entered was: ${word}`);
  };

  return (
    <div className="search-wrapper">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="search-bar">
          <input
            type={"search"}
            className="search-field"
            placeholder="Search"
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
        <div className="search-btn-wrapper">
          <button className="search-btn">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
