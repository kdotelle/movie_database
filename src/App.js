import React, { useState, useEffect } from "react";
import MovieList from "./Components/Movie";
import SearchMovies from "./Components/searchMovies";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import Heading from "./Components/Heading";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=14c9736d`;

    const response = await fetch(url).then((response) => response.json());

    if (response.Search) {
      setMovies(response.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading heading={searchValue} />
        <SearchMovies
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
