import React, {Component} from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Image, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { logIn, logOut } from '../redux/actions/authAction';
import { url } from '../utils/appsettings';

    // green:    #7bbe50,
    // blue:  #188ee1,
export class SideMenu extends Component {
    constructor(props){
        super(props)

        this.state = {
            token: '',
            user: {}
        } 
    }




    componentDidMount() {
        AsyncStorage.getItem('user').then((user) => {
            if(user){
                let u = JSON.parse(user)
                // console.log(u.token)
                this.setState({token: u.token, user: u.user});
            }
        })
    }

    _handleLogout = () => {
        const {lang} = this.props.language;
        const { navigate } = this.props.navigation;

        fetch(url + 'auth/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Language': lang,
                'Authorization': 'Bearer ' + this.state.token
            }
        })
        .then(re => re.json())
        .then((res) => {

            AsyncStorage.removeItem('user').then(() => {
                this.props.logOut();
                this.props.navigation.closeDrawer();
                navigate('AppMain');
            })
     
        }).catch((err) => {
            AsyncStorage.removeItem('user').then(() => {
                navigate('AppMain');
            })
        })
    } // end of _handleLogout

    render() {
        const { lang, strings } = this.props.language;
        const { side_menu } = strings;
        this.lang = lang;

        const {routeName} = this.props.navigation.state.routes[this.props.navigation.state.index]

            // alert(JSON.stringify(routeName))

        return (
            <View style={styles.container}>
                <View style={this.isLoggedIn ? styles.menuHeader : styles.menuLoggedOut}>

                    <TouchableOpacity activeOpacity={.7}  style={{alignSelf: this.lang == 'en' ? 'flex-end' : 'flex-start', margin: 5}} onPress={() => {this.props.navigation.closeDrawer()}}>
                        <Icon name="ios-close-circle-outline" size={34} color="gray"/>
                    </TouchableOpacity>
                    
                    {
                        this.props.auth.isLoggedIn == false ? (
                            <TouchableOpacity activeOpacity={.7} onPress={() => {this.props.navigation.navigate('Login')}} style={{width: 160, padding: 10, borderRadius: 3, justifyContent: 'center', backgroundColor: '#000'}}>
                                <Text style={{textAlign: 'center', color: '#fff'}}>تسجيل الدخول</Text>
                            </TouchableOpacity>
                        ) :  null
                    }

                    {/* <Image source={{uri: 'https://wallpapersite.com/images/pages/pic_w/7385.jpg'}} style={{width: 120, height: 120, borderRadius: 60, borderColor: 'gray', borderWidth: 3}}/>
                    <Text style={{color: 'gray',  marginBottom: 2,  marginTop: 6, fontSize: 15, fontWeight: '900'}}>Clever9</Text>
                    <Text style={{color: 'gray'}}>s33d-clever@hotmail.com</Text> */}
                </View>
                <ScrollView style={styles.itemsList}>

                    <TouchableOpacity activeOpacity={.7} onPress={() => {this.props.navigation.navigate('Home')}} style={{width: '100%', height: 50, marginVertical: 1, backgroundColor: routeName == 'Home' ? '#000' : '#eee', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                        {
                            this.lang == 'en' ? (
                                            <View>
                                                <Icon name="md-home" size={28} color={routeName == 'Home' ? '#eee' : '#000'} /> 
                                            </View>
                                        ) : null
                        }
                        <View style={{justifyContent: 'center', alignItems: this.lang == 'ar' ? 'flex-end' : 'flex-start', width: '55%',}}>
                           <Text style={{ color: routeName == 'Home' ? '#eee' : '#000', fontSize: 15}}>Home</Text> 
                        </View> 
                        {
                            this.lang == 'ar' ? (
                                            <View>
                                                <Icon name="md-home" size={28} color={routeName == 'Home' ? '#eee' : '#000'} /> 
                                            </View>
                                        ) : null
                        } 
                    </TouchableOpacity>
                    {/* End of Home Menu Item */}
                    {/* {
                        this.props.auth.isLoggedIn == true ? (
                            <TouchableOpacity activeOpacity={.7} onPress={() => {this.props.navigation.navigate('Profile')}} style={{width: '100%', height: 50, marginVertical: 1, backgroundColor: routeName == 'Profile' ? '#000' : '#eee', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                            {
                                this.lang == 'en' ? (
                                                <View>
                                                    <Icon name="md-person" size={28} color={routeName == 'Profile' ? '#eee' : '#000'} /> 
                                                </View>
                                            ) : null
                            }
                            <View style={{justifyContent: 'center', alignItems: this.lang == 'ar' ? 'flex-end' : 'flex-start', width: '55%',}}>
                               <Text style={{ color: routeName == 'Profile' ? '#eee' : '#000', fontSize: 15}}>Profile</Text> 
                            </View> 
                            {
                                this.lang == 'ar' ? (
                                                <View>
                                                    <Icon name="md-person" size={28} color={routeName == 'Profile' ? '#eee' : '#000'} /> 
                                                </View>
                                            ) : null
                            } 
                            </TouchableOpacity>
                        ) : null
                    } */}
                    {/* End of Profile Menu Item */}

                    {
                        this.props.auth.isLoggedIn == true ? (
                            <TouchableOpacity activeOpacity={.7} onPress={() => {this.props.navigation.navigate('MyOrders')}} style={{width: '100%', height: 50, marginVertical: 1, backgroundColor: routeName == 'MyOrders' ? '#000' : '#eee', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                            {
                                this.lang == 'en' ? (
                                                <View>
                                                    <Icon name="md-cart" size={28} color={routeName == 'MyOrders' ? '#eee' : '#000'} /> 
                                                </View>
                                            ) : null
                            }
                            <View style={{justifyContent: 'center', alignItems: this.lang == 'ar' ? 'flex-end' : 'flex-start', width: '55%',}}>
                               <Text style={{ color: routeName == 'MyOrders' ? '#eee' : '#000', fontSize: 15}}>My Orders</Text> 
                            </View> 
                            {
                                this.lang == 'ar' ? (
                                                <View>
                                                    <Icon name="md-cart" size={28} color={routeName == 'MyOrders' ? '#eee' : '#000'} /> 
                                                </View>
                                            ) : null
                            } 
                            </TouchableOpacity>
                        ) : null
                    }
                    {/* End of My Orders Menu Item */}

                    {
                        this.props.auth.isLoggedIn == true ? (
                            <TouchableOpacity activeOpacity={.7} onPress={() => {this.props.navigation.navigate('Followers')}} style={{width: '100%', height: 50, marginVertical: 1, backgroundColor: routeName == 'Followers' ? '#000' : '#eee', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                            {
                                this.lang == 'en' ? (
                                                <View>
                                                    <Icon name="md-contact" size={28} color={routeName == 'Followers' ? '#eee' : '#000'} /> 
                                                </View>
                                            ) : null
                            }
                            <View style={{justifyContent: 'center', alignItems: this.lang == 'ar' ? 'flex-end' : 'flex-start', width: '55%',}}>
                               <Text style={{ color: routeName == 'Followers' ? '#eee' : '#000', fontSize: 15}}>Followers</Text> 
                            </View> 
                            {
                                this.lang == 'ar' ? (
                                                <View>
                                                    <Icon name="md-contact" size={28} color={routeName == 'Followers' ? '#eee' : '#000'} /> 
                                                </View>
                                            ) : null
                            } 
                            </TouchableOpacity>
                        ) : null
                    }
                    {/* End of Followers Menu Item */}

                    {
                        this.props.auth.isLoggedIn == true ? (
                            <TouchableOpacity activeOpacity={.7} onPress={() => {this.props.navigation.navigate('PaymentsRecords')}} style={{width: '100%', height: 50, marginVertical: 1, backgroundColor: routeName == 'PaymentsRecords' ? '#000' : '#eee', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                            {
                                this.lang == 'en' ? (
                                                <View>
                                                    <Icon name="md-cash" size={28} color={routeName == 'PaymentsRecords' ? '#eee' : '#000'} /> 
                                                </View>
                                            ) : null
                            }
                            <View style={{justifyContent: 'center', alignItems: this.lang == 'ar' ? 'flex-end' : 'flex-start', width: '55%',}}>
                               <Text style={{ color: routeName == 'PaymentsRecords' ? '#eee' : '#000', fontSize: 15, textAlign: 'center'}}>Payment Records</Text> 
                            </View> 
                            {
                                this.lang == 'ar' ? (
                                                <View>
                                                    <Icon name="md-cash" size={28} color={routeName == 'PaymentsRecords' ? '#eee' : '#000'} /> 
                                                </View>
                                            ) : null
                            } 
                            </TouchableOpacity>
                        ) :  null
                    }
                    {/* End of Payment Records Menu Item */}

                    {
                        this.props.auth.isLoggedIn == true ? (
                            <TouchableOpacity activeOpacity={.7} onPress={() => {this.props.navigation.navigate('Notifications')}} style={{width: '100%', height: 50, marginVertical: 1, backgroundColor: routeName == 'Notifications' ? '#000' : '#eee', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                            {
                                this.lang == 'en' ? (
                                                <View>
                                                    <Icon name="md-notifications-outline" size={28} color={routeName == 'Notifications' ? '#eee' : '#000'} /> 
                                                </View>
                                            ) : null
                            }
                            <View style={{justifyContent: 'center', alignItems: this.lang == 'ar' ? 'flex-end' : 'flex-start', width: '55%',}}>
                               <Text style={{ color: routeName == 'Notifications' ? '#eee' : '#000', fontSize: 15, textAlign: 'center'}}>Notifications</Text> 
                            </View> 
                            {
                                this.lang == 'ar' ? (
                                                <View>
                                                    <Icon name="md-notifications-outline" size={28} color={routeName == 'Notifications' ? '#eee' : '#000'} /> 
                                                </View>
                                            ) : null
                            } 
                            </TouchableOpacity>
                        ) : null
                    }
                    {/* End of Notifications Menu Item */}

                    <TouchableOpacity activeOpacity={.7} onPress={() => {this.props.navigation.navigate('ContactUs')}} style={{width: '100%', height: 50, marginVertical: 1, backgroundColor: routeName == 'ContactUs' ? '#000' : '#eee', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                        {
                            this.lang == 'en' ? (
                                            <View>
                                                <Icon name="ios-call" size={28} color={routeName == 'ContactUs' ? '#eee' : '#000'} /> 
                                            </View>
                                        ) : null
                        }
                        <View style={{justifyContent: 'center', alignItems: this.lang == 'ar' ? 'flex-end' : 'flex-start', width: '55%',}}>
                           <Text style={{ color: routeName == 'ContactUs' ? '#eee' : '#000', fontSize: 15, textAlign: 'center'}}>Contact Us</Text> 
                        </View> 
                        {
                            this.lang == 'ar' ? (
                                            <View>
                                                <Icon name="ios-call" size={28} color={routeName == 'ContactUs' ? '#eee' : '#000'} /> 
                                            </View>
                                        ) : null
                        } 
                    </TouchableOpacity>
                    

                    {
                        this.props.auth.isLoggedIn == true ? (
                            <View style={{margin: 5}}>
                                <TouchableOpacity activeOpacity={.7} onPress={this._handleLogout} style={{padding: 8, height: 40, backgroundColor: '#000'}}>
                                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'center', marginTop: 5}}>Log Out</Text>
                                </TouchableOpacity>
                            </View>
                        ) : null
                    }

                    {/* End of Log Out Item */}
                </ScrollView>

            </View> 
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255, .3)'
    },
    menuHeader: {
        width: '100%', 
        height: 240,
        paddingTop: '10%',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, .2)',
    },
    menuLoggedOut: {
        width: '100%', 
        height: 150,
        paddingTop: '10%',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, .2)',
    },
    itemsList: {
        flex: 3,
    }
})