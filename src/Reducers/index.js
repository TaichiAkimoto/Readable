import { combineReducers } from 'redux'
import { posts, categories, category } from './post'

export default combineReducers({
  posts,
  categories,
  category
})
