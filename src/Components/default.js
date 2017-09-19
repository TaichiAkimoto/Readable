import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../Actions/post'

class Default extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts } = this.props
    return (
      <div className="App">
        {Object.keys(posts).map(index => (
          <li key={posts[index].id} className="posts-default">
            title : {posts[index].title}<br/>
            body : {posts[index].body}<br/>
            author : {posts[index].author}<br/>
          </li>
        ))}
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
