
import WriteReview from "./WriteReview";
import React, { useState } from "react";
import db from "../db.json";



function MoviesReview(){
    
    let [movie, setMovieID] = useState("");

    let handleMovieChange = (e) => {
        setMovieID(e.target.value)
        console.log(e.target.value);
    }

    return (
        <div>
            <h1>Movie Review Page</h1>

            <select onChange= {handleMovieChange} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
                <option value="select movie" > Select a Movie  </option>
                {db.movies.map((movie) => ( <option  value={movie.id} key= {movie.id}> {movie.name}  </option>))} 
            </select>
            <WriteReview parentToChild={db.movies.find(m => m.id === parseInt (movie) ) }/>
        </div>
        );
}


export default MoviesReview;