// import WriteReview from "./WriteReview";
// import React, { useState } from "react";


// function VideoGameReview(){
    
//     let [videogame, setVGID] = useState("");

//     let handleVGChange = (e) => {
//         setVGID(e.target.value)
//         console.log(e.target.value);
//     }

//     return (
//         <div>
//             <h1>Video Game Review Page</h1>

//             <select onChange= {handleVGChange} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false">
//                 <option value="select videgame" > Select a Video Game  </option>
//                 {db.videogames.map((videogame) => ( <option value={videogame.id} key= {videogame.id}> {videogame.name} </option>))} 
//             </select>
//             <WriteReview parentToChild={db.videogames.find(v => v.id === parseInt (videogame) ) }/>
//         </div>
//         );
// }


// export default VideoGameReview;