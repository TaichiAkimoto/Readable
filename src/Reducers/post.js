import { GET_ALL_POST, GET_ALL_CATEGORY, CHANGE_CATEGORY } from '../Actions/post'
import { ShowAllPost } from '../Components/default'

export const posts = (state={}, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return action.posts
    default:
      return state
  }
}

export const categories = (state={}, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return action.categories
    default:
      return state
  }
}

export const category = (state=ShowAllPost, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return action.category
    default:
      return state
  }
}
