import React, {Component} from 'react';
import { View, Text, StyleSheet,SafeAreaView, Image, Keyboard, Button,TextInput, KeyboardAvoidingView, TouchableOpacity, StatusBar, ImageBackground, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeToArabic, changeToEnglish } from '../redux/actions/languageAction';
import Icon from 'react-native-vector-icons/Ionicons';

    // green:    #7bbe50,
    // blue:  #188ee1,

export class Code extends Component {
    back = () => {
        this.props.navigation.navigate('AppLanguage')
    }

    register = () => {
        this.props.navigation.navigate('Register')
    }

    resetPass = () => {
        this.props.navigation.navigate('ResetPass')
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
                    <TouchableOpacity onPress={this._dismissKeyboard} activeOpacity={1} style={{flex: 1}}>
                    <ImageBackground source={require('../assets/images/splash.png')} style={{flex: 1}}>
                        <View style={{flexDirection: 'row', padding: 10, marginTop: 14, justifyContent: 'flex-end'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                                <Icon  name="ios-menu" color="#fff" size={33}/>
                            </TouchableOpacity>
                        </View>

                        {/* <Ima style={{padding: 10}}>
                            <Text style={{color: '#fff', textAlign: 'center'}}>Bride Night</Text>
                        </View>   */}
                    </ImageBackground>
                    <KeyboardAvoidingView style={{flex: 3, backgroundColor: '#eee'}}>
                        <ScrollView style={{paddingTop: 60}}>
                            <Text style={{textAlign: 'center', fontSize: 19, color: 'gray'}}>Enter The code you've recieved via email</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 40}}>
                                <TextInput placeholder="" maxLength={1} style={{width: 30, borderBottomWidth: 2, padding: 4, fontSize: 22, textAlign: 'center' }} />
                                <TextInput placeholder="" maxLength={1} style={{width: 30, borderBottomWidth: 2, padding: 4, fontSize: 22, textAlign: 'center' }} />
                                <TextInput placeholder="" maxLength={1} style={{width: 30, borderBottomWidth: 2, padding: 4, fontSize: 22, textAlign: 'center' }} />
                                <TextInput placeholder="" maxLength={1} style={{width: 30, borderBottomWidth: 2, padding: 4, fontSize: 22, textAlign: 'center' }} />
                            </View>

                            <TouchableOpacity activeOpacity={.7} style={{padding: 14, backgroundColor: '#000', borderRadius: 25, margin: 15, marginTop: 40}}>
                                <Text style={{textAlign: 'center', color: '#fff', fontSize: 14}}>Verify</Text>
                            </TouchableOpacity>
                            <View>
                                <Text style={{textAlign: 'center'}}>01:20</Text>
                            </View>
                            <View style={{padding: 18, marginTop: 18}}>
                                <View style={{flexDirection: 'row', marginTop: 27, justifyContent: 'center'}}>
                                    <Text style={{textAlign: 'center', color: 'gray', padding: 10, fontSize: 14}}>Haven't recieved any code?</Text>
                                    <TouchableOpacity activeOpacity={.6}  onPress={() => this.props.navigation.pop()} style={{backgroundColor: 'black', borderRadius: 20, padding: 5, justifyContent: 'center'}}><Text style={{color: '#fff', fontSize: 13, padding: 2}}>Resend</Text></TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Code)

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