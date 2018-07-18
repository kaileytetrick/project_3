import React from "react";
import down from "../images/downarrow.png"
import up from "../images/uparrow.png"

const CurrentStash = props => (
  
  

  <tbody>
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.itemname}</td>
      <td>{props.quantity}
        <button type="button" class="btn btn-default btn-group-vertical" role="group"> <img src={down} width="20" /> </button>
        <button type="button" class="btn btn-default btn-group-vertical" role="group"> <img src={up} width="20" /> </button>
      </td>
    </tr>
</tbody>

);

export default CurrentStash;