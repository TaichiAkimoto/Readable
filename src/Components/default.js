import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  fetchPosts,
  fetchCategories
} from '../Actions/post'
import { ShowAllPost, VoteScore, DateCreated} from '../Utitilies/constants'
var sortBy = require('sort-by');
const SortContent = [VoteScore, DateCreated]

class Default extends Component {
  state = {
    category: ShowAllPost,
    sortOrder: VoteScore
  }
  changeCategory(category) {
    this.setState({ category })
  }
  changeSortOrder(sortOrder) {
    this.setState({ sortOrder })
  }
  componentDidMount() {
    this.props.getPosts();
    this.props.getCategories();
  }
  render() {
    const { category, sortOrder } = this.state
    const { posts, categories } = this.props
    let posts_display = Object.keys(posts).map(index => posts[index])
    if(category !== ShowAllPost) {
      posts_display = posts_display.filter(post => post.category === category)
    }
    let categories_displey = Object.keys(categories).map(index => categories[index])

    if(sortOrder === VoteScore) {
      posts_display.sort(sortBy('-voteScore'))
    } else {
      posts_display.sort(sortBy('timestamp'))
    }

    return (
      <div className="App">
        <div className="categories-default">
          <button onClick={() => this.changeSortOrder()}>change Order</button>
          <button onClick={() => this.changeCategory(ShowAllPost)}>show all</button>
          {categories_displey.map(catego => (
            <button
              key={catego.name}
              onClick={() => this.changeCategory(catego.name)}
            >{catego.name}</button>
          ))}
        </div>
        <div className="sortOrder-default">
          {SortContent.map(sort => (
            <button
              key={sort}
              onClick={() => this.changeSortOrder(sort)}
            >{sort}</button>
          ))}
        </div>
        <ul>
          {posts_display.map(post => (
            <li key={post.id} className="posts-default">
              title : {post.title}<br/>
              body : {post.body}<br/>
              author : {post.author}<br/>
              category : {post.category}<br/>
              voteScore: {post.voteScore}<br/>
              timestamp: {post.timestamp}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps ({ posts, categories, category }) {
  return {
    posts,
    categories
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
