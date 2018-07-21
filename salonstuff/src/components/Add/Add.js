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
                'blonde',
                'brown',
                'green',
                'grey',
                'purple',
                'red',
                'pink',
                'orange'

            ],
            colorLevel: [
                '5',
                '10',
                '20',
                '30',
                '40',
                '50'
            ],
            developerLevel: [
                '5',
                '10',
                '20',
                '30',
                '40',
                '50'
            ],
           

        }
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleColorLevelChange = this.handleColorLevelChange.bind(this);
    this.handleDeveloperChange = this.handleDeveloperChange.bind(this);
    }

    handleColorChange(event) {
        this.setState({selectedColor: event.target.value})
        alert(event.target.value);
    }
    handleColorLevelChange(event) {
        this.setState({selectedColorLevel: event.target.value})
        alert(event.target.value);
    }
    handleDeveloperChange(event) {
        this.setState({selectedDeveloper: event.target.value})
        alert(event.target.value);
    }

    render() {
        
        return (
            <div class="main">
                <div text-align="center" className="add">ADD TO STASH</div>
                <Table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Category</th>
                            <th>Item Name</th>
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
                            <td> 
                                <select value={this.state.selectedColorLevel} onChange={this.handleColorLevelChange}>
                                    {this.state.colorLevel.map((color, index) => {
                                        return <option value={color} key={index} name={color} >{color}</option>
                                    })}
                                </select></td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Developer</td>
                            <td colSpan="1"></td>
                            <td> 
                                <select value={this.state.selectedDeveloper} onChange={this.handleDeveloperChange}>
                                    {this.state.developerLevel.map((color, index) => {
                                        return <option value={color} key={index} name={color} >{color}</option>
                                    })}
                                </select>
                                </td>
                                <td>5</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Shampoo</td>
                            <td> </td>
                            <td> </td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Conditioner</td>
                            <td> </td>
                            <td> </td>
                            <td>6</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }

}

export default Add;
