import React, { Component, Fragment } from 'react';
import './Main.css';
import Footer from "../Footer";
import CurrentStash from "../CurrentStash";
import down from "../../images/downarrow.png"
import up from "../../images/uparrow.png"
import remove from "../../images/remove.png"

class Main extends Component {

    state = {};

    addItem = (event) => {
        event.preventDefault();
        console.log(event);
        
        const stashItem = {
            id: 1 + Math.random(),
            category: this.state.category,
            name: this.state.name,
            level: this.state.level,
            quantity: this.state.quantity
        };

        console.log(stashItem);

        this.handleStorage(stashItem);

        // const list = [...this.state.list]

        // list.push(stashItem);

        // this.setState({
        //     list,
        //     stash: []
        // });


    }

    componentDidMount() {
        // grab local storage
        // set to state
        // put in an array
    }

    componentWillUpdate() {
        // any time local sto rage is updated, this should run
    }

    handleStorage = (data) => {

        // localStorage.setItem("stash", data)
        const newStash = localStorage.getItem("stash")
        const item = JSON.parse(newStash);
        console.log(item);

        if (item !== null) {
            const itemArray = item.push(data);
            // JSON.stringify(itemArray);
            localStorage.setItem("stash", JSON.stringify(itemArray));
        } else {
            const emptyArray = [];
            emptyArray.push(data);
            localStorage.setItem("stash", JSON.stringify(emptyArray));
        }
    }

    deleteItem = (id) => {
        const list = [...this.state.list];

        const updatedList = list.filter(item => item.id !== id);

        this.setState({ list: updatedList });
    }

    onChange = (event) => {
        this.setState({ [event.target.name]:event.target.value });
      }

    render() {
        return (
            <Fragment>
            <div className="Main">
                <br />

                <header className="Main-header">
                    <h1 className="Main-title">Salon Stasher</h1>
                </header>

                <header className="Main-header-bot">
                </header>

                <div className="wrapper">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Category</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Level</th>
                                <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        
                        {localStorage.stash.map((item, index) => (
                            <CurrentStash
                            key={index}
                            id={item.id}
                            category={item.category}
                            itemname={item.name ? item.name : item.category}
                            level={item.level ? item.level : "N/A"}
                            quantity={item.quantity}
                            />
                        ))}
                       
                    </table>
                </div>

                <div className="wrapper">
                    <form onSubmit={this.addItem}>
                        <div className="form-group">
                            <label for="category">Category</label><br />
                            <select class="form-control" id="category" name="category" onChange={this.onChange}>
                            <option>Color</option>
                            <option>Shampoo</option>
                            <option>Conditioner</option>
                            <option>Developer</option>
                            <option>Miscellaneous</option>
                            </select><br />
                        </div>
                        <div className="form-group">
                            <label for="name">Item Name/Brand</label><br />
                            <input type="text" id="name" name="name" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label for="level">Level</label>
                            <select class="form-control" id="level" name="level" onChange={this.onChange}>
                                <option value={false}>N/A</option>
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>40</option>
                                <option>50</option>
                            </select><br />
                        </div>
                        <div className="form-group">
                            <label for="quantity">Quantity</label><br />
                            <input type="text" id="quantity" name="quantity" onChange={this.onChange} /><br />
                        </div>
                    <button type="submit" class="btn btn-secondary">Add Item</button>
                    </form>
                </div>

            </div>
            </Fragment>
        )
    }


}


export default Main;