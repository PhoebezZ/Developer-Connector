import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorRefucer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';

const reducers = combineReducers({
    auth: authReducer,
    errors: errorRefucer,
    profile: profileReducer,
    post: postReducer
});

export default reducers;