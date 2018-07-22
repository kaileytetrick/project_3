import React from 'react';

class AddForm extends React.Component {
    state = {
        category: '',
        name: '',
        level: '',
        quantity: null,
        shampoo: {
            quantity: null,
        },
        conditioner: {
            quantity: null
        },
        developer: {
            level: null,
            quantity: null,
        }
    }
    render() {
        return (
            <form>
                <label htmlFor="category">Category</label>
                <select>
                    <option value="color">Color</option>
                    <option value="developer">Developer</option>
                    <option value="conditioner">Conditioner</option>
                    <option value="shampoo">Shampoo</option>
                </select>
                <label htmlFor="name">Name</label>
                <select>
                    <option value="nocolor  ">No Color</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="blonde">Blonde</option>
                    <option value="green">Green</option>
                    <option value="brown">Brown</option>
                    <option value="grey">Grey</option>
                    <option value="pink">Pink</option>
                    <option value="purple">Purple</option>
                </select>
                <label htmlFor="level">Level</label>
                <select>
                    <option value="nolevel">No Level</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
                <label htmlFor="quantity">Quantity:</label>
                   <input type="text" name="quantity"></input>
            </form>
        )
    }

}
export default AddForm;