import { AsyncStorage } from 'react-native';
import { LOGIN, LOGOUT } from './types';


export const logOut = () => {
    return (dispatch) => {
        AsyncStorage.setItem('isLoggedIn', false).then(() => {
            dispatch({type: LOGOUT, payload: false}) ; 
        })
    }
}

export const logIn = () => {
    return (dispatch) => {
        AsyncStorage.setItem('isLoggedIn', true).then(() => {
            dispatch({type: LOGOUT, payload: true}) ; 
        })
    }
}