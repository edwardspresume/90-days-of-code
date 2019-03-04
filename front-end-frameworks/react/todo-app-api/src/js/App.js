import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Style
import '../scss/main.scss'

// Components
import Header from './components/layout/Header';
import About from './components/page/About';
import AddTodo from './components/todo/AddTodo';
import Todos from './components/todo/Todos';

class App extends Component {

  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.setState({ todos: res.data }));
  };

  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos/', { title, completed: false })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  };

  toggleTodo = id => {

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    })
  };

  delTodo = id => {

    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos
                todos={this.state.todos}
                toggleTodo={this.toggleTodo}
                delTodo={this.delTodo}
              />

            </React.Fragment>
          )} />

          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
