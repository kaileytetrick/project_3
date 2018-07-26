import React, {Component} from "react";
import down from "../../images/downarrow.png"
import up from "../../images/uparrow.png"
import "./CurrentStash.css"
import remove from "../../images/remove.png"
import axios from 'axios';

class CurrentStash extends Component {

  handleUpArrowClick = (event) => {

    let id = event.target.getAttribute('data-id');
    console.log(id);

    axios.put(`/stashRoute/fullstash/${id}`)
      .then(result => {
        const newQuant = this.props.quantity + 1;
        console.log(newQuant);
        this.props.handleDB();
      })
    
   // this.props.id, this.props.quantity +1)
  }


  handleDownArrowClick = () => {
    this.props.passUpUpdatedStash(this.props.id, this.props.quantity -1)
  }

  handleRemove = (event) => {

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
            <button type="button" data-id={this.props.id} onClick={this.handleUpArrowClick} className="btn btn-default btn-group-vertical arrows" role="group"> <img src={up}  alt={'up arrow'} width="20" /> </button>
            <button type="button" data-id={this.props.id} onClick={this.handleDownArrowClick} className="btn btn-default btn-group-vertical arrows" role="group"> <img src={down} alt={'down arrow'} width="20" /> </button>
            <button type="button" data-id={this.props.id} onClick={this.handleRemove} className="btn btn-default btn-group-vertical remove" role="group"> <img src={remove} alt={'remove'} width="10" /> </button>
          </td>
        </tr>
      </tbody>
    )
  }
}


export default CurrentStash;