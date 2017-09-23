import React, { Component } from 'react';
import { ShowAllPost } from '../Utitilies/constants'
import Default from './default'

export default class Posts extends Component {
  render() {
    return (
      <div className="App">
        <Default
          category={ShowAllPost}
        />
      </div>
    )
  }
}
