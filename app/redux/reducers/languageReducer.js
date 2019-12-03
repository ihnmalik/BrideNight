import { CHANGE_TO_ENGLISH, CHANGE_TO_ARABIC } from '../actions/types';

// var en = require('../../i18n/en.json')
var ar = require('../../i18n/ar.json')

const INITIAL_STATE = {
    lang: 'ar',
    strings: ar
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_TO_ARABIC: 
            return {...INITIAL_STATE, lang: 'ar', strings: action.payload};
        case CHANGE_TO_ENGLISH:
            return {...INITIAL_STATE, lang: 'en', strings: action.payload};
        default:
            return state;
    }
}