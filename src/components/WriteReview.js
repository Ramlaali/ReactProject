import React, { useState } from "react";
//import db from "../db.json";




function WriteReview({parentToChild}) {
    const [review, newReview] = useState('');


    function handleReview(event){
        newReview(event.target.value)
    }

    function handleSubmit(event){
        console.log(review)
        console.log("Name", parentToChild);   

      
    }
   console.log(parentToChild)
    return (
        <div className= "Review">
            
            <h2>{parentToChild?.name}</h2>
            <img src= {parentToChild?.image} alt= "" width= "250px" height= "300px"></img>
            <h5>{parentToChild?.rating}</h5>


            <h2>Write a Review</h2>
            <form onSubmit = {handleSubmit}>
                <input name = "review" id="text" type="text" required value= {review} placeholder="type your review" onChange= {handleReview} />
                <button type= "submit">Submit</button>   
            </form>
       
        </div>
        );
};



export default WriteReview;
