import React, { useState } from "react";


function WriteVideoGamesReview({parentToChild, videogames, setVideoGames}){
    let [input, setInput] = useState('');
    let [submittedReview, setSubmittedReview] = useState('');

    function handleReview(event){

        setInput(event.target.value)
     };

    function handleSubmit(event){

        event.preventDefault();

       fetch("http://localhost:4000/videogames", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({'name': parentToChild?.name, 'review':input, "image": parentToChild?.image})
})
    .then((videogames) => videogames.json())

    .then((game) => {setVideoGames([...videogames, game])});
    
    document.getElementById("review-form").reset();
        setSubmittedReview(input); 
        console.log('submittedReview', submittedReview)
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
                <textarea input="true" name = "review" id= "text" required value= {input} placeholder = "What are your thoughts? Leave a Review" onChange= {handleReview} style= {reviewStyle}/>
                <button class="btn btn-primary" type="submit">Post</button> 
            </form>
        </div>
        );
};

export default WriteVideoGamesReview