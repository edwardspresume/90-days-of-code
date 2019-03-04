import React, { Component } from 'react'
import propTypes from "prop-types";

export class TodoItem extends Component {

    getStyle = () => {
        return {
            padding: '10px',
            backgroundColor: "#f4f4f4",
            borderBottom: '1px solid #ddd',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }

    render() {

        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.toggleTodo.bind(this, id)} />
                    {title}
                    <button className="btn" onClick={this.props.delTodo.bind(this, id)}>X</button>

                </p>
            </div>
        )
    }
}


// PropTypes
TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
};

export default TodoItem
