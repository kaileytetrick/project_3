import React from 'react';
import "./AddForm.css";
import axios from 'axios';

class AddForm extends React.Component {
    state = {
        category: '',
        name: '',
        quantity: null
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const stashItem = {
            category: this.state.category,
            name: this.state.name,
            quantity: this.state.quantity
        }

        axios.post('/additem', stashItem)
            .then(result => {
                this.setState({category: '', name: '', quantity: null});
                console.log("Success")
            })
            .catch(err => {
                console.log("Failure")
            })

    }

    onChange = (event) => {
        this.setState({ [event.target.name]:event.target.value });
      }

    render() {
        return (
            <div className="addform">
            <center>Add to Stash</center><br />
            <form onSubmit={this.handleSubmit}>
            <div className="form-group col-auto my-1">
                <label for="category">Category</label><br />
                    <select id="category" name="category" onChange={this.onChange}>
                        <option>Color</option>
                        <option>Shampoo</option>
                        <option>Conditioner</option>
                        <option>Developer</option>
                        <option>Miscellaneous</option>
                    </select><br />
            </div>
            <div className="form-group col-auto">
                <label for="name">Item Name/Brand</label><br />
                    <input type="text" id="name" name="name" onChange={this.onChange} />
            </div>
            <div className="form-group col-auto">
                <label htmlFor="quantity">Quantity:</label><br />
                   <input type="text" name="quantity" onChange={this.onChange}></input><br /><br />
                   <button type="submit" className="btn btn-secondary">Submit</button>
            </div>
            </form>
            </div>
        )
    }

}
export default AddForm;