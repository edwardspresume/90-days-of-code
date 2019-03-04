import uuid from 'uuid';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Main Style
import '../scss/main.scss';

// Components
import Header from './components/layout/Header';
import About from './components/page/About';
import AddTodo from './components/todo/AddTodo';
import Todos from './components/todo/Todos';

class App extends Component {

  state = {
    todos: [
      { id: uuid.v4(), title: 'Refactor codebase', completed: false },
      { id: uuid.v4(), title: 'Learn PHP', completed: false },
      { id: uuid.v4(), title: 'Reconstruct website', completed: false },
    ]
  }

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  toggleTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    });
  }

  delTodo = id => this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });

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
          )}
          />

          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
