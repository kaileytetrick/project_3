import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import CurrentStash from "./components/CurrentStash/CurrentStash";
// import Add from "./components/Add";
import Footer from "./components/Footer";
// import tester from "./tester.json";
// import logo from './images/logo.png';
// import API from "./utils/API";
// import Navbar from "./components/Navbar/Navbar";
import Add from "./components/Add/Add";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stash: [
        {
          name: 'ambrosia',
          level: '5000',
          quantity: 7,
          id: 1,
          category: "color"
        },
        {
          name: 40,
          quantity: 4,
          level: 3,
          id: 34,
          category: "developer"
        },
        {
          quantity: 4,
          id: 55,
          category: "shampoo"
        },
        {
          quantity: 4,
          id: 100,
          category: "conditioner"
       },
      ]
    }  

  }

  getUpdatedStashFromCurrentStash = (id, newQuantity) => {
  //   this.setState({
  //     stash: updatedStash
  //   })
    var itemIndex = this.state.stash.findIndex(function(item){
      return item.id === id
    })
    var tempStashState = this.state.stash;
    console.log('newQuantity', newQuantity)
    tempStashState[itemIndex].quantity = newQuantity
    console.log('expected Index', itemIndex)
    this.setState({
      stash: tempStashState
    })    
  }
  

  render() {
    return (
      <div className="App">
      <br />

          <header className="App-header">
          <h1 className="App-title">Salon Stasher</h1>
      </header>
      <header className="App-header-bot">
      </header>
      <Wrapper>
        
      {this.state.stash.map((item, index) => (
      <CurrentStash 
      key={index}
      id={item.id}
      category={item.category}
      itemname={item.name ? item.name : item.category}
      quantity={item.quantity}
      passUpUpdatedStash={this.getUpdatedStashFromCurrentStash}
      />
      ))}
      </Wrapper>

      <Add />
      <Footer />
  </div>
    )
    }
}


export default App;
