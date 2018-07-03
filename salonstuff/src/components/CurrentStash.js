import React from "react";

const CurrentStash = props => (
    
  <tbody>
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.itemname}</td>
      <td>{props.quantity}</td>
    </tr>
  </tbody>

);

export default CurrentStash;