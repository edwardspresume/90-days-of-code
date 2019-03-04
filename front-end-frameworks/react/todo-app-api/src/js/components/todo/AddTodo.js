import React, { Component } from 'react'
import propTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ''
    }

    updateState = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name='title'
                    value={this.state.title}
                    placeholder='Add Todo...'
                    onChange={this.updateState}
                    style={{ flex: "10", padding: "10px" }}
                />
                <input type="submit" value='Submit' />
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: propTypes.func.isRequired
};

export default AddTodo
