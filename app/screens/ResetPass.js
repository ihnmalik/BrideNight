import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView, Image, Button,TextInput, KeyboardAvoidingView, TouchableOpacity, StatusBar } from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeToArabic, changeToEnglish } from '../redux/actions/languageAction';

    // green:    #7bbe50,
    // blue:  #188ee1,


export class ResetPass extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
        email: ''
    };
  }

  back = () => {
    this.props.navigation.navigate('Login')
  }

  

  render() {

    const { strings, lang } = this.props.language;
    const { login, applang, resetpass } = strings;
    this.lang = lang;

    return (
            <SafeAreaView style={styles.container}>
            </SafeAreaView>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPass)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    greenContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formContainer: {
        flex: 3,
        padding: 10,
        justifyContent: 'center'
    },
    blueContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    input: {
        flexDirection: 'row',
        justifyContent: this.lang == 'en' ? 'flex-start' : 'flex-end',
        padding: 20,
        borderBottomWidth: 2,
        borderColor: '#7bbe50',
        marginTop: 10,
        marginHorizontal: 10
    },
    loginBtn: {
        marginTop: 15,
        padding: 15,
        backgroundColor: '#7bbe50',
        alignItems: 'center',
        borderRadius: 25
    },
    loginbtnText: {
        color: '#fff'
    },
    createAccountContainer: {
        flex: 1,
        padding: 8,
        alignItems: 'center'
        
    }
})