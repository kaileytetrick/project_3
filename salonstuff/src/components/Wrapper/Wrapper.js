import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper">
    <table className="table">
    <thead className="thead-light">
        <tr>
        <th scope="col">Category</th>
        <th scope="col-3">Item Name</th>
        <th scope="col">Quantity</th>
        </tr>
    </thead>
    <tbody>
        {props.children}
    </tbody>
    </table>
</div>;

export default Wrapper;
