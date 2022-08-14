import React from 'react';
import {NavLink} from "react-router-dom";
import "../components/Navbar.css"

function Navbar() {
  return (
    <nav>
        <ul>
            <NavLink to="/">
                <li>Home</li>
            </NavLink>
            <NavLink to="/">
                <li>News</li>
            </NavLink>
            <NavLink to="/">
                <li>Transfer Market</li>
            </NavLink>
            <NavLink to="/">
                <li>Topic 3</li>
            </NavLink>
            <NavLink to="/">
                <li>Topic 4</li>
            </NavLink>
        </ul>
        
    </nav>
  )
}

export default Navbar