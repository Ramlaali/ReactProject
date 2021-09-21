import React from 'react';
import { NavLink } from "react-router-dom";


const linkStyles = {
    display : "flex",
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
                Movies Review
            </NavLink>
            <NavLink to= "/showsreview"
            exact style= {linkStyles}>
                Shows Review
            </NavLink>
            <NavLink to= "/videogamesreview"
            exact style= {linkStyles}>
                Video Games Review
            </NavLink>
        </div>
        
    )
}

export default NavBar


