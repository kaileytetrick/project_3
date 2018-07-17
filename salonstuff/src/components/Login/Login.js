import React from "react";
import withAuthentication from "../../hoc/AuthHOC";

const Login = ({onChange, login, signup, ...props}) => (
<form>
    <label htmlFor="email">Email </label>
    <input type="email" name="email" id="email" onChange={onChange}/> 
    <label htmlFor="password">Password </label>
    <input type="password" name="password" id="email" onChange={onChange}/>
    <button onClick={login}>Submit</button>
</form>
)

export default withAuthentication(Login);

