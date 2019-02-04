import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

export class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        todo={todo}
        key={todo.id}
        toggleTodo={this.props.toggleTodo}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
