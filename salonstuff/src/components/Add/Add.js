import React, { Component } from "react";
import "./Add.css";
import {Table} from "react-bootstrap";
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
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
                    <td>Blue</td>
                    <td>N785</td>
                    <td>4</td>
                    </tr>
                    <tr>
                    <td>Developer</td>
                    <td colSpan="2">40</td>
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
