import React, { useState } from "react"



function WriteReview(){

    const [review, newReview] = useState('');

    function handleReview(event){
        newReview(event.target.value)
    }
    return (
        <div className= "Review">
            <h2>Write a Review</h2>
            <form>
                <input id="text" type="text" required value= {review} placeholder="review here" onChange= {handleReview} />
                <button type= "submit">Submit</button>   
            </form>
       
        </div>
        );
};



export default WriteReview;
