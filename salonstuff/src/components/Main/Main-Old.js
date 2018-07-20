// import React, {Fragment} from "react";
// import { Route, Switch } from "react-router-dom";
// import App from "../../App";
// import Navbar from "../Navbar/Navbar";
// import Login from "../Login/Login";
// import Signup from "../Signup/Signup";



// class Main extends React.Component {
//     state = {
//         isLoggedIn: false
//     };

//     componentDidMount() {
//         if (localStorage.getItem("tkid")) {
//             this.setState ({isLoggedIn: true})
//         }
//     }

//     changeLogin = () => {
//         this.setState({isLoggedIn: true})
//     }

//     render() {
//         return(
//             <Fragment>
//                 <Navbar isLoggedIn={this.state.isLoggedIn} />
//             <Switch> 
//                 <Route exact path="/" component={App}/>
//                 <Route exact path="/login" render={(props) => <Login {...props} changeLogin={this.changeLogin}/>}/>
//                 <Route exact path="/signup" render={(props) => <Signup {...props} changeLogin={this.changeLogin}/>}/>
//             </Switch>
//             </Fragment>
//         )

   
//     }
// }

// export default Main;