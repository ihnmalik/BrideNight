import AsyncStorage from '@react-native-community/async-storage'

import { LOGIN, LOGOUT } from './types';


export const logOut = () => {
    return (dispatch) => {
        AsyncStorage.setItem('isLoggedIn', JSON.stringify(false)).then(() => {
            dispatch({type: LOGOUT, payload: false}) ; 
        })
    }
}

export const logIn = () => {
    console.log('login dispatches')
    return (dispatch) => {
        console.log('inside dispatch')
        AsyncStorage.setItem('isLoggedIn', JSON.stringify(true)).then(() => {
            dispatch({type: LOGOUT, payload: true}) ; 
        })
    }
}