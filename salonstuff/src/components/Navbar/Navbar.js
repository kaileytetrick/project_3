import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";

const Navbar = (props) => (
    <nav>
    <ul>
        <li><NavLink to="/">Home</NavLink></li> 
        {props.isloggedin 
        ?
        <li>Sign Out</li>
        : 
        (
        <Fragment>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
        </Fragment>
        )}
       </ul> 
    </nav>
)

export default Navbar;