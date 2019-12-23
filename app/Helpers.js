import {getState} from "./App";
import {LOCALE, LOCALE_STORAGE_KEY, setLocale} from "./redux/actions/languageAction";
import AsyncStorage from '@react-native-community/async-storage';

export const __ = (key) => {
    try {
        return getState().language.strings[key];
    } catch (e) {
    }
    return "";
};

/**
 * Get Application locale
 * @returns {string}
 */
export const appLocale =  () => {
    // try {
    //     // console.log(getState.language.locale, "==1");
    //     return getState().language.locale;
    // } catch (e) {
    //     console.log(e);
    // }
    // return LOCALE;
    // var locale = null;
    return AsyncStorage
        .getItem(LOCALE_STORAGE_KEY)
        .then((lang) => {
            !lang && setLocale( lang = LOCALE);
            return lang;
        });
    //
    //     .then((locale_storage) => locale_storage || LOCALE);
    //
    // return locale_promise;
    //     .then((lang) => {
    //         console.log(lang);
    //         return lang;
    //         !lang && setLocale(LOCALE) || (locale = lang);
    //     });
    // return locale;
};
/**
 * is App Locale
 * @param locale
 * @returns {boolean}
 */
export const isLocale = (locale) => {
    try {
        return getState().language.locale === locale;
        return this.props.language.locale === locale;
    } catch (e) {
        console.log(e);
    }

    return false;
    // return appLocale() === locale;
};

// const USER_STORAGE_KEY = "user";
/**
 *
 * @returns {Promise<Object>}
 */
export const getUser = () => {
    return AsyncStorage.getItem("user").then( user => user ? JSON.parse(user) : {} );
};