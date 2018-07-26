import React from "react";
import withAuthentication from "../../hoc/AuthHOC";
import "./Login.css";

const Login = ({onChange, login, signup, ...props}) => (
    <div className="module">
    <table align="center">
    <tbody>
        <tr>
            <td><label htmlFor="email">Email </label></td>
            <td><input type="email" onChange={onChange} name="email" id="email" placeholder="e@e.com"/></td>
        </tr>
        <tr>
            <td><label htmlFor="password">Password </label></td>
            <td><input type="password" onChange={onChange} name="password" id="password" placeholder=" "/></td>
        </tr>
        <tr colSpan={2} align="center">
            <td colSpan={3}><button className="button-submit" onClick={login}>Login</button></td>
        </tr>
        </tbody>
    </table>
    </div>
)

export default withAuthentication(Login);