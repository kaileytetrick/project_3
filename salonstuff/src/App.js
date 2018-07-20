import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import CurrentStash from "./components/CurrentStash/CurrentStash";
// import Add from "./components/Add";
import Footer from "./components/Footer";
import tester from "./tester.json";
// import logo from './images/logo.png';
// import API from "./utils/API";
// import Navbar from "./components/Navbar/Navbar";
import Add from "./components/Add/Add";

class App extends Component {
  state = {
    tester
  };

  

  render() {
    const username = "Sammy";
    return (
      <div className="App">
      <br />
      <font className="intro">Welcome to your Salon Stasher, {username}!</font><p>
      <Wrapper>
        
      {this.state.tester.map(tester => (
      <CurrentStash 
      id={tester.id}
      itemname={tester.itemname}
      quantity={tester.quantity}
      />
      ))}
      </Wrapper>
      </p>

      <Add />
      <Footer />
  </div>
    )
    }
}


export default App;
