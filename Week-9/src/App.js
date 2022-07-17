import React from 'react';
import './App.css';

class TodoList extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  

  updateInput(key, value) {
    
    this.setState({ [key]: value });
    console.log(this.state);
  }

  addItem() {
    
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
 
    };


    const list = [...this.state.list];

   
    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });

    console.log(this.state);
  }

  

  render() {


    return <>
      <h1>My List</h1>
      <input type="text" value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)}></input>
      <button onClick={() => this.addItem()}>Add Todo</button>
      <h2>Todo List View</h2>
      <ul>
        {this.state.list.map(item => {
          return (
            <li key={item.id}>
              {item.value}
            </li>
          );
        })}
      </ul>
    </>;


  }










}




export default TodoList;