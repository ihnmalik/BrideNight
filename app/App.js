import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import Thunk from 'redux-thunk';
import {Text, View} from 'react-native';
import {persistReducer, persistStore} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage'

import {AppContainer} from './Container';
import {mapDispatchToProps, mapStateToProps} from "./utils/AppConnecter";
// import {appLocale} from "./redux/actions/languageAction";
import reducers from "./redux/reducers";
import {appLocale} from "./Helpers";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: ['language','auth'],
    whitelist: ['language', 'auth']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, {}, applyMiddleware(Thunk));

const persist = persistStore(store);
const getState = store.getState;

export {
    store,
    persist,
    getState
};
let crntComp = null;

export const setComp = ($this) => {
        return crntComp = $this;
    };
export const getComp = () => {
        return crntComp;
    };
export const getLangOf = ($this) => {
    $this = $this || getComp();
    return $this.props.language.strings[ $this.constructor.name ];
};
export const getLangs = () => {
    return getLangOf(getComp());
};

export default class App extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

    }


    componentDidMount() {
        // AsyncStorage.removeItem('language').then(() => {})
        // AsyncStorage.removeItem('user').then(() => {})
        // AsyncStorage.removeItem('isLoggedIn').then(() => {})
        this._isMounted = true;
        if (this._isMounted) {
            // isLocale('ar') &&
            // setLocale('en');
            appLocale().then((locale)=>this.setState({lang: locale, locale: locale}));

            // console.log(1,this.pr.language.locale);
            // console.log(2,JSON.stringify(getState().language));
            //

            // AsyncStorage.getItem('language').then((lang) => {
            //     if (lang) {
            //         //  alert(lang)
            //         this.setState({lang})
            //     } else {
            //         this.setState({lang: 'ar'})
            //     }
            //
            // })
            // console.log(12222);

        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        if (this._isMounted) {
            return (
                <Provider store={store}>
                    {/*<AppContainerEn/>*/}
                    <AppContainer/>
                </Provider>
            );
        } else {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000'}}>
                    <Text style={{color: '#fff'}}>Loading ...</Text>
                </View>
            )
        }

    }
}
// export { store };
connect(mapStateToProps, mapDispatchToProps)(App);