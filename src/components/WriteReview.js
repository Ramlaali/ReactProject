import React, { useState } from "react";
import db from "../db.json";

function WriteReview({parentToChild}) {
    let [writeReview, newReview] = useState('');
    let [submittedReview, setReview] = useState('');

    
    function handleReview(event){
        newReview(event.target.value)
    };

    function handleSubmit(event){ 

        event.preventDefault(); 

        if(parentToChild.id > 1 && parentToChild.id < 6) {

            let newShow = {'id': Math.floor(Math.random() * (100 - 19 + 1 )) + 19, 'name': parentToChild?.name, 'review':writeReview}
        db.shows.push(newShow)
        }

        else if(parentToChild.id > 7 && parentToChild.id < 12) {

            let newMovie = {'id': Math.floor(Math.random() * (100 - 19 + 1 )) + 19, 'name': parentToChild?.name, 'review':writeReview}
        db.movies.push( newMovie)
        }

        else if(parentToChild.id > 13 && parentToChild.id < 18) {

            let newVG = {'id': Math.floor(Math.random() * (100 - 19 + 1 )) + 19, 'name': parentToChild?.name, 'review':writeReview}
        db.videogames.push( newVG)
        }
        else {
            alert("Please select an option before writing a review!");
            
        }

        document.getElementById("review-form").reset();
            setReview(writeReview); 
            console.log('submittedReview', submittedReview)
        console.log("db", db);
    };

    const reviewStyle = {
        border : "2px solid #000000",
        borderRadius : 5 , 
        width: 500,
        height: 100,
        margin: "30px ",
        alignItems: "center",
    };

    return (
        <div className= "Review">
            
            <h3>{parentToChild?.name}</h3>
            <img src= {parentToChild?.image} alt= "" width= "250px" height= "300px"></img>
            <h4>"{parentToChild?.review}"</h4>
            <h3>"{submittedReview}"</h3>

            <h5>Write a Review</h5>
            <form onSubmit = {handleSubmit} id="review-form">
                <textarea input="true" name = "review" id= "text" required value= {writeReview} placeholder = "What are your thoughts? Leave a Review" onChange= {handleReview} style= {reviewStyle}/>
                <button class="btn btn-primary" type="submit">Post</button> 
            </form>
        </div>
        );
};



export default WriteReview;
