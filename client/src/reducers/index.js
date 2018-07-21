import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorRefucer from './errorReducer';

const reducers = combineReducers({
    auth: authReducer,
    errors: errorRefucer
});

export default reducers;