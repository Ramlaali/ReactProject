
import WriteReview from "./WriteReview";
import React, { useState } from "react";
import db from "../db.json";




function MoviesReview(){
    
    let [movie, setMovieName] = useState("select a movie name");

    let handleMovieChange = (e) => {
        setMovieName(e.target.value)
    }
   
    return (
        <div>
            <h1>Movie Review Page</h1>

            <select name= "movieNames" onChange= {handleMovieChange}>
                <option value="Select a Movie" > {db.movies.map((movie) => <option value={movie.moviename}> {movie} </option>)} </option>
            </select>
            <WriteReview/>
        </div>
        );
}


export default MoviesReview;