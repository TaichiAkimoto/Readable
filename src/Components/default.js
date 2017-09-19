import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts, fetchCategories } from '../Actions/post'

class Default extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getCategories();
  }
  render() {
    const { posts, categories } = this.props
    console.log(categories[0]);
    return (
      <div className="App">
        <div className="categories-default">
          {Object.keys(categories).map(index => (
            <span key={categories[index].name}>
              {categories[index].name}
            </span>
          ))}
        </div>
        <ul>
          {Object.keys(posts).map(index => (
            <li key={posts[index].id} className="posts-default">
              title : {posts[index].title}<br/>
              body : {posts[index].body}<br/>
              author : {posts[index].author}<br/>
              category : {posts[index].category}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps ({ posts, categories }) {
  return {
    posts: posts,
    categories: categories,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPosts: () => dispatch(fetchPosts()),
    getCategories: () => dispatch(fetchCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Default)
