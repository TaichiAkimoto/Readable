import * as API from '../Utitilies/API';

export const GET_ALL_POST = 'GET_ALL_POST'
export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const NEW_POST = "NEW_POST"

export const getAllPost = (posts) => ({
  type: GET_ALL_POST,
  posts
})

export const fetchPosts = () => dispatch => (
  API
    .getPosts()
      .then(posts => dispatch(getAllPost(posts)))
);

export const getAllCategory = (categories) => ({
  type: GET_ALL_CATEGORY,
  categories
})

export const fetchCategories = () => dispatch => (
  API
    .getCategories()
      .then(categories => dispatch(getAllCategory(categories)))
)

export const newPost = ( newPost ) => ({
  type: NEW_POST,
  posts: newPost
})

export const createPost = (values) => dispatch => (
  API
    .postAPost(values)
      .then(res => dispatch(newPost({...values, ...res})))
)
