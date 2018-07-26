import React, {Fragment} from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

class App extends React.Component {
    state = {
        isLoggedIn: false
    };

    componentDidMount() {
        if (localStorage.getItem("tkid")) {
            this.setState ({isLoggedIn: true})
        };
        console.log(this.props);
    }

    signOut = () => {
        localStorage.removeItem("tkid");
        this.setState ({isLoggedIn:false});
        // this.props.history.push('/');
    };

    changeLogin = () => {
        this.setState({isLoggedIn: true})
    }

    render() {
        return(
            <Fragment>
                <Navbar isLoggedIn={this.state.isLoggedIn} signOut={this.signOut} />
            <Switch> 
                <Route exact path="/login" render={(props) => <Login {...props} changeLogin={this.changeLogin}/>}/>
                <Route exact path="/signup" render={(props) => <Signup {...props} changeLogin={this.changeLogin}/>}/>
                <Route exact path="/home" component={Main}/>
            </Switch>
            </Fragment>
        )
    }
}

export default App;