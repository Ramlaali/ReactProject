
import WriteReview from "./WriteReview";
import React, { useState } from "react";
import db from "../db.json";




function MoviesReview(){
    
    let [movie, setMovieID] = useState("");

    let handleMovieChange = (e) => {
        setMovieID(e.target.value)
        //parentToChild(e.target.value); 
        console.log(e.target.value);
    }
   
    

    return (
        <div>
            <h1>Movie Review Page</h1>

            <select onChange= {handleMovieChange}>
                <option value="select movie" > Select a Movie Name </option>
                {db.movies.map((movie) => ( <option value={movie.id} key= {movie.id}> {movie.name} </option>))} 
            </select>
            <WriteReview parentToChild={db.movies.find(m => m.id === parseInt (movie) ) }/>
            {/* <h2>{movie.name}</h2>
            <p>{movie.image}</p>
            <p>{movie.review}</p>
            <p>{movie.rating}</p> */}
        </div>
        );
}


export default MoviesReview;