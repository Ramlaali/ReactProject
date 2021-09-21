import React from 'react';
import { NavLink } from "react-router-dom";


const linkStyles = {
    display : "in-line",
    height : "80px",
    color : "white",
    background : "blue",
    padding : "10px",
    width : "50px",
};

function NavBar() {
    return (
        <div>
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
            <NavLink to= "/writereview"
            exact style= {linkStyles}>
                write review
            </NavLink>
        </div>
        
    )
}

export default NavBar


