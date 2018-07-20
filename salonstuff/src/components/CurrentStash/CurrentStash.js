import React, {Component} from "react";
import down from "../../images/downarrow.png"
import up from "../../images/uparrow.png"
import "./CurrentStash.css"


//trasfer prctice data to app.js state. 
//get date rendering from prducts on screreen again
//onCLickevent should know what row was clicked on and update that rows qty.



class CurrentStash extends Component {
  constructor(props) {
    super(props);
    this.state ={
      
    }
  }

  handleUpArrowClick = () => {
    // console.log('from upArrowCLick', id)
    this.props.passUpUpdatedStash(this.props.id, this.props.quantity +1)
  }
  handleDownArrowClick = () => {
    this.props.passUpUpdatedStash(this.props.id, this.props.quantity -1)
  }

  render(){
    return(
      <tbody>
        <tr>
          <th scope="row" className="align-middle">{this.props.category}</th>
          <td className="align-middle">{this.props.itemname}</td>
          <td className="align-middle">{this.props.level}</td>
          <td className="align-middle">{this.props.quantity}
            <button type="button" onClick={this.handleUpArrowClick} className="btn btn-default btn-group-vertical arrows" role="group"> <img src={up}  alt={'up arrorw'} width="20" /> </button>
            <button type="button" onClick={this.handleDownArrowClick} className="btn btn-default btn-group-vertical arrows" role="group"> <img src={down} alt={'down arrow'} width="20" /> </button>
          </td>
        </tr>
      </tbody>
    )
  }
}


export default CurrentStash;