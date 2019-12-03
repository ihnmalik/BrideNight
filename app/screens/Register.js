import React, {Component} from 'react';
import { View, Text, StyleSheet,SafeAreaView, Image, Keyboard, Button,TextInput, KeyboardAvoidingView, TouchableOpacity, StatusBar, ImageBackground, ScrollView, ActivityIndicator, YellowBox, AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeToArabic, changeToEnglish } from '../redux/actions/languageAction';
import { logIn, logOut } from '../redux/actions/authAction';
import DropdownMenu from 'react-native-dropdown-menu';
import RadioGroup from 'react-native-radio-button-group';
import Icon from 'react-native-vector-icons/Ionicons';
import { url } from '../utils/appsettings';

    // green:    #7bbe50,
    // blue:  #188ee1,


export class Register extends Component {

    constructor(props) {
        super(props);

        console.disableYellowBox = true;
        this.state = {
            selected: null,
            account_roles: [],
            username: '',
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            mobile: '',
            uuid: '',
            push_token: '',
            showError: false,
            errorMsg: '',
            isLoading: false
        }
    } // end of constructor
    

    componentDidMount(){
        // alert(this.props.auth.isLoggedIn)
        this._loadRoles();
    } // componentDidMount()

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

    // input handlers
    _changeNameHandler = name => this.setState({name});
    // _changeUserNameHandler = username => this.setState({username});
    _changeEmailHandler = email => this.setState({email});
    _changePasswordHandler = password => this.setState({password});
    _changePasswordConfHandler = password_confirmation => this.setState({password_confirmation});
    _changeMobileHandler = mobile => this.setState({mobile});

    _loadRoles = () => {
        fetch(url + 'auth/roles_names', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Language': this.lang
            }
        }).then((res) => res.json())
        .then((re) => {
            console.log(re.data)
             if(re.data.length > 0) {
                // alert(JSON.stringify(re))
                this.setState({account_roles: re.data});
             }
        }).catch((err) => {
            alert(JSON.stringify(err))
            return this.setState({showError: true, errorMsg: this.lang == 'ar' ? 'تعذر تحميل البيانات، قم بالمحاولة مجدداً' : 'Could not load articles list, try again later'});
          })
    } // end of _loadRoles

    handleAccountRoleChange = option => this.setState({selected: option});

    _submitSignUp = () => {
        Keyboard.dismiss();
        const { lang } = this.props.language;
        const { navigate } = this.props.navigation;

        this.setState({isLoading: true});

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!this.state.name) return this.setState({showError: true, errorMsg: this.props.language.lang == 'ar' ? 'حقل الإسم مطلوب' : 'Name is required', isLoading: false});
        // if(!this.state.username) return this.setState({showError: true, errorMsg: this.props.language.lang == 'ar' ? 'حقل اسم المستخدم مطلوب' : 'Username is required', isLoading: false});
        if(this.state.name.length < 3) return this.setState({showError: true, errorMsg: this.props.language.lang == 'ar' ? 'الإسم يجب أن يكون 3 أحرف فأكثر' : 'Name must be 3 characters or more', isLoading: false});
        // if(this.state.username.length < 3) return this.setState({showError: true, errorMsg: this.props.language.lang == 'ar' ? 'اسم المستخدم يجب أن يكون 3 أحرف فأكثر' : 'Username must be 3 characters or more', isLoading: false});
        if(!this.state.email) return this.setState({showError: true, errorMsg: this.props.language.lang == 'ar' ? 'حقل البريد الالكتروني مطلوب' : 'Email is required', isLoading: false});
        if(!re.test(this.state.email)) return this.setState({showError: true, errorMsg: this.props.language.lang == 'ar' ? 'يجب ادخال بريد الكتروني صالح' : 'Email is invalid', isLoading: false});
        // if(!this.state.mobile) return this.showToast(this.props.language.lang == 'ar' ? '' : 'Mobile is required', Toast.SHORT , Toast.BOTTOM, '#DC143C');
        if(this.state.mobile && this.state.mobile.length < 10) return this.setState({showError: true, errorMsg: this.props.language.lang == 'ar' ? 'يجب أن يكون رقم الجوال صحيح' : 'A valid mobile number is required', isLoading: false});
        if(!this.state.password) return this.setState({showError: true, errorMsg: this.props.language.lang == 'ar' ? 'حقل كلمة المرور مطلوب' : 'Password is required', isLoading: false});
        if(this.state.password.length < 6) return this.setState({showError: true, errorMsg: this.props.language.lang == 'ar' ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' : 'Password should be 6 characters minimum', isLoading: false});
        if(!this.state.password_confirmation) return this.setState({showError: true, errorMsg: this.props.language.lang == 'ar' ? 'حقل تأكيد كلمة المرور مطلوب' : 'Password confirm is required', isLoading: false});
        if(this.state.password !== this.state.password_confirmation) return this.setState({showError: true, errorMsg: this.props.language.lang == 'ar' ? 'كلمة المرور وتأكيد كلمة المرور غير متطابقين' : 'Password and Password confirm do not match', isLoading: false});
        if(!this.state.selected) return this.setState({showError: true, errorMsg: this.props.language.lang == 'ar' ? 'يجب اختيار نوع الحساب' : 'Account type is required', isLoading: false});
            // return alert(this.state.selected.role_name)
        fetch(url + 'auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Language': lang
            },
            body: `name=${this.state.name}&email=${this.state.email}&mobile=${this.state.mobile}&password=${this.state.password}&password_confirmation=${this.state.password_confirmation}&role_name=${this.state.selected.role_name}&push_token=${this.state.push_token}&uuid=${this.state.uuid}`
        })
        .then((res) => res.json())
        .then((re) => {
            // alert(JSON.stringify(re))
            if(re.errors){
                for(let err in re.errors) {
                    this.setState({showError: true, errorMsg: re.errors[err], isLoading: false});   
                }
                return;
            }else {
                // alert(JSON.stringify(re)) (re.token) for token
                this.setState({showError: false, errorMsg: re.message, isLoading: false});
                setTimeout(() => {
                    this.login(this.state.email, this.state.password, this.state.push_token, this.state.uuid, lang);
                }, 600)
                return;
            }
        }).catch((err) => {
            return this.setState({showError: true, errorMsg: lang == 'ar' ? 'حدث خطأ أثناء عملية التسجيل، حاول مجدداً' : 'An error has occurred while resgistering, Try again', isLoading: false});
          })
    } // end of _submitSignUp


    login = (email, password, push_token, uuid, lang) => {
        // alert(`login=${email}&password=${password}&push_token=${push_token}&uuid=${uuid}   ${lang}  `)
        fetch(url + 'auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Language': lang
            },
            body: `login=${email}&password=${password}&push_token=${push_token}&uuid=${uuid}`
            // body: post
        })
        .then(r => r.json())
        .then((data) => {
            // console.log(data)
            if(!data.error) {
                let re = data;
                AsyncStorage.setItem('user', JSON.stringify({token: re.token, user: re.data})).then(() => {
                    this.props.logIn();
                        this.props.navigation.navigate('AppMain');
                })
            }else {
                this.setState({showError: true, errorMsg: lang == 'ar' ? 'حدث خطأ أثناء عملية تسجيل الدخول' : 'An error has occurred while logging in', isLoading: false});
            }
 

        }) 
    } // end of login

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
                            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                                <Icon  name="md-arrow-back" color="#fff" size={33}/>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <KeyboardAvoidingView style={{flex: 3, backgroundColor: '#eee'}}>
                        <ScrollView style={{flex: 1, paddingTop: 20}}>
                            <Text style={{textAlign: 'center', fontSize: 19, color: 'gray'}}>Create New Account</Text>
                            <View style={{padding: 18, marginTop: 8}}>
                            <Text style={{textAlign: 'center', fontSize: 15, color: this.state.showError ? '#DC143C' : 'green'}}>{this.state.errorMsg}</Text>
                                <TextInput placeholder="Name" value={this.state.name} onChangeText={this._changeNameHandler} style={{padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14 }} />
                                {/* <TextInput placeholder="Username" value={this.state.username} onChangeText={this._changeUserNameHandler} style={{padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14 }} /> */}
                                <TextInput placeholder="Email" autoCapitalize="none" value={this.state.email} onChangeText={this._changeEmailHandler} style={{padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14 }} />
                                <TextInput placeholder="Mobile" value={this.state.mobile} onChangeText={this._changeMobileHandler} style={{padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14 }} />
                                <TextInput placeholder="Password" value={this.state.password} onChangeText={this._changePasswordHandler} secureTextEntry={true} style={{padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14 }} />
                                <TextInput placeholder="Confirm Password" value={this.state.password_confirmation} onChangeText={this._changePasswordConfHandler} secureTextEntry={true} style={{padding: 14, backgroundColor: '#fff', borderRadius: 25, marginTop: 15, fontSize: 14 }} />
                                <View style={{paddingVertical: 14, alignSelf: 'center'}}>
                                {
                                    this.state.account_roles.length ? (
                                        <RadioGroup
                                        horizontal={true}
                                        options={this.state.account_roles}
                                        onChange={this.handleAccountRoleChange}
                                        circleStyle={{ fillColor: '#000', borderColor: '#000', fontFamily: 'Tajawal-Medium'}}
                                        />
                                    ) : (
                                        <ActivityIndicator size="small" color="#303031"/>
                                    )
                                }

                                </View>
                                <TouchableOpacity activeOpacity={.7} onPress={this._submitSignUp} style={{padding: 14, backgroundColor: '#000', borderRadius: 25, marginTop: 4, zIndex: -10}}>
                                    {
                                        this.state.isLoading ? (<ActivityIndicator size="small" color="white" />) : (<Text style={{textAlign: 'center', color: '#fff', fontSize: 14}}>Register</Text>)
                                    }
                                </TouchableOpacity>

                                <View style={{flexDirection: 'row', marginTop: 17, justifyContent: 'center', zIndex: -10}}>
                                    <Text style={{textAlign: 'center', color: 'gray'}}>Already User?</Text>
                                    <TouchableOpacity activeOpacity={.6} style={{marginHorizontal: 5}} onPress={() => this.props.navigation.pop()}><Text style={{textDecorationLine: 'underline'}}>Log In</Text></TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register)

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