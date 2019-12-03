import { combineReducers } from 'redux';

// reducers
import languageReducer from './languageReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';


export default combineReducers({
    language: languageReducer,
    auth: authReducer,
    profile: profileReducer
})