import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorRefucer from './errorReducer';
import profileReducer from './profileReducer';

const reducers = combineReducers({
    auth: authReducer,
    errors: errorRefucer,
    profile: profileReducer
});

export default reducers;