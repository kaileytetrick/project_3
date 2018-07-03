import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import CurrentStash from "./components/CurrentStash"
import Add from "./components/Add";
import tester from "./tester.json";

class App extends Component {
  state = {
    tester
  };

  

  render() {
    const username = "Sammy";
    return (
      <div className="App">
      <header className="App-header">
          <p className="login text-right">Account | Log Out</p>
          <h1 className="App-title">Salon Stasher</h1>
      </header>
      <header className="App-header-bot">
      </header>
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
  </div>
    )
    }
}


export default App;
