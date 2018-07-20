import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = (props) => (
    <nav>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
       </ul> 
    </nav>
)

export default Navbar;