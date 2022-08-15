import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
import "../components/Navbar.css"

function Navbar() {
    const [isMobile,setIsMobile] = React.useState(false);
  return (
    <nav>
        <div className='header'>
            <NavLink to="/"  className="logo">
                Logo
            </NavLink>
            <button
                className='mobile-responsive'
                onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </div>
        <ul 
            className={isMobile ? "nav-links-mobile" : "navList"}
            onClick={() => setIsMobile(false)}
        >
            <NavLink to="/">
                <li>News</li>
            </NavLink>
            <NavLink to="/">
                <li>Transfer Market</li>
            </NavLink>
            <NavLink to="/">
                <li>Topic 3</li>
            </NavLink>
            <NavLink to="/" className="topic4">
                <li>Topic 4</li>
            </NavLink>
            
        </ul>
        
    </nav>
  )
}

export default Navbar