
import WriteReview from "./WriteReview";
import React, { useState, useEffect } from "react";

// The usestate hook is used here to 
function MoviesReview(){
    
    let [movies, setMovies] = useState([]);
    let [selectedMovie, setSelectedMovie] = useState("");

    useEffect(() => {
        fetch ("http://localhost:4000/movies")
        .then ((response) => response.json())
        .then((data) => {
            setMovies(data)
        });
    }, []);   

    let handleMovieChange = (e) => {
        setSelectedMovie(e.target.value)
        ;
    }

    return (
        <div>
            <h1>Movie Review Page</h1>

            <select onChange= {handleMovieChange} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
                <option value="select movie" > Select a Movie  </option>
                {movies.map((movie) => ( <option  value={movie.id} key= {movie.id}> {movie.name}  </option>))} 
            </select>
            
            <WriteReview movies = {movies} setMovies = {setMovies} parentToChild={movies.find(m => m.id === parseInt (selectedMovie) ) }/>
        </div>
        );
}


export default MoviesReview;