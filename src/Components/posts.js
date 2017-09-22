import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  fetchPosts,
  fetchCategories
} from '../Actions/post'
import { ShowAllPost, VoteScore, DateCreated} from '../Utitilies/constants'
import Default from './default'

class Posts extends Component {
  componentDidMount() {
    if(!this.props.posts.length){
      this.props.getPosts();
      this.props.getCategories();
    }
  }
  render() {
    const { posts, categories } = this.props
    let posts_display = Object.keys(posts).map(index => posts[index])
    let categories_displey = Object.keys(categories).map(index => categories[index])

    return (
      <div className="App">
        <Default
          category={ShowAllPost}
          categories={categories_displey}
          posts={posts_display}
        />
      </div>
    );
  }
}

function mapStateToProps ({ posts, categories }) {
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
)(Posts)
