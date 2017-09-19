import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  fetchPosts,
  fetchCategories,
  changeCategory
} from '../Actions/post'
export const ShowAllPost = "ShowAllPost"

class Default extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getCategories();
  }
  render() {
    const { posts, categories, category, filterCategory } = this.props
    let posts_display = Object.keys(posts).map(index => posts[index])
    if(category !== ShowAllPost) {
      posts_display = posts_display.filter(post => post.category === category)
    }
    let categories_displey = Object.keys(categories).map(index => categories[index])

    return (
      <div className="App">
        <div className="categories-default">
          <button onClick={() => filterCategory(ShowAllPost)}>show all</button>
          {categories_displey.map(catego => (
            <button
              key={catego.name}
              onClick={() => filterCategory(catego.name)}
            >
              {catego.name}
            </button>
          ))}
        </div>
        <ul>
          {posts_display.map(post => (
            <li key={post.id} className="posts-default">
              title : {post.title}<br/>
              body : {post.body}<br/>
              author : {post.author}<br/>
              category : {post.category}
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
    categories,
    category
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPosts: () => dispatch(fetchPosts()),
    getCategories: () => dispatch(fetchCategories()),
    filterCategory: (category) => dispatch(changeCategory(category))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Default)
