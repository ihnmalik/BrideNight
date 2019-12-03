import { 
    UPDATE_PROFILE_NAME,
    UPDATE_PROFILE_EMAIL,
    UPDATE_PROFILE_MOBILE,
    UPDATE_PROFILE_PROFILE_MOBILE,
    UPDATE_PROFILE_ABOUT_AR,
    UPDATE_PROFILE_ABOUT_EN,
    UPDATE_PROFILE_STATUS,
    UPDATE_PROFILE_STATUS_LABEL,
    UPDATE_PROFILE_LOCALE,
    UPDATE_PROFILE_AVATAR,
    UPDATE_PROFILE_PUSH_TOKEN,
    UPDATE_COUNTRY_CITY,
    UPDATE_PROFILE_UUID } from '../actions/types';

const INITIAL_STATE = {
        name: '',
        email: '',
        mobile: '',
        profile_mobile: '',
        about_ar: '',
        about_en: '',
        country: '',
        region: '',
        status: '',
        status_label: '',
        locale: '',
        avatar: '',
        push_token: '',
        uuid: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UPDATE_PROFILE_NAME: 
            return {...state, name: action.payload};
        case UPDATE_PROFILE_EMAIL:
            return {...state, email: action.payload};
        case UPDATE_PROFILE_MOBILE:
            return {...state, mobile: action.payload};
        case UPDATE_PROFILE_PROFILE_MOBILE:
            return {...state, profile_mobile: action.payload};
        case UPDATE_PROFILE_ABOUT_AR:
            return {...state, about_ar: action.payload};
        case UPDATE_PROFILE_ABOUT_EN:
            return {...state, about_en: action.payload};
        case UPDATE_PROFILE_STATUS:
            return {...state, status: action.payload};
        case UPDATE_PROFILE_STATUS_LABEL:
            return {...state, status_label: action.payload};
        case UPDATE_PROFILE_LOCALE:
            return {...state, locale: action.payload};
        case UPDATE_PROFILE_AVATAR:
            return {...state, avatar: action.payload};
        case UPDATE_COUNTRY_CITY:
            return {...state, region: action.payload.region, country: action.payload.country};
        case UPDATE_PROFILE_PUSH_TOKEN:
            return {...state, push_token: action.payload};
        case UPDATE_PROFILE_UUID:
            return {...state, uuid: action.payload};
        default:
            return state;
    }
}