import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, StatusBar, Platform, ImageBackground, AsyncStorage, ActivityIndicator } from 'react-native';
import {url} from '../utils/appsettings';
// import { changeToArabic, changeToEnglish } from '../redux/actions/languageAction';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { logIn, logOut } from '../redux/actions/authAction';



const myFont = Platform.select({
    ios: {
      fontFamily: 'GESSTwoLight-Light',
    },
    android: {
      fontFamily: 'ArbFONTS-rabi3',
    },
  })
    // green:    #7bbe50,
    // blue:  #188ee1,

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    //   alert(JSON.stringify(this.props.auth))
    //   AsyncStorage.removeItem('user').then(() => {})
    AsyncStorage.getItem('user')
    .then((data) => {
       
      if(data) {
        // return alert(JSON.stringify(data))
        AsyncStorage.getItem('language')
        .then((lang) => {
            if(!lang) return this.props.navigation.navigate('AppLanguage')
            let user = JSON.parse(data)
            // alert(JSON.stringify(user))  
            this.refreshToken(user.token, user)
         })

        //  this.props.navigation.navigate('AppMain')

      }else {
        //   alert("this line is excuted: NOT LOGGED IN")

        AsyncStorage.getItem('language')
        .then((lang) => {
            if(!lang) return this.props.navigation.navigate('AppLanguage')
            setTimeout(() => {
                this.props.navigation.navigate('AppMain')
              }, 2000)
         })
      } 
    }).catch((er) => {
        alert(JSON.stringify(er))
    })

  } // end of componentDidMount()

  refreshToken = (token, user) => {
    //   alert(JSON.stringify(user))
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
        if(res.error) {
            return AsyncStorage.removeItem('user').then(() => {
                this.props.logOut();
                navigate('AppMain');
            })
        }
        if(res.data.token) {
            
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
  } // end of refreshToken

  render() {
    return (
        <View style={styles.container}>
             <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
             <ImageBackground source={require('../assets/images/splash.png')} style={styles.imgBack}>
                <ActivityIndicator size="small" color="#fff"/>
             </ImageBackground>
        </View>
    );
  }
}

const mapStateToProps = state => {
    const { language, auth } = state;
    return { language, auth };
}

const mapDispatchToProps = dispatch => {
return bindActionCreators({
    // changeToArabic,
    // changeToEnglish
    logIn,
    logOut
}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)

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
})
