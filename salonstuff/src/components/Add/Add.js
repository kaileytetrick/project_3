import React, { Component } from "react";
import "./Add.css";
import { Table } from "react-bootstrap";
import { DropdownButton, MenuItem } from "react-bootstrap";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorName: [
                'blue',
                'black',
                'brown',
                'beige',
                'butthole',
                'green',
                'grey',
                'gooey',
                'yellow',
                'yuck',
                'yam'

            ],
            selectedColor: 'green'

        }
    this.handleColorChange = this.handleColorChange.bind(this);

    }

    handleColorChange(event) {
        this.setState({selectedColor: event.target.value})
        alert(event.target.value);
    }

    render() {
        console.log(this.state.selectedColor,'this is for real working');
        return (
            <div class="main">
                <div> Add Items to Your Stash</div>
                <Table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Level</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Color</td>
                            <td>
                                <select value={this.state.selectedColor} onChange={this.handleColorChange}>
                                    {this.state.colorName.map((color, index) => {
                                        return <option value={color} key={index} name={color} >{color}</option>
                                    })}
                                </select>
                            </td>
                            <td>N785</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Developer</td>
                            <td colSpan="1">40</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Shampoo</td>
                            <td colSpan="3">6</td>
                        </tr>
                        <tr>
                            <td>Conditioner</td>
                            <td colSpan="3">6</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }

}

export default Add;
