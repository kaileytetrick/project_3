import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
import logo from '../../images/logo.png';

const Navbar = (props) => (
    <nav>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        {props.isLoggedIn
        
        ?
            (<li><NavLink to="/logout">Sign Out</NavLink></li>)
        :
            ( <Fragment>
                <img src={logo} />
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
             </Fragment>
            )    
        }
        
       </ul> 
    </nav>
)

export default Navbar;