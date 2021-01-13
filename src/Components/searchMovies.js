import React, {useState} from 'react';
import axios from 'axios';
import "../style.css";


//input a search in the search bar
//query the omdb database 
//return the selected movie

const REACT_APP_API_KEY='14c9736d';


class SearchMovies extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            search: "",
            results: [],
            selected: {},
        };
    }

    handleInput = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    }



    render() {

        const searchMovies = async (event) => {
            event.preventDefault();
            console.log("submitting");

        

        const MOVIE_API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=14c9736d`;
        
        //const res = await fetch(MOVIE_API_URL);
        // const data = await res.json();
        // console.log(data);

        }


        return(
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="search" className="label">Movie Name</label>
                <input 
                    className="input" 
                    type="text" 
                    name="search"
                    placeholder="Search Movie"
                    onChange = {this.handleInput}
                    />
                <button className="button" type="submit">Search</button>
            </form>
        )
    }
}

export default SearchMovies