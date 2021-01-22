import React from "react";

//const DEFAULT_IMAGE = "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-150x150.jpg";

const MovieList = (props) => {
  //const poster = movie.Poster === "N/A" ? DEFAULT_IMAGE : movie.Poster;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie" />
          <p> {movie.Title} {movie.Year} </p>
        </div>
      ))}
    </>
  );
};

export default MovieList;
