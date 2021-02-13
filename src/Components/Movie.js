import React from "react";

const DEFAULT_IMAGE = "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-150x150.jpg";

const MovieList = (props) => {
  //const poster = props.Poster === "N/A" ? DEFAULT_IMAGE : props.Poster;

  return (
    <>
      {props.movies.map((movie, index) => (
        <li className="media" key={movie.id}>
          <div className="d-flex justify-content-md-center m-3">
            <img className="image align-self-center" src={movie.Poster === "N/A" ? DEFAULT_IMAGE : movie.Poster} alt={movie.Title} />
          <div className="overlay">
            <div className="text">{movie.Title} <br/> {movie.Type} <br/> {movie.Year}
            </div>
          </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default MovieList;