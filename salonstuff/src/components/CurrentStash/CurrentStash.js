import React, {Component} from "react";
import down from "../../images/downarrow.png"
import up from "../../images/uparrow.png"
import "./CurrentStash.css"
import remove from "../../images/remove.png"
import axios from 'axios';

class CurrentStash extends Component {

  state = {
    quantity: this.props.quantity
  }

  handleUp = (event) => {

    let id = event.target.getAttribute('data-id');
    const newQuant = this.props.quantity + 1;

    let updatedQuant = {
      quantity: newQuant
    }

    axios.put(`/stashRoute/fullstash/${id}`, updatedQuant)
      .then(result => {
        this.props.handleDB();
      })

  }

  handleDown = (event) => {

    let id = event.target.getAttribute('data-id');
    const newQuant = this.props.quantity + -1;

    let updatedQuant = {
      quantity: newQuant
    }

    axios.put(`/stashRoute/fullstash/${id}`, updatedQuant)
      .then(result => {
        this.props.handleDB();
      })

  }

  handleRemove = (event) => {
    event.preventDefault();

    let id = event.target.getAttribute('data-id');
    console.log(id);

    axios.delete(`/stashRoute/fullstash/${id}`)
        .then(result => {
          this.props.handleDB();
          console.log(result);
          
        })
        .catch(err => {
            console.log("Failure")
        })

  }

  render(){
    return(
        <tr>
          <th scope="row" className="align-middle">{this.props.category}</th>
          <td className="align-middle">{this.props.itemname}</td>
          <td className="align-middle">{this.props.quantity}
            <button type="button" className="btn btn-default btn-group-vertical arrows" role="group" data-id={this.props.id} onClick={this.handleUp} > <img src={up}  alt={'up arrow'} width="20"  data-id={this.props.id} onClick={this.handleUp} /> </button>
            <button type="button" className="btn btn-default btn-group-vertical arrows" role="group" data-id={this.props.id} onClick={this.handleDown} > <img src={down} alt={'down arrow'} width="20"  data-id={this.props.id} onClick={this.handleDown} /> </button>
            <button type="button" className="btn btn-default btn-group-vertical remove" role="group" data-id={this.props.id} onClick={this.handleRemove} > <img src={remove} alt={'remove'} width="10" data-id={this.props.id} onClick={this.handleRemove} /> </button>
          </td>
        </tr>
    )
  }
}


export default CurrentStash;