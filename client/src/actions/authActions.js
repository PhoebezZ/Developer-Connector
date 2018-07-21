import axios from 'axios';

import { GET_ERRORS } from './types';

// Register User 
export const registerUser = (userData, history) => dispatch => {
    axios({
        method: 'post',
        url: '/api/users/register',
        data: userData
    })
        .then(response => history.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};