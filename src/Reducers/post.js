import { GET_ALL_POST, GET_ALL_CATEGORY, NEW_POST, CHANGE_SORT_ORDER
} from '../Actions/post'

export const posts = (state={}, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return action.posts
    case NEW_POST:
      return [...state, action.posts]
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

export const sortOrder = (state="VoteScore", action) => {
  switch (action.type) {
    case CHANGE_SORT_ORDER:
      return action.order
    default:
      return state
  }
}
