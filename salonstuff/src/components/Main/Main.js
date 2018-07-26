import React, { Component } from 'react';
import './Main.css';
import Wrapper from "../Wrapper";
import CurrentStash from "../CurrentStash/CurrentStash";
import Footer from "../Footer";
import AddForm from "../AddForm/AddForm";
import axios from 'axios';

class Main extends Component {
  state = {
    fullstash: []
  }

  componentDidMount() {
    this.handleDB();
  }

  handleDB = () => {

    axios.get('/fullstash')
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log("Failure")
        })

  }   

  onChange = (event) => {
    this.setState({ [event.target.name]:event.target.value });
  }

  // getUpdatedStashFromCurrentStash = (id, newQuantity) => {
  // //   this.setState({
  // //     stash: updatedStash
  // //   })
  //   var itemIndex = this.state.stash.findIndex(function(item){
  //     return item.id === id
  //   })
  //   var tempStashState = this.state.stash;
  //   console.log('newQuantity', newQuantity)
  //   tempStashState[itemIndex].quantity = newQuantity
  //   console.log('expected Index', itemIndex)
  //   this.setState({
  //     stash: tempStashState
  //   })    
  // }
  
  // componentDidMount() {

  // };

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
        
      {/* {this.state.stash.map((item, index) => (
      <CurrentStash 
      key={index}
      id={item.id}
      category={item.category}
      itemname={item.name ? item.name : item.category}
      quantity={item.quantity}
      passUpUpdatedStash={this.getUpdatedStashFromCurrentStash}
      />
      ))} */}
      </Wrapper>

      <AddForm />

      <Footer />
  </div>
    )
    }
}


export default Main;