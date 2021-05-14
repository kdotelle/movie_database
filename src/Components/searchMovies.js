import React from "react";
import "../style.css";

//input a search in the search bar
//query the omdb database
//return the selected movie

//const REACT_APP_API_KEY = "14c9736d";

const SearchMovies = (props) => {

  
  const handleInput = (event) => {
    props.setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 form-group-lg">
          <input
            className="input form-control"
            type="text"
            name="search"
            placeholder="Search Movie"
            onChange={handleInput}
            value={props.value}
            
          />
        </div>
      </div>
    </div>
  );
};

export default SearchMovies;
