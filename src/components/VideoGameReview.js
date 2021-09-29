
import WriteVideoGamesReview from "./WriteReviews/WriteVideoGamesReview";
import React, { useState, useEffect } from "react";


function VideoGameReview(){
    
    let [videogames, setVideoGames] = useState([]);
    let [selectedVG, setSelectedVG] = useState("");

    useEffect(() => {
        fetch ("http://localhost:4000/videogames")
        .then ((response) => response.json())
        .then((data) => {
            setVideoGames(data)
        });
    }, []);   

    let handleVGChange = (e) => {
        setSelectedVG(e.target.value)
        ;
    }

    return (
        <div>
            <h1>VideoGame Review Page</h1>

            <select onChange= {handleVGChange} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
                <option value="select game" > Select a VideoGame  </option>
                {videogames.map((game) => ( <option  value={game.id} key= {game.id}> {game.name}  </option>))} 
            </select>
            
            <WriteVideoGamesReview videogames = {videogames} setVideoGames = {setVideoGames} parentToChild={videogames.find(vg => vg.id === parseInt (selectedVG) ) }/>
        </div>
        );
}

export default VideoGameReview;