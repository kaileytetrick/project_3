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
    // event.preventDefault();
    
        let id = event.target.getAttribute('data-id');
        let currentQuant = this.state.quantity;
        let newQuant = currentQuant + 1;
    
        this.setState({quantity: newQuant})
    
        console.log(id);
        axios.put(`/stashRoute/fullstash/${id}`, newQuant)
        .then(result => {
        this.props.handleDB();
     })
        // .catch(err => {
        //   console.log("Quantity failure")
        // })
      }


  // handleDown = (event) => {

  //   let id = event.target.getAttribute('data-id');
  //   console.log(id);

  //   axios.put(`/stashRoute/fullstash/${id}`, this.props.quantity)
  //     .then(result => {
  //       let quantity = this.props.quantity;
  //       quantity = quantity + -1;
  //       this.props.handleDB();
  //     })


  // }

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
      <tbody>
        <tr>
          <th scope="row" className="align-middle">{this.props.category}</th>
          <td className="align-middle">{this.props.itemname}</td>
          <td className="align-middle">{this.props.quantity}
            <button type="button" data-id={this.props.id} onClick={this.handleUp} className="btn btn-default btn-group-vertical arrows" role="group"> <img src={up}  alt={'up arrow'} width="20" /> </button>
            <button type="button" data-id={this.props.id} onClick={this.handleDown} className="btn btn-default btn-group-vertical arrows" role="group"> <img src={down} alt={'down arrow'} width="20" /> </button>
            <button type="button" data-id={this.props.id} onClick={this.handleRemove} className="btn btn-default btn-group-vertical remove" role="group"> <img src={remove} alt={'remove'} width="10" /> </button>
          </td>
        </tr>
      </tbody>
    )
  }
}


export default CurrentStash;