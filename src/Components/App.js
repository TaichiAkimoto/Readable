import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Posts, Category, Post, CreateEdit } from './index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Posts />
          )}
        />
        <Route path='/category/:category' render={({ match }) => (
          <Category
            match={match}
          />
          )}
        />
        <Route exact path='/post/:id' render={() => (
          <Post />
          )}
        />
        <Route path='/create/' render={({ history, match }) => (
          <CreateEdit
            match={match}
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
