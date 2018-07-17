import React from "react";
import withAuthentication from "../../hoc/AuthHOC";

const Signup = ({onChange, onCLick, signup, ...props}) => (
<form>
    <label htmlFor="email">Email </label>
    <input type="email" onChange={onChange} name="email" id="email"/>
    <label htmlFor="password">Password </label>
    <input type="password" onChange={onChange} name="password" id="email"/>
    <button onClick={signup}>Sign Up</button>
</form>
)

export default withAuthentication(Signup);
