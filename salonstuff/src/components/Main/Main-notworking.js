import React, { Component } from 'react';
import './Main.css';
import Footer from "../Footer";
import CurrentStash from "../CurrentStash";
import down from "../../images/downarrow.png"
import up from "../../images/uparrow.png"
import remove from "../../images/remove.png"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stash: [
        {
          id: '',
          category: '',
          name: '',
          level: '',
          quantity: 0
        }],
      list: []
    };
  }

  updateInput(key, value) {
    //update react state
    this.setState({ [key]: value });
  }

  addItem() {
    const stash = {
      id: 1 + Math.random(),
      category: this.state.stash.category,
      name: this.state.stash.name,
      level: this.state.stash.level,
      quantity: this.state.stash.quantity,
    };

    const list = [...this.state.list]

    list.push(stash);

    this.setState({
      list,
      stash: []
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  handleUpArrowClick = () => {
    // console.log('from upArrowCLick', id)
    this.props.passUpUpdatedStash(this.props.id, this.props.quantity +1)
  }
  handleDownArrowClick = () => {
    this.props.passUpUpdatedStash(this.props.id, this.props.quantity -1)
  }
  handleRemoveClick = () => {
    this.props.passUpUpdatedStash(this.props.id, this.props.quantity -100)
  }

  getUpdatedStashFromCurrentStash = (id, newQuantity) => {
    //   this.setState({
    //     stash: updatedStash
    //   })
    var itemIndex = this.state.stash.findIndex(function (item) {
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
        
        <div className="wrapper">
          <table className="table">
          <thead className="thead-light">
          <tr>
          <th scope="col">Category</th>
          <th scope="col">Item Name</th>
          <th scope="col">Level</th>
          <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
        {this.state.list.map(item => {
              return (
                <tr>
                  <th scope="row" className="align-middle">{this.props.category}</th>
                  <td className="align-middle">{this.props.itemname}</td>
                  <td className="align-middle">{this.props.level}</td>
                  <td className="align-middle">{this.props.quantity}
                    <button type="button" onClick={this.handleUpArrowClick} className="btn btn-default btn-group-vertical arrows" role="group"> <img src={up}  alt={'up arrorw'} width="20" /> </button>
                    <button type="button" onClick={this.handleDownArrowClick} className="btn btn-default btn-group-vertical arrows" role="group"> <img src={down} alt={'down arrow'} width="20" /> </button>
                    <button type="button" onClick={this.handleRemoveClick} className="btn btn-default btn-group-vertical remove" role="group"> <img src={remove} alt={'remove'} width="10" /> </button>
                  </td>
                </tr>
              )
            })
        }
      </tbody>
      </table>
            


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
        
          </div>


          Add an item to the list
          <br />
          {/* <input type="text" htmlFor="category" placeholder="Category" value={this.state.stash} onChange={e => this.updateInput("stash", e.target.value)}/> */}
          <label htmlFor="category" id={this.state.stash.category}>Category</label>
                <select>
                  <option value="color">Color</option>
                  <option value="developer">Developer</option>
                  <option value="conditioner">Conditioner</option>
                  <option value="shampoo">Shampoo</option>
                </select> <br />
              <label htmlFor="name" value={this.state.stash.name}>Name</label>
                <select>
                  <option value={null}>No Color</option>
                  <option value="Gold-Beige">Gold-Beige</option>
                  <option value="">Copper-Bronze</option>
                  <option value="blonde">Red</option>
                  <option value="green">Mahogany Chocolate</option>
                  <option value="brown">Neutral</option>
                  <option value="grey">Ash-Gray</option>
                  <option value="pink">Fantasy</option>
                </select> <br />
                <label htmlFor="level" value={this.state.stash.level}>Level</label>
                <select>
                  <option value={null}>No Level</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select> <br />
                <label htmlFor="quantity">Quantity:</label>
                <input type="text" name="quantity" value={this.state.stash.quantity}></input><br />
                
          <button onClick={() => this.addItem()} disabled={!this.state.stash.length}>&#43; Add</button>
          {console.log(this.state.list)}
          <br /> <br />
          {/* <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul> */}

    <Footer />
            
  </div>
          )
          }
      }
      
      
      export default Main;
