import axios from 'axios';

import { ADD_POST, GET_ERRORS, GET_POSTS, POST_LOADING, DELETE_POST, GET_POST } from './types';


// Add post
export const addPost = postData => dispatch => {
    axios({
        method: 'post',
        url: '/api/posts',
        data: postData
    })
        .then(res =>
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Get posts
export const getPosts = () => dispatch => {
    dispatch(setPostLoading);
    axios({
        method: 'get',
        url: '/api/posts',
    })
        .then(res =>
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_POSTS,
                payload: null
            })
        );
}

// Delete Post
export const deletePost = id => dispatch => {
    axios({
        method: 'delete',
        url: `/api/posts/${id}`
    })
        .then(res =>
            dispatch({
                type: DELETE_POST,
                payload: id
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Add like
export const addLike = id => dispatch => {
    axios({
        method: 'post',
        url: `/api/posts/like/${id}`,
    })
        .then(res => dispatch(getPosts()))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Remove like
export const removeLike = id => dispatch => {
    axios({
        method: 'post',
        url: `/api/posts/unlike/${id}`,
    })
        .then(res => dispatch(getPosts()))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Get post
export const getPost = (id) => dispatch => {
    dispatch(setPostLoading);
    axios({
        method: 'get',
        url: `/api/posts/${id}`,
    })
        .then(res =>
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_POST,
                payload: null
            })
        );
}

// Add comment
export const addComment = (postId, commentData) => dispatch => {
    axios({
        method: 'post',
        url: `/api/posts/comment/${postId}`,
        data: commentData
    })
        .then(res =>
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Delete Comment
export const deleteComment = (postId, commentId) => dispatch => {
    axios({
        method: 'delete',
        url: `/api/posts/comment/${postId}/${commentId}`
    })
        .then(res =>
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Set loading state
export const setPostLoading = () => {
    return {
        type: POST_LOADING
    }
}