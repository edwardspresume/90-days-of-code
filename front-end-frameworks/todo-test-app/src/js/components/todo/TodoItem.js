import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: "10px",
      backgroundColor: "#f4f4f4",
      borderBottom: "1px solid #ddd",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          {" "}
          <input
            type="checkbox"
            name=""
            onChange={this.props.toggleTodo.bind(this, id)}
          />{" "}
          {title}
          <button style={styledBtn} onClick={this.props.delTodo.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}

const styledBtn = {
  border: "none",
  float: "right",
  color: "#fff",
  cursor: "pointer",
  padding: "5px 8px",
  borderRadius: "50%",
  backgroundColor: "#ff0000"
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
