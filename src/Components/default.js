import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../Actions/post'

class Default extends Component {
  componentDidMount() {
    console.log(this.props.posts);
  }
  render() {
    return (
      <div className="App">
        Default
      </div>
    );
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts: posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPosts: () => dispatch(fetchPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Default)
