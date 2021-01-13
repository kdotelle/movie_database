import React, { useState, useEffect } from 'react';
import Movie from './Components/Movie';
import './App.css';

const App = () => {
    const [movies, setMovies] = useState([ {} ]);

    return (
        <div className="container-fluid movie-app">
            <div className="row">
                <Movie />
            </div>
        </div>
    )
}

export default App;