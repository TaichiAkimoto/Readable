import * as API from '../Utitilies/API';

export const GET_ALL_POST = 'GET_ALL_POST'

export const getAllPost = (posts) => ({
  type: GET_ALL_POST,
  posts
})

export const fetchPosts = () => dispatch => (
  API
    .getPosts()
      .then(posts => dispatch(getAllPost(posts)))
);
