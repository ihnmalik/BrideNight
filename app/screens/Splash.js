import React, {Component} from 'react';
import {ActivityIndicator, ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import {API_URL, url} from '../utils/appsettings';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {mapDispatchToProps, mapStateToProps} from "../utils/AppConnecter";
import {appLocale, fetcher, getUser} from "../Helpers";

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

          // alert(JSON.stringify(user));
        fetcher(this,API_URL('refreshToken'))
            .setToken(token)
            // .setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE2LCJpc3MiOiJodHRwczovL2JyaWRlbmlnaHQuYmFuYW50ZWMuY29tL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNTc0OTM3OTIzLCJleHAiOjE1NzUxMTA3MjMsIm5iZiI6MTU3NDkzNzkyMywianRpIjoiOUVxTGFpTXk3b2xhdE9EZCJ9.YhWtTqp7FCRFT1opH2qIQ3jyX4AYyrCVMqXpm4yLl-4")
            // .setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjczLCJpc3MiOiJodHRwczovL2JyaWRlbmlnaHQuYmFuYW50ZWMuY29tL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNTc3MTAzMjA2LCJleHAiOjE1NzcyNzYwMDYsIm5iZiI6MTU3NzEwMzIwNiwianRpIjoiYmtLMDJoZGpKZXhKdjFFSCJ9.YvUkNtIY-ORwMkEVYDiiPAyZWVzsXnQ_nsG7A36z4TM")
            // .get('auth/refresh-token')
            .get();
            // .error( error => {
            //     console.log("my error");
            //     console.log(error);
            // });
            // .json()
            // .then((res) => {
            //     console.log("refresh", res);
            //     // console.log(res.fetch.header);
            //     // alert(JSON.stringify(res.data.token))
            //     // alert(JSON.stringify(res))
            //     // let re = JSON.parse(res["_bodyInit"]);
            //     // alert(JSON.stringify(res))
            //     return ;
            //     if (res.error) {
            //         console.warn("error fetch");
            //         console.warn(res);
            //         console.warn(res.headers);
            //         return ;
            //         return AsyncStorage.removeItem('user').then(() => {
            //             this.props.logOut();
            //             navigate('AppMain');
            //         });
            //     }
            //     if (res.data.token) {
            //
            //         return AsyncStorage.setItem('user', JSON.stringify({...user, token: res.data.token})).then(() => {
            //             // AsyncStorage.getItem('user').then((dat) => {
            //             //     alert(JSON.stringify(JSON.parse(dat)))
            //             // })
            //             setTimeout(() => {
            //                 this.props.navigation.navigate('AppMain');
            //             }, 2000)
            //         })
            //     }
            //
            //     this.props.navigation.navigate('AppMain');
            //     return res;
            // }).catch((e) => {
            //     // alert("not updated")
            //     console.log("error splash refresh token", e);
            // });
return;
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
