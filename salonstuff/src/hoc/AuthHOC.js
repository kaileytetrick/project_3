import React from 'react';
import { Redirect } from 'react-router-dom';
import Authentication from '../API/authentication';


const withAuthentication = AuthComponent =>
  class HigherOrderdComponent extends React.Component {
    Auth = new Authentication();

    state = {
      email: '',
      password: '',
      isLoggedIn: false,
    }

    formChangeHandler = (event) => {
      this.setState({
        [event.target.name]: event.target.value.trim(),
      });
    }

    submitLogin = (event) => {
      event.preventDefault();
      this.Auth.login(this.state.email.toLocaleLowerCase(), this.state.password)
        .then((result) => {
          console.log(result);
          if (result.status === 200) {
            this.props.changeLogin();
            // updates isLoggedIn in App component

            this.props.history.push('/home');
          } else {
            this.setState({
              isLoggedIn: false,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            isLoggedIn: false,
          });
        });
    }

    submitSignup = (event) => {
      event.preventDefault();
      console.log('work!!!!!',this.state.email.toLowerCase())
      this.Auth.signUp(this.state.email.toLowerCase(), this.state.password)
        .then((result) => {
          if (result.status === 201) {
            this.props.changeLogin();
            this.props.history.push('/home');
            // updates isLoggedIn in App component
            // this.props.updateAuth();
          }
        })
        .catch((err) => {
          console.log('error from auth creation', err);
          this.setState({
            isLoggedIn: false,
          });
        });
    }

    authProps ={
      onChange: this.formChangeHandler,
      login: this.submitLogin,
      signup: this.submitSignup,
    }

    render() {
      return (
        <AuthComponent {...this.props} {...this.authProps} />
      );
    }
  };

export default withAuthentication;