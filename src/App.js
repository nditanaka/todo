import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Get dinner with friends',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with res-life',
        completed: false
      },
    ]
  }
  render() {
    // console.log(this.state.todos)
    return (

      <div>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
