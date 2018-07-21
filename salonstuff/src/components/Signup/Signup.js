import React from "react";
import withAuthentication from "../../hoc/AuthHOC";
import "./Signup.css";

const Signup = ({onChange, onClick, signup, ...props}) => (
    <div className="module">
    <table align="center">
        <tr>
            <td><label htmlFor="email">Email </label></td>
            <td><input type="email" onChange={onChange} name="email" id="email"/></td>
        </tr>
        <tr>
            <td><label htmlFor="password">Password </label></td>
            <td><input type="password" onChange={onChange} name="password" id="password"/></td>
        </tr>
        <tr colSpan="2">
            <td align="center"><button className="button-submit" onClick={signup}>Sign Up</button></td>
        </tr>
    </table>
    </div>
)

export default withAuthentication(Signup);
