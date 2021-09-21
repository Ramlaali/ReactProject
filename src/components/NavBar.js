import { findByLabelText } from '@testing-library/react';
import React from 'react';
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

const linkStyle = {
    display : "flex",
    height : "80px",
    color : "white",
    background : "blue",
    padding : "10px",
    width : "50px",
    letter-spacing : "5px",
    font-size : "12px",
    text-transform : "uppercase"
};

function NavBar() {
    return (
        <div>
            <NavLink path to= "/"
            exact style= {linkStyle}>
                Home
            </NavLink>
            <NavLink path to= "/moviesreview"
            exact style= {linkStyle}>
                Movies Review
            </NavLink>
            <NavLink path to= "/showsreview"
            exact style= {linkStyle}>
                Shows Review
            </NavLink>
            <NavLink path to= "/videogamesreview"
            exact style= {linkStyle}>
                Video Games Review
            </NavLink>
        </div>
        
    )
}

export default NavBar


