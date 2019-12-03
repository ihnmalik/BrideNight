import { AsyncStorage } from 'react-native';
import { UPDATE_PROFILE_NAME,
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
         UPDATE_PROFILE_UUID,
        //  UPDATE_PORFILE_LOGOUT
         } from './types';

export const updateProfileName = (data) => {
    return (dispatch) => {
        AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
           dispatch({type: UPDATE_PROFILE_NAME, payload: data.user.name}) ;
        }) 
    }
}

export const updateProfileEmail = (data) => {
    return (dispatch) => {
        AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
           dispatch({type: UPDATE_PROFILE_EMAIL, payload: data.user.email}) ;
        }) 
    }
}

export const updateProfileMobile = (data) => {
    return (dispatch) => {
        AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
           dispatch({type: UPDATE_PROFILE_MOBILE, payload: data.user.mobile}) ;
        }) 
    }
}

export const updateProfileProfileMobile = (data) => {
    return (dispatch) => {
        AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
           dispatch({type: UPDATE_PROFILE_PROFILE_MOBILE, payload: data.user.profile_mobile}) ;
        }) 
    }
} 

export const updateProfileAboutAR = (data) => {
    return (dispatch) => {
        AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
           dispatch({type: UPDATE_PROFILE_ABOUT_AR, payload: data.user.about_ar}) ;
        }) 
    }
}

export const updateProfileAboutEN = (data) => {
    return (dispatch) => {
        AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
           dispatch({type: UPDATE_PROFILE_ABOUT_EN, payload: data.user.about_en}) ;
        }) 
    }
}


export const updateProfileStatus = (data) => {
    return (dispatch) => {
        AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
           dispatch({type: UPDATE_PROFILE_STATUS, payload: data.user.status}) ;
        }) 
    }
}

export const updateProfileStatusLabel = (data) => {
    return (dispatch) => {
        AsyncStorage.setItem('user', JSON.stringify(user)).then(() => {
           dispatch({type: UPDATE_PROFILE_STATUS_LABEL, payload: data.user.status_label}) ;
        }) 
    }
}

export const updateProfileLocale = (data) => {
    return (dispatch) => {
        AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
           dispatch({type: UPDATE_PROFILE_LOCALE, payload: data.user.locale}) ;
        }) 
    }
}

export const updateProfileAvatar = (data) => {
    return (dispatch) => {
        AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
           dispatch({type: UPDATE_PROFILE_AVATAR, payload: data.user.avatar}) ;
        }) 
    }
}

export const updateCountryCity = (data) => {
    return (dispatch) => {
        // alert(JSON.stringify(data))
        AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
            // alert(JSON.stringify(data))
           dispatch({type: UPDATE_COUNTRY_CITY, payload: data.user}) ;
        }) 
    }
}

export const updateProfilePushToken = (data) => {
    return (dispatch) => {
        AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
           dispatch({type: UPDATE_PROFILE_PUSH_TOKEN, payload: data.user.push_token}) ;
        }) 
    }
}
export const updateProfileUUID = (data) => {
    return (dispatch) => {
        AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
           dispatch({type: UPDATE_PROFILE_UUID, payload: data.user.uuid}) ;
        }) 
    }
}

// export const updateProfileLogOut = () => {
//     return (dispatch) => {
//            dispatch({type: UPDATE_PORFILE_LOGOUT}) ; 
//     }
// }