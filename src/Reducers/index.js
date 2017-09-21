import { combineReducers } from 'redux'
import { posts, categories } from './post'

export default combineReducers({
  posts,
  categories
})
