
import WriteReview from "./WriteReview";
import React, { useState, useEffect } from "react";


function ShowsReview(){
    
    let [shows, setShows] = useState([]);
    let [selectedShows, setSelectedShows] = useState("");

    useEffect(() => {
        fetch ("http://localhost:4000/shows")
        .then ((response) => response.json())
        .then((data) => {
            setShows(data)
        });
    }, []);   

    let handleShowChange = (e) => {
        setSelectedShows(e.target.value)
        ;
    }

    return (
        <div>
            <h1>Show Review Page</h1>

            <select onChange= {handleShowChange} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
                <option value="select show" > Select a Show </option>
                {shows.map((show) => ( <option  value={show.id} key= {show.id}> {show.name}  </option>))} 
            </select>
            
            <WriteReview shows = {shows} setShows = {setShows} parentToChild={shows.find(s => s.id === parseInt (selectedShows) ) }/>
        </div>
        );
}

export default ShowsReview;