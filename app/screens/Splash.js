import React, {Component} from 'react';
import {ActivityIndicator, ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import {url} from '../utils/appsettings';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {mapDispatchToProps, mapStateToProps} from "../utils/AppConnecter";
import {appLocale, getUser} from "../Helpers";

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

            getUser()
            .then((user) => {
                if( Object.keys(user).length ) {
                    this.refreshToken(user.token, user);
                }
                return user;
            })
            .finally(() => {
                appLocale()
                    .then((lang) => {
                        return this.props.navigation.navigate('AppMain');
                    });
            })
            .catch((er) => {
                console.debug(this.constructor.name, ": 44", er);
            });
    }

    refreshToken = (token, user) => {

          alert(JSON.stringify(user));
        fetch(url + 'auth/refresh-token', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Language': this.props.language.lang,
                'Authorization': `Bearer ${token}`
            }
        })
            .then((resp) => resp.json())
            .then((res) => {
                // alert(JSON.stringify(res.data.token))
                // alert(JSON.stringify(res))
                // let re = JSON.parse(res["_bodyInit"]);
                // alert(JSON.stringify(res))
                if (res.error) {
                    return AsyncStorage.removeItem('user').then(() => {
                        this.props.logOut();
                        navigate('AppMain');
                    })
                }
                if (res.data.token) {

                    return AsyncStorage.setItem('user', JSON.stringify({...user, token: res.data.token})).then(() => {
                        // AsyncStorage.getItem('user').then((dat) => {
                        //     alert(JSON.stringify(JSON.parse(dat)))
                        // })
                        setTimeout(() => {
                            this.props.navigation.navigate('AppMain');
                        }, 2000)
                    })
                }

                this.props.navigation.navigate('AppMain');

            }).catch((e) => {
            // alert("not updated")
            console.log(e)
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
                <ImageBackground source={require('../assets/images/splash.png')} style={styles.imgBack}>
                    <ActivityIndicator size="small" color="#fff"/>
                </ImageBackground>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    imgBack: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
