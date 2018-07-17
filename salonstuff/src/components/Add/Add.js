// import React, { Component } from "react";
// import "./Add.css";
// import {Table} from "react-bootstrap";
// import {ReactDropDownAutoComplete} from "react-dropdown-autocomplete";
// import { ENGINE_METHOD_DIGESTS } from "constants";
// class Add extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             colorName: [
//                 'blue',
//                 'black',
//                 'brown',
//                 'beige',
//                 'butthole',
//                 'green',
//                 'grey',
//                 'gooey',
//                 'yellow',
//                 'yuck',
//                 'yam'

//             ]
//         }
//     }

//     render() {
//         return(
//             <div class="main">
//                 <div> Add Items to Your Stash</div>
//                 <Table>
//                 <thead>
//                     <tr>
//                     <th>Category</th>
//                     <th>Name</th>
//                     <th>Level</th>
//                     <th>Quantity</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                     <td>Color</td>
//                     <td>
//                     <ReactDropDownAutoComplete
//                         getItemValue={item => item.name}
//                         className="form-control"
//                         id="name"
//                         name="name"
//                         placeholder="Product Name"
//                         data={product.list || []}
//                         renderItem={item => (
//                         <div
//                             role="button"
//                             tabIndex="-1"
//                             onClick={(val) => { editFields.name = val; }}
//                         >{item.id} - {item.name}</div>
//                         )}
//                         icon="search"
//                         iconColor="#ff000"
//                         iconClick={() => { /* TODO */ }}
//                         value={editFields.name}
//                         onChange={(val) => { editFields.name = val; }}
//                         onEnter={() => { /* TODO */ }}
//                     />
//                     </td>
//                     <td>N785</td>
//                     <td>4</td>
//                     </tr>
//                     <tr>
//                     <td>Developer</td>
//                     <td colSpan="1">40</td>
//                     <td>3</td>
//                     </tr>
//                     <tr>
//                     <td>Shampoo</td>
//                     <td colSpan="3">6</td>
//                     </tr>
//                     <tr>
//                     <td>Conditioner</td>
//                     <td colSpan="3">6</td>
//                     </tr>
//                 </tbody>
//                 </Table>
//             </div>
//         )
//     }

// }

// export default Add;
