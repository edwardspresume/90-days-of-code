import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <header>
                <h1>Todo List</h1>
                <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
            </header>
        )
    }
}

export default Header
