import React, { Component } from 'react'
import propTypes from 'prop-types';
import TodoItem from './TodoItem';

export class Todos extends Component {
    render() {
        return this.props.todos.map(todo => (

            <TodoItem
                todo={todo}
                toggleTodo={this.props.toggleTodo}
                delTodo={this.props.delTodo}
            />
        ));
    }
}

Todos.propTypes = {
    todos: propTypes.array.isRequired,
    toggleTodo: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
}

export default Todos
