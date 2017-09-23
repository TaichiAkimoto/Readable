import React, { Component } from 'react';
import Default from './default'

class Category extends Component {
  render() {
    return (
      <div className="App">
        <Default
          category={this.props.match.params.category}
          />
      </div>
    );
  }
}

export default Category
