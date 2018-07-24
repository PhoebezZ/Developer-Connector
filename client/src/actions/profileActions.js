import axios from 'axios';

import { GET_PROFILE, PROFILE_LOAIND, CLEAR_CURRENT_PROFILE, GET_ERRORS } from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios({
        method: 'get',
        url: '/api/profile',
    })
        .then(response =>
            dispatch({
                type: GET_PROFILE,
                payload: response.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        );
}

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
    axios({
        method: 'post',
        url: '/api/profile',
        data: profileData
    })
        .then(response =>
            history.push('/dashboard')
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Profile Loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOAIND
    }
}

// Clear Profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
}