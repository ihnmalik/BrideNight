import {CHANGE_LOCALE} from '../actions/types';
import {LOCALE} from "../actions/languageAction";

/**
 * Allowed Application Languages
 * @type Object {}
 */
export const ALLOWED_LANGUAGES = {
    ar: require('../../i18n/ar.json'),
    en: require('../../i18n/en.json')
};

/**
 * Trans Helper
 * @param key
 * @returns {*|string}
 * @private
 */
// export const __ = key => {
//     return ALLOWED_LANGUAGES[appLocale()][key] || "";
// };
/**
 *
 * Get Application Language Variables
 * @returns {*}
 * @private
 */
// export const _LANGUAGES = () => ALLOWED_LANGUAGES[appLocale()];

const INITIAL_STATE = {
    lang: LOCALE,
    locale: LOCALE,
    strings: ALLOWED_LANGUAGES[LOCALE],
};

export default (state = INITIAL_STATE, action) => {

    const TYPE = action.payload || LOCALE;
    // console.log(action.type,"TYPE", TYPE);

    switch (action.type) {
        case CHANGE_LOCALE:
            return {
                ...INITIAL_STATE,
                lang: TYPE,
                locale: TYPE,
                strings: ALLOWED_LANGUAGES[TYPE],
            };
        default:
            return state;
    }
}