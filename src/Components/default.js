import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  fetchPosts,
  fetchCategories,
  changeSortOrder,
  voteForPost,
} from '../Actions/post'
import { ShowAllPost, Sorts } from '../Utitilies/constants'
import PropTypes from 'prop-types'

var sortBy = require('sort-by');

class Default extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
  }
  componentDidMount() {
    if(!this.props.posts.length){
      this.props.getPosts();
      this.props.getCategories();
    }
  }
  render() {
    const { category, posts, categories, sortOrder, changeOrder, vote } = this.props
    let posts_display = Object.keys(posts).map(index => posts[index])
    let categories_display = Object.keys(categories).map(index => categories[index])
    if(category !== ShowAllPost) {
      posts_display = posts_display.filter(post => post.category === category)
    }
    posts_display.sort(sortBy('-'+sortOrder))

    return (
      <div className="App">
        <div className="categories-default">
          <Link to={'/'}>show all</Link>
          {categories_display.map(catego => (
            <Link
              key={catego.name}
              to={'/category/'+catego.name}
            >{catego.name}&emsp;</Link>
          ))}
        </div>
        <div className="sortOrder-default">
          {Sorts.map(sort => (
            <button
              key={sort}
              onClick={() => changeOrder(sort)}
            >{sort}</button>
          ))}
        </div>
        <ul>
          {posts_display.map(post => (
            <div key={post.id} className="posts-default">
              <li>
                title : {post.title}<br/>
                body : {post.body}<br/>
                author : {post.author}<br/>
                category : {post.category}<br/>
                voteScore: {post.voteScore}<br/>
                timestamp: {post.timestamp}
              </li>
              <button onClick={() => vote(post.id, {"option": "upVote"})}>upVote</button>
              <button onClick={() => vote(post.id, {"option": "downVote"})}>downVote</button>
            </div>
          ))}
        </ul>
        <Link
            className="new-post"
            to="/create"
          >Create New Post</Link>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts,
    categories: state.categories,
    sortOrder: state.sortOrder
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getPosts: () => dispatch(fetchPosts()),
    getCategories: () => dispatch(fetchCategories()),
    changeOrder: (order) => dispatch(changeSortOrder(order)),
    vote: (id, upOrDown) => dispatch(voteForPost(id, upOrDown))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Default)
