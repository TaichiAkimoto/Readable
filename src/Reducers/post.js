import { GET_ALL_POST } from '../Actions/post'

export const posts = (state={}, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return posts
    default:
      return state
  }
}
