import React, { Component } from 'react';
import './App.css';
import InputTodo from './components/InputTodo/InputTodo';
import ListTodo from './components/ListTodo/ListTodo';


class App extends Component {
 

  render() {
    return (
      <div className="App">
        <InputTodo onAddTodo={this.handleAddTodo}/>
        <ListTodo/>
      </div>
    );
  }
}

export default App;
