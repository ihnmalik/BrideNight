import React, {Component} from 'react';
import { View, Text, StyleSheet,SafeAreaView, Image, Keyboard, Button,TextInput, KeyboardAvoidingView, TouchableOpacity, StatusBar, ImageBackground, ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeToArabic, changeToEnglish } from '../redux/actions/languageAction';
import { logIn, logOut } from '../redux/actions/authAction';
import Icon from 'react-native-vector-icons/Ionicons';
import { url } from '../utils/appsettings';


    // green:    #7bbe50,
    // blue:  #188ee1,

export class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showError: false,
            errorMsg: '',
            login: '',
            password: '',
            push_token: '',
            uuid: '',
            isLoading: false
        }

        
    }
    
    componentDidMount(){   
    }

    back = () => {
        this.props.navigation.navigate('AppLanguage')
    }

    register = () => {
        this.props.navigation.navigate('Register')
    }

    resetPass = () => {
        this.props.navigation.navigate('ResetPass')
    }

    _submitLogin = () => {
        Keyboard.dismiss();
        const { lang } = this.props.language;
        const { navigate } = this.props.navigation;

        this.setState({isLoading: true});

        if(!this.state.login) return this.setState({showError: true, errorMsg: this.props.language.lang == 'en' ? 'Mobile/Email is compulsory' : 'رقم الجوال/البريد الالكتروني الزامي', isLoading: false});
        if(!this.state.password) return this.setState({showError: true, errorMsg: this.props.language.lang == 'en' ? 'Password is compulsory' : 'حقل كلمة المرور الزامي', isLoading: false});
    
        this.login(this.state.login, this.state.password, this.state.push_token, this.state.uuid, this.props.language.lang);
    } // end of _submitLogin

    login = (log, password, push_token, uuid, lang) => {
        fetch(url + 'auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Language': lang
            },
            body: `login=${log}&password=${password}&push_token=${push_token}&uuid=${uuid}`
            // body: post
        })
        .then(r => r.json())
        .then((re) => {
            // console.log(data)
            if(re.error) return this.setState({showError: true, errorMsg: re.message, isLoading: false});
            if(re.errors){
                for(let err in re.errors) {
                    this.setState({showError: true, errorMsg: re.errors[err], isLoading: false});   
                }
                return;
            }else {

                // let re = data;
                // alert(JSON.stringify(re));

                AsyncStorage.setItem('user', JSON.stringify({token: re.token, user: re.data})).then(() => {
                    this.props.logIn();
                    this.props.navigation.navigate('AppMain');
                })
            }
            // if(!data.error) {
            //     let re = data;
            //     alert(JSON.stringify(re));

            //     // AsyncStorage.setItem('user', JSON.stringify({token: re.token, user: re.data})).then(() => {
            //     //     this.props.logIn();
            //     //     this.props.navigation.navigate('AppMain');
            //     // })
            // }else {
            //     this.setState({showError: true, errorMsg: lang == 'ar' ? 'حدث خطأ أثناء عملية تسجيل الدخول' : 'An error has occurred while logging in', isLoading: false});
            // }
        }) 
    } // end of login


    // input handlers
    _userEmailHandle = login => this.setState({login});
    _passwordHandle = password => this.setState({password});

    render() {

        const { strings, lang } = this.props.language;
        const { login, applang } = strings;
        this.lang = lang;

        return (
            <SafeAreaView style={styles.container}>
                    {/* <StatusBar /> */}
                    <TouchableOpacity onPress={this._dismissKeyboard} activeOpacity={1} style={{flex: 1}}>
                    <ImageBackground source={require('../assets/images/splash.png')} style={{flex: 1}}>
                        <View style={{flexDirection: 'row', padding: 10, marginTop: 14, justifyContent: 'flex-start'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('AppMain')}>
                                <Icon  name="md-arrow-back" color="#fff" size={33}/>
                            </TouchableOpacity>
                        </View>

                        {/* <Ima style={{padding: 10}}>
                            <Text style={{color: '#fff', textAlign: 'center'}}>Bride Night</Text>
                        </View>   */}
                    </ImageBackground>
                    <KeyboardAvoidingView style={{flex: 3, backgroundColor: '#eee'}}>
                        <ScrollView style={{paddingTop: 60}}>
                            <Text style={{textAlign: 'center', fontSize: 19, color: 'gray'}}>Use your credentials to login</Text>
                            
                            <View style={{padding: 18, marginTop: 18}}>
                                 <Text style={{textAlign: 'center', fontSize: 15, color: this.state.showError ? '#DC143C' : 'green'}}>{this.state.errorMsg}</Text>
                                <TextInput placeholder="Email or Mobile" value={this.state.login} autoCapitalize="none" onChangeText={this._userEmailHandle} style={{padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14 }} />

                                <TextInput placeholder="Password" value={this.state.password} onChangeText={this._passwordHandle} secureTextEntry style={{padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14 }} />

                                <TouchableOpacity activeOpacity={.7} onPress={this._submitLogin} style={{padding: 14, backgroundColor: '#000', borderRadius: 25, marginTop: 15}}>
                                    {
                                        this.state.isLoading ? (<ActivityIndicator size="small" color="white" />) : (<Text style={{textAlign: 'center', color: '#fff', fontSize: 14}}>Login</Text>)
                                    }
                                    
                                </TouchableOpacity>

                                <View style={{flexDirection: 'row', marginTop: 27, justifyContent: 'center'}}>
                                    <Text style={{textAlign: 'center', color: 'gray'}}>Haven't got an account?</Text>
                                    <TouchableOpacity activeOpacity={.6} style={{marginHorizontal: 5}} onPress={() => this.props.navigation.navigate('Register')}><Text style={{textDecorationLine: 'underline'}}>Sign Up</Text></TouchableOpacity>
                                </View>

                                <View style={{flexDirection: 'row', marginTop: 27, justifyContent: 'center'}}>
                                    <Text style={{textAlign: 'center', color: 'gray'}}>Forgot password?</Text>
                                    <TouchableOpacity activeOpacity={.6} style={{marginHorizontal: 5}} onPress={() => this.props.navigation.navigate('Reset')}><Text style={{textDecorationLine: 'underline'}}>Reset</Text></TouchableOpacity>
                                </View>
                                {/* <View style={{flexDirection: 'row', marginTop: 27, justifyContent: 'center'}}>
                                    <TouchableOpacity activeOpacity={.6} style={{marginHorizontal: 5}} onPress={() => this.props.navigation.navigate('Code')}><Text style={{textDecorationLine: 'underline'}}>Verification Code</Text></TouchableOpacity>
                                </View> */}
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
const mapStateToProps = state => {
    const { language, auth } = state;
    return { language, auth };
}

const mapDispatchToProps = dispatch => {
return bindActionCreators({
    changeToArabic,
    changeToEnglish,
    logIn,
    logOut
}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    greenContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formContainer: {
        flex: 3,
        padding: 10,
        justifyContent: 'flex-start'
    },
    blueContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    input: {
        flexDirection: 'row',
        justifyContent: this.lang == 'en' ? 'flex-start' : 'flex-end',
        padding: 10,
        borderBottomWidth: 2,
        borderColor: '#7bbe50',
        marginTop: 12,
        marginHorizontal: 17
    },
    loginBtn: {
        marginTop: 15,
        padding: 15,
        backgroundColor: '#7bbe50',
        alignItems: 'center',
        borderRadius: 25
    },
    loginbtnText: {
        color: '#fff',
    },
    forgotPassContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    createAccountContainer: {
        flex: 1,
        padding: 8,
        alignItems: 'center'
        
    }
})