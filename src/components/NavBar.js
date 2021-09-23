import React from 'react';
import { NavLink } from "react-router-dom";

import "../style.css"




const linkStyles = {
    display : "in-line",
    color : "white",
    background : "black",
    padding : "10px",
    fontSize : "25px",
    boxSizing : "border-box",
    overflow : "hidden",
    textdecoration : "none",
};


function NavBar() {
    return (
        <div className= "NavBar">
            <NavLink to= "/"
            exact style= {linkStyles}>
                Home
            </NavLink>
            <NavLink to= "/moviesreview"
            exact style= {linkStyles}>
                Movie Reviews
            </NavLink>
            <NavLink to= "/showsreview"
            exact style= {linkStyles}>
                Show Reviews
            </NavLink>
            <NavLink to= "/videogamereview"
            exact style= {linkStyles}>
                Video Game Reviews
            </NavLink>
        </div>
        
    )
}

export default NavBar


