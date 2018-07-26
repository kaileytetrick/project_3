import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
import logo from '../../images/logo.png';
import Modal, {closeStyle} from 'simple-react-modal';
import './Navbar.css';

class Navbar extends React.Component {

    state = {}

    show = () => {
        this.setState({show: true})
    }

    close = () => {
        this.setState({show: false})
    }

    render() {
        const {props} = this.props;
        return (
            <nav>
                {this.props.isLoggedIn
    
                ?
                    (<div className="signedin"><a href='/' onClick={this.props.signOut}>Sign Out</a></div>)
                :
                    ( <Fragment>
                        <div className="login"><br />
                            <img src={logo} /><br />
                            <NavLink to="/login"><button type="button" className="butn">Login</button></NavLink>
                            <NavLink to="/signup"><button type="button" className="butn">Sign Up</button></NavLink>
                        </div><br />
                        <div className="zigzagline"></div><br />                        
                    </Fragment>
                    )    
                }
            </nav>

        )
    }
}

export default Navbar;