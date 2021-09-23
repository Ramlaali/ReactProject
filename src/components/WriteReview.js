import React, { useState } from "react";
import db from "../db.json";

function WriteReview({parentToChild}) {
    let [writeReview, newReview] = useState('');
    let [submittedReview, setReview] = useState('');

    function handleReview(event){
        newReview(event.target.value)
    }

    function handleSubmit(event){
        //console.log(review)
        //console.log("Name", parentToChild);   

        event.preventDefault(); 

        if(parentToChild.id > 7 && parentToChild.id < 12) {

            let newMovie = {'id': Math.floor(Math.random() * (100 - 19 + 1 )) + 19, 'name': parentToChild?.name, 'review':writeReview, 'rating': parentToChild?.rating}
        db.movies.push( newMovie)
        }

        if(parentToChild.id > 13 && parentToChild.id < 18) {

            let newVG = {'id': Math.floor(Math.random() * (100 - 19 + 1 )) + 19, 'name': parentToChild?.name, 'review':writeReview, 'rating': parentToChild?.rating}
        db.videogames.push( newVG)
        }

        document.getElementById("review-form").reset();

            setReview(writeReview); 
            console.log('submittedReview', submittedReview)
        console.log("db", db);
    }
   //console.log(parentToChild)

   const reviewStyle = {
       border : "2px solid 	#000000",
       borderRadius : 5 , 
       width: 500,
       height: 100,
       margin: "30px ",
       alignItems: "center",
   };

   //const subBtn = {
//        color : "#000000",
//        background : "#ADD8E6",
//        font: "Monaco",
//        height: "50px",
//        fontsize : "24px",
//        border: "2px solid #000000",
//        borderRadius : "8px"

//    }

    return (
        <div className= "Review">
            
            <h2>{parentToChild?.name}</h2>
            <img src= {parentToChild?.image} alt= "" width= "250px" height= "300px"></img>
            <h3>"{parentToChild?.review}"</h3>
            <h5>{submittedReview}</h5>


            <h2>Write a Review</h2>
            <form onSubmit = {handleSubmit} id="review-form">
                <textarea input="true" name = "review" id= "text" required value= {writeReview} placeholder = "What are your thoughts? Leave a Review" onChange= {handleReview} style= {reviewStyle}/>
                <button type= "submit" >Submit</button>   
            </form>
        </div>
        );
};

//input name = "review" style= {reviewStyle} id="text" type="text" required value= {review} placeholder="type your review" onChange= {handleReview} />

export default WriteReview;
