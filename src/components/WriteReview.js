import React, { useState } from "react";
import db from "../db.json";




function WriteReview({parentToChild}) {
    const [review, newReview] = useState('');


    function handleReview(event){
        newReview(event.target.value)
    }

    function handleSubmit(event){
        //console.log(db.movies)
        console.log(review)
    }
    return (
        <div className= "Review">
            <h2>Write a Review</h2>
            <h2>{parentToChild}</h2>
            <form onSubmit = {handleSubmit}>
                <input name = "review" id="text" type="text" required value= {review} placeholder="review here" onChange= {handleReview} />
                <button type= "submit">Submit</button>   
            </form>
       
        </div>
        );
};



export default WriteReview;
