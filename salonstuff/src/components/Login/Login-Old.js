import React from "react";
import withAuthentication from "../../hoc/AuthHOC";
import Modal, {closeStyle} from 'simple-react-modal';
import "./Login.css";

class Login extends React.Component {

state = {}
 
  show = () => {
    this.setState({show: true})
  }
 
  close = () => {
    this.setState({show: false})
  }

  render(){
    const {onChange, login, signup, ...props} = this.props;
    return (
        <Modal onClick={this.props.show} onClose={this.props.close}>
        <div className="module">
            <label htmlFor="email">Email </label>
            <input type="email" name="email" id="email" onChange={onChange}/> <br />
            <label htmlFor="password">Password </label>
            <input type="password" name="password" id="email" onChange={onChange}/><br />
            <button className="button-submit" onClick={login}>Submit</button>
        </div>
        </Modal>
    )
  }

}
export default withAuthentication(Login);

