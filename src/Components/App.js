import React, { Component } from 'react';
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
        <Route path='/create/:id' render={({ history }) => (
          <CreateEdit
            onSubmitForm={() => {
              history.push('/')
            }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
