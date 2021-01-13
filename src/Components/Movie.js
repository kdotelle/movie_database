import React from 'react';
import Header from './Components/Header';

const DEFAULT_IMAGE: "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-150x150.jpg"

const Movies = ( {movie}) => {

    const poster = movie.Poster === "N/A" ? DEFAULT_IMAGE: movie.Poster;

    return (
        <div className="movie">
            <Header />
            <img src={poster} alt={`The movie titled: ${movie.Title}`} />
            <p>{movie.Year}</p>
        </div>

    );
}

export default Movies