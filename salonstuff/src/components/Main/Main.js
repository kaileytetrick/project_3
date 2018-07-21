import React, { Component } from 'react';
import './Main.css';
import Wrapper from "../Wrapper";
import CurrentStash from "../CurrentStash/CurrentStash";
import Footer from "../Footer";
import Add from "../Add/Add";

class Main extends Component {
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
      <div className="Main">
      <br />

          <header className="Main-header">
          <h1 className="Main-title">Salon Stasher</h1>
      </header>
      <header className="Main-header-bot">
      </header>
      <Wrapper>
        
      {this.state.stash.map((item, index) => (
      <CurrentStash 
      key={index}
      id={item.id}
      category={item.category}
      itemname={item.name ? item.name : item.category}
      level={item.level ? item.level : "N/A"}
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


export default Main;
