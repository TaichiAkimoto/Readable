import { combineReducers } from 'redux'
import { posts, categories, sortOrder } from './post'

export default combineReducers({
  posts,
  categories,
  sortOrder
})
