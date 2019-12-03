import React, {Component} from 'react';
import { View, Text, StyleSheet,SafeAreaView, Image, Keyboard, Button,TextInput, KeyboardAvoidingView, TouchableOpacity, StatusBar, ImageBackground, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeToArabic, changeToEnglish } from '../redux/actions/languageAction';
import Icon from 'react-native-vector-icons/Ionicons';
import RadioGroup from 'react-native-radio-button-group';

    // green:    #7bbe50,
    // blue:  #188ee1,

export class EndOrderPaymentType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            account_roles: [
                {

                    id: 1,
                    label: 'Visa',
                },
                {
                    id: 2,
                    label: 'MasterCard',
                },
                {
                    id: 3,
                    label: 'Mada',
                }
            ]
        }
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

    _dismissKeyboard = () => {
        Keyboard.dismiss();
    }

    handleAccountRoleChange = option => this.setState({selected: option});

    render() {

        const { strings, lang } = this.props.language;
        const { login, applang } = strings;
        this.lang = lang;

        return (
            <SafeAreaView style={styles.container}>
                    {/* <StatusBar /> */}
                    <TouchableOpacity onPress={this._dismissKeyboard} activeOpacity={1} style={{flex: 1}}>
                    {/* <ImageBackground source={require('../assets/images/splash.png')} style={{flex: 1}}>
                        <View style={{flexDirection: 'row', padding: 10, marginTop: 14, justifyContent: 'flex-end'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                                <Icon  name="ios-menu" color="#fff" size={33}/>
                            </TouchableOpacity>
                        </View>

                    </ImageBackground> */}
                    <KeyboardAvoidingView style={{flex: 3, backgroundColor: '#eee'}}>
                        <ScrollView style={{paddingTop: 60}}>
                            <Text style={{textAlign: 'center', fontSize: 19, color: 'gray'}}>Check Out Process</Text>
                            <View style={{padding: 18, marginTop: 18}}>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <RadioGroup
                                        horizontal={true}
                                        options={this.state.account_roles}
                                        onChange={this.handleAccountRoleChange}
                                        circleStyle={{ fillColor: '#000', borderColor: '#000', fontFamily: 'Tajawal-Medium'}}
                                        />
                                </View>

                                <TextInput placeholder="Card Holder" style={{padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14 }} />
                                <TextInput placeholder="Card Number" style={{padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14 }} />
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <TextInput placeholder="cvc" style={{flex: 1,  padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14, textAlign: 'center', marginRight: 2}} />
                                    <TextInput placeholder="01/12" style={{flex: 1, padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14, textAlign: 'center', marginLeft: 2}} />
                                </View>

                                <TextInput placeholder="Discount Code" style={{padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14 }} />

                                <View style={{backgroundColor: '#fff', height: 120, padding: 5, borderRadius: 15, marginVertical: 15}}>
                                    <TextInput placeholder="Notes..." style={{padding: 14, backgroundColor: '#fff', borderRadius: 25, fontSize: 14 }} />
                                </View>

                                <TouchableOpacity activeOpacity={.7} style={{padding: 14, backgroundColor: '#000', borderRadius: 25, marginTop: 15}} onPress={() => this.props.navigation.navigate('EndOrderFinishReciept')}>
                                    <Text style={{textAlign: 'center', color: '#fff', fontSize: 14}}>Continue</Text>
                                </TouchableOpacity>

                                <View style={{flexDirection: 'row', marginTop: 27, justifyContent: 'center'}}>
                                    <TouchableOpacity activeOpacity={.6} style={{marginHorizontal: 5}} onPress={() => this.props.navigation.pop()}><Text style={{textDecorationLine: 'underline'}}>back</Text></TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(EndOrderPaymentType)

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