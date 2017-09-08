import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import { Default, Category, Post, CreateEdit } from './index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Default />
          )}
        />
        <Route path='/category/:category' render={() => (
          <Category />
          )}
        />
        <Route exact path='/post/:id' render={() => (
          <Post />
          )}
        />
        <Route exact path='/create/:id' render={() => (
          <CreateEdit />
          )}
        />
      </div>
    );
  }
}

export default App;
