import { CHANGE_TO_ARABIC, CHANGE_TO_ENGLISH } from './types';
import { AsyncStorage } from 'react-native';
import RNRestart from 'react-native-restart';

const ar = require('../../i18n/ar.json');
const en = require('../../i18n/en.json');


export const loadLanguage = () => {
    return (dispatch) => {

    }
}

export const changeToEnglish = () => {
    return (dispatch) => {
        AsyncStorage.setItem('language', 'en').then(() => {
          dispatch({type: CHANGE_TO_ENGLISH, payload: en});
          setTimeout(() => {
            RNRestart.Restart()
          }, 500)
        })  
    }
}

export const changeToArabic = () => {
    return (dispatch) => {
        AsyncStorage.setItem('language', 'ar').then(() => {
           dispatch({type: CHANGE_TO_ARABIC, payload: ar}) ;
           setTimeout(() => {
            RNRestart.Restart()
          }, 500)
        })
        
    }
}