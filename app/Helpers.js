import {getState} from "./App";
import {LOCALE, LOCALE_STORAGE_KEY, setLocale} from "./redux/actions/languageAction";
import AsyncStorage from '@react-native-community/async-storage';
import {url} from "./utils/appsettings";

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
export const appLocale = () => {
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
            !lang && setLocale(lang = LOCALE);
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
    return AsyncStorage.getItem("user").then(user => user ? JSON.parse(user) : {});
};

/**
 * @uses fetch
 */
class fether {
    errors = null;
    lastResponse = null;
    mainUrl = url;
    body = null;
    url = "";
    method = "GET";
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'app-name': "Bride Night",
        'app-version': "1.0",
    };
    currentComponent = null;
    fetch = null;

    constructor(currentComponent = null, url, method) {
        this.currentComponent = currentComponent;
        this.update(url, method);
    }

    execute (url,method,body){
        if( arguments.length )
            this.update(...arguments);

        this.fetch = fetch(this.mainUrl + this.url, {
            method: this.method,
            headers: {
                'Language': this.currentComponent.props.language.lang,
                ...this.headers
            },
            body: this.updateBody()
        }).then(async response => {
            // console.warn("then");
            this.lastResponse = response;
            if (this.lastResponse.status !== 200) {
                this.errors = await response.json();
                console.warn(errors);
                throw new Error(this.lastResponse.status);
            }
            return response;
        });
    }

    update(url,method,body) {
        this.url = url || this.url;
        this.method = method || this.method;
        this.body = body || this.body;
    }

    updateBody(){
        let bodyString = "";
        for ( let key in bodyString){
            bodyString += (key + "=" + bodyString[key].toString() + "&");
        }
        return bodyString.toString().replace(new RegExp("[&]+$"), "");
    }

    catch = (message,error) => {
        console.log(this.lastResponse);
        // console.debug(this.constructor.name, "91", err);

       this.fetch && this.fetch.catch( (e ) => {

       });
    };

    get(url,body) {
        if (arguments.length)
            this.update(url,"GET",body);

        this.execute();
        this.catch && this.fetch && this.fetch.catch(this.catch);

        return this;
    }

    json(data) {
        this.fetch && this.fetch.then(x => x.json());

        return this;
    }

    then(callable) {
        this.fetch && this.fetch.then(callable);
        return this;
    }

    addHeader($key, $value = null) {
        this.headers[$key] = $value;
        return this;
    }

    setToken($token) {
        this.addHeader('Authorization', `Bearer ${$token}`);
        return this;
    }
}

/**
 *
 * @param componentName
 * @param url
 * @param method
 * @returns {fether}
 */
export const fetcher = function (componentName = null, url = "", method = "GET") {
    return new fether(...arguments);
};