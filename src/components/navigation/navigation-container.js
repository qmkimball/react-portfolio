import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div> 
            <div className="test"></div>
            <NavLink exact to="/">
                Home
            </NavLink>

            <NavLink exact to="/about-me">
                About
            </NavLink>

            <a href="/">Wrong Home</a>


                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
                <button>Blog</button>
                {false ? <button>Add Blog</button> : null }
            </div>
        );
    }
}