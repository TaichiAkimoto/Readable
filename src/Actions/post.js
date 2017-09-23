import * as API from '../Utitilies/API';

export const GET_ALL_POST = 'GET_ALL_POST'
export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const NEW_POST = "NEW_POST"
export const CHANGE_SORT_ORDER = "CHANGE_SORT_ORDER"
export const NEW_VOTE_SCORE = "NEW_VOTE_SCORE"
export const EDIT_POST = "EDIT_POST"

const getAllPost = (posts) => ({
  type: GET_ALL_POST,
  posts
})
export const fetchPosts = () => dispatch => (
  API
    .getPosts()
      .then(posts => dispatch(getAllPost(posts)))
);

const getAllCategory = (categories) => ({
  type: GET_ALL_CATEGORY,
  categories
})
export const fetchCategories = () => dispatch => (
  API
    .getCategories()
      .then(categories => dispatch(getAllCategory(categories)))
)

const newPost = ( newPost ) => ({
  type: NEW_POST,
  posts: newPost
})
export const createPost = (values) => dispatch => (
  API
    .postAPost(values)
      .then(res => dispatch(newPost({...values, ...res})))
)

export const changeSortOrder = (order) => ({
  type: CHANGE_SORT_ORDER,
  order
})

const changeScore = (updatedScore) => ({
  type: NEW_VOTE_SCORE,
  post: updatedScore
})
export const voteForPost = (id, upOrDown) => dispatch => (
  API
    .voteForAPost(id, upOrDown)
      .then(res => dispatch(changeScore(res)))
)

const amendPost = (updatedPost) => ({
  type: EDIT_POST,
  post: updatedPost
})

export const editPost = (id, body) => dispatch => (
  API
   .editAPost(id, body)
    .then(res => dispatch(amendPost(res)))
)
