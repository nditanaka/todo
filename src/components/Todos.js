import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';
class Todos extends Component {

  render() {
    // console.log(this.props.todos)
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} deleteTodo={this.props.deleteTodo} />
    ));
  }
}

// PropTypes - prop validation
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todos;
