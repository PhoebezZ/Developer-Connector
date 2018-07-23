import axios from 'axios';

import { GET_PROFILE, PROFILE_LOAIND, CLEAR_CURRENT_PROFILE } from './types';

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