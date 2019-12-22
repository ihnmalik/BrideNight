import React, {Component} from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import Thunk from 'redux-thunk';
import { Text, Image, TouchableOpacity,View, Platform } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage'

import {AppContainerAr, AppContainerEn} from './Container';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: ['language','auth'],
    whitelist: ['language', 'auth']
}


const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, {}, applyMiddleware(Thunk))


persistStore(store)


export default class App extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)

        this.state = {
            lang: 'ar'
        }

    }



    componentDidMount() {
        // AsyncStorage.removeItem('language').then(() => {})
        // AsyncStorage.removeItem('user').then(() => {})
        // AsyncStorage.removeItem('isLoggedIn').then(() => {})
        this._isMounted = true;

        if(this._isMounted) {
         AsyncStorage.getItem('language').then((lang) => { 
             if(lang) {
                //  alert(lang)
                 this.setState({lang})
             } else {
                 this.setState({lang: 'ar'})
             }   
                 
        })

        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        if(this._isMounted) {
            return (
                <Provider store={store}>
                    {this.state.lang == 'ar' ? (<AppContainerAr/>) : (<AppContainerEn/>)}
                </Provider>
            );
        }else {
            return (
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000'}}>
                  <Text style={{color: '#fff'}}>Loading ...</Text>  
                </View>   
            )
        }

    }
}