import { 
    LOGIN,
    LOGOUT 
} from '../actions/types';

const INITIAL_STATE = {
        isLoggedIn: false,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN: 
            return {...state, isLoggedIn: action.payload};
        case LOGOUT:
            return {...state, isLoggedIn: action.payload};
        default:
            return state;
    }
}