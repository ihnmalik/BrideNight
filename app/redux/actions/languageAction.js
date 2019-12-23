import {CHANGE_LOCALE} from './types';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';


/**
 * Default Application locale
 * @type {string}
 */
export const LOCALE = "ar";
/**
 * AsyncStorage KEY
 * @type {string}
 */
export const LOCALE_STORAGE_KEY = "LANGUAGE";


/**
 * Set Application locale
 * @param locale
 * @returns {function(...[*]=)}
 */
export const setLocale = (locale) => {
    return (dispatch) => {
        AsyncStorage.setItem(LOCALE_STORAGE_KEY, locale)
            .then(() => {
                locale = locale || LOCALE;
                dispatch({
                    type: CHANGE_LOCALE,
                    payload: locale,
                });
                setTimeout(() => {
                    RNRestart.Restart();
                }, 500)
            })
    }
};

export const loadLanguage = () => {
    return (dispatch) => {

    }
};