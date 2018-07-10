import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// or
import { GoogleLogin } from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
}
 
ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />,
  document.getElementById('googleButton')
);

import { GoogleLogout } from 'react-google-login';
<GoogleLogout
  buttonText="Logout"
  onLogoutSuccess={logout}
>
</GoogleLogout>

<GoogleLogin
clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
onSuccess={responseGoogle}
onFailure={responseGoogle}
>
<FontAwesome
  name='google'
/>
<span> Login with Google</span>
</GoogleLogin>

