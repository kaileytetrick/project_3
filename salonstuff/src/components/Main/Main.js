import React, {Fragment} from "react";
import { Route, Switch } from "react-router-dom";
import App from "../../App";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

class Main extends React.Component {
    render() {
        return(
            <Fragment>
                <Navbar/>
            <Switch> 
                <Route exact path="/" component={App}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
            </Switch>
            </Fragment>
        )

   
    }
}

export default Main;