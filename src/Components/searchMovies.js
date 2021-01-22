import React from "react";
import "../style.css";

//input a search in the search bar
//query the omdb database
//return the selected movie

//const REACT_APP_API_KEY = "14c9736d";

const SearchMovies = (props) => {
    const handleInput = (event) => {
    event.preventDefault();
    props.setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form>
      <input
        className="input"
        type="text"
        name="search"
        placeholder="Search Movie"
        onChange={handleInput}
        value={props.value}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchMovies;
