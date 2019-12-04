import React, { Component } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, ActivityIndicator,
    Alert, Image, Keyboard, Button, TextInput, KeyboardAvoidingView, TouchableOpacity, StatusBar, ImageBackground, ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeToArabic, changeToEnglish } from '../redux/actions/languageAction';
import Icon from 'react-native-vector-icons/Ionicons';
import { url } from '../utils/appsettings';

// green:    #7bbe50,
// blue:  #188ee1,

export class Reset extends Component {
    state = {
        email: '',
        showError: false,
        errorMsg: '',
        isLoading: false
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
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


    handleResetPass = () => {
        this.setState({ isLoading: true })
        if (this.state.email.length > 0) {
            const { lang } = this.props.language
            fetch(url + 'auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                    'Language': lang
                },
                body: `login=${this.state.email}`
                // body: post
            })
                .then(r => {
                    console.log(r)
                    return r.json()
                })
                .then((re) => {
                    if (re.error) return this.setState({ showError: true, errorMsg: re.message, isLoading: false });
                    if (re.errors) {
                        for (let err in re.errors) {
                            this.setState({ showError: true, errorMsg: re.errors[err], isLoading: false });
                        }
                        return;
                    } else {
                        this.setState({isLoading: false, email: ''})
                        Alert.alert('Reset Password', re.message)
                    }
                })
        } else {
            this.setState({
                showError: true,
                errorMsg: "Please Enter a valid Email/Mobile",
                isLoading: false,
                errorMsg: '',
                showError: false
            })
        }
    }

    _dismissKeyboard = () => {
        Keyboard.dismiss();
    }
    render() {

        const { strings, lang } = this.props.language;
        const { login, applang } = strings;
        this.lang = lang;

        return (
            <SafeAreaView style={styles.container}>
                {/* <StatusBar /> */}
                <TouchableOpacity onPress={this._dismissKeyboard} activeOpacity={1} style={{ flex: 1 }}>
                    <ImageBackground source={require('../assets/images/splash.png')} style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', padding: 10, marginTop: 14, justifyContent: 'flex-start' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                                <Icon name="md-arrow-back" color="#fff" size={33} />
                            </TouchableOpacity>
                        </View>

                        {/* <Ima style={{padding: 10}}>
                            <Text style={{color: '#fff', textAlign: 'center'}}>Bride Night</Text>
                        </View>   */}
                    </ImageBackground>
                    <KeyboardAvoidingView style={{ flex: 3, backgroundColor: '#eee' }}>
                        <ScrollView style={{ paddingTop: 60 }}>
                            <Text style={{ textAlign: 'center', fontSize: 19, color: 'gray' }}>Type in your registered Email/Mobile to receive verification code</Text>
                            <Text 
                                style={{ 
                                    textAlign: 'center', fontSize: 15, 
                                    marginTop: 10, color: this.state.showError ? '#DC143C' : 'green' 
                                    }}
                            >
                                {this.state.errorMsg}
                            </Text>
                            <View style={{ padding: 18, marginTop: 18 }}>
                                <TextInput
                                    autoCapitalize={"none"}
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChangeText={(val) => this.onChangeText('email', val)}
                                    style={{ padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14 }}
                                />

                                <TouchableOpacity
                                    onPress={this.handleResetPass}
                                    activeOpacity={.7}
                                    style={{ padding: 14, backgroundColor: '#000', borderRadius: 25, marginTop: 15 }}
                                >
                                    {
                                        this.state.isLoading ? (<ActivityIndicator size="small" color="white" />) : (<Text style={{ textAlign: 'center', color: '#fff', fontSize: 14 }}>Reset</Text>)
                                    }
                                    {/* <Text style={{textAlign: 'center', color: '#fff', fontSize: 14}}>Reset</Text> */}
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row', marginTop: 27, justifyContent: 'center' }}>
                                    <TouchableOpacity activeOpacity={.6} style={{ marginHorizontal: 5 }} onPress={() => this.props.navigation.pop()}><Text style={{ textDecorationLine: 'underline' }}>Back</Text></TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
const mapStateToProps = state => {
    const { language } = state;
    return { language };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        changeToArabic,
        changeToEnglish
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset)

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