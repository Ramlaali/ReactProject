import { findByLabelText } from '@testing-library/react';
import React from 'react';
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import "./App.css";


const linkStyles = {
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
            exact style= {linkStyles}>
                Home
            </NavLink>
            <NavLink path to= "/moviesreview"
            exact style= {linkStyles}>
                Movies Review
            </NavLink>
            <NavLink path to= "/showsreview"
            exact style= {linkStyles}>
                Shows Review
            </NavLink>
            <NavLink path to= "/videogamesreview"
            exact style= {linkStyles}>
                Video Games Review
            </NavLink>
        </div>
        
    )
}

export default NavBar


