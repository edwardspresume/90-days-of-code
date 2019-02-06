import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add todo.."
          style={{ flex: "10", padding: "10px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input style={styledSubmit} type="submit" value="Submit" />
      </form>
    );
  }
}

const styledSubmit = {
  flex: "1",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  padding: "7px 20px",
  display: "inline-block",
  backgroundColor: "#555"
};

export default AddTodo;
