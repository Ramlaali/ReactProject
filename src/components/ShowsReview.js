// import WriteReview from "./WriteReview";
// import React, { useState } from "react";


// function ShowsReview(){
    
//     let [show, setShowID] = useState("");

//     let handleShowChange = (e) => {
//         setShowID(e.target.value)
//         console.log(e.target.value);
//     }

//     return (
//         <div>
//             <h1>Shows Review Page</h1>

//             <select onChange= {handleShowChange} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
//                 <option value= "select show" > Select a Show  </option>
//                 {db.shows.map((show) => ( <option value={show.id} key= {show.id}> {show.name} </option>))} 
//             </select>
//             <WriteReview parentToChild={db.shows.find(m => m.id === parseInt (show) ) }/>
//         </div>
//         );
// }


// export default ShowsReview;