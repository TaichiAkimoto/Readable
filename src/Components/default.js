import React, { Component } from 'react';
import { ShowAllPost, VoteScore, DateCreated} from '../Utitilies/constants'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

var sortBy = require('sort-by');
const SortContent = [VoteScore, DateCreated]

class Default extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired
  }
  changeSortOrder(sortOrder) {
    this.setState({ sortOrder })
  }
  render() {
    const { category, categories, posts } = this.props
    if(category !== ShowAllPost) {
      posts = posts.filter(post => post.category === category)
    }
    if(category === VoteScore) {
      posts.sort(sortBy('-voteScore'))
    } else {
      posts.sort(sortBy('-timestamp'))
    }

    return (
      <div className="App">
        <div className="categories-default">
          <Link to={'/'}>show all</Link>
          {categories.map(catego => (
            <Link
              key={catego.name}
              to={'/category/'+catego.name}
            >{catego.name}</Link>
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
          {posts.map(post => (
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
        <Link
            className="new-post"
            to="/create"
          >Create New Post</Link>
      </div>
    );
  }
}

export default Default
