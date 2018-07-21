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
            <Fragment>
            <nav>
                {this.props.isLoggedIn
    
                ?
                    (<div className="signedin"><NavLink to="/logout">Sign Out</NavLink></div>)
                :
                    ( <Fragment>
                        <div className="login"><br />
                            <img src={logo} /><br />
                            <button type="button" className="butn" onClick={this.show}>Login</button>
                            <NavLink to="/signup"><button type="button" className="butn">Sign Up</button></NavLink>
                        </div><br />
                        <div className="zigzagline"></div>
                    </Fragment>
                    )    
                }
            </nav>
            {
        
                this.show && (
                    <Modal show={this.state.show} onClose={this.props.close}>
                    <div className="module">
                        <label htmlFor="email">Email </label>
                        <input type="email" name="email" id="email" /> <br />
                        <label htmlFor="password">Password </label>
                        <input type="password" name="password" id="email" /><br />
                        <button className="button-submit">Submit</button>
                    </div>
                    </Modal>
                )
            }
        )</Fragment>
        )}
}

export default Navbar;