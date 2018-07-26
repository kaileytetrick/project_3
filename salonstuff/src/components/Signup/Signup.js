import React from "react";
import withAuthentication from "../../hoc/AuthHOC";
import "./Signup.css";

const Signup = ({onChange, onClick, signup, ...props}) => (
    <div className="module">
    <table align="center">
        <tr>
            <td><label htmlFor="email">Email </label></td>
            <td><input type="email" onChange={onChange} name="email" id="email" placeholder="you@you.com"/></td>
        </tr>
        <tr>
            <td><label htmlFor="password">Password </label></td>
            <td><input type="password" onChange={onChange} name="password" id="password" placeholder="p@s5w0rD!"/></td>
        </tr>
        <tr colSpan={2} align="center">
            <td colSpan={3}><button className="button-submit" onClick={signup}>Sign Up</button></td>
        </tr>
    </table>
    </div>
)

export default withAuthentication(Signup);
