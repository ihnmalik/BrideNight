import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, StatusBar, Animated, ImageBackground, Platform } from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeToArabic, changeToEnglish } from '../redux/actions/languageAction';

// assets

const myFont = Platform.select({
    ios: {
      fontFamily: 'GESSTwoLight-Light',
    },
    android: {
      fontFamily: 'ArbFONTS-rabi3',
    },
  });

export class AppLanguage extends Component {
     
    constructor(props) {
        super(props);

        this.state = {
            animatedHeader: new Animated.Value(3),
            animatedContent: new Animated.Value(1),
            animatedContentOpacity: new Animated.Value(0)
        }
    }
     componentDidMount(){
        // this.props.changeToArabic();

        Animated.spring(this.state.animatedHeader, {
            toValue: 1,
            duration: 3000
        }).start()
        Animated.spring(this.state.animatedContent, {
            toValue: 3,
            duration: 3000
        }).start()

    } // end of componentDidMount

    changeToEn = () => {
        //
        this.props.changeToEnglish();
    }

    changeToAr = () => {
        //
        this.props.changeToArabic();
    }

    render() {
        const { strings, lang } = this.props.language;
        const { applang } = strings;

        // alert(JSON.stringify(strings))

        return (
                <ImageBackground source={require('../assets/images/splash.png')} style={styles.imgBack}>
                    <StatusBar translucent barStyle="light-content"/>
                    <Animated.View style={{flex: this.state.animatedHeader, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,.8)'}}> 
                        <Text style={{color: '#fff',fontSize: 23,  ...myFont}}>{lang == 'ar' ? 'اختر لغة التطبيق' : 'Choose App Language'}</Text>
                    </Animated.View>
                    <Animated.View style={{flex: this.state.animatedContent, borderRadius: 15, backgroundColor: '#fff', justifyContent: 'center'}}> 
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                            <TouchableOpacity style={{flex: 1}} onPress={this.changeToEn}>
                                <Text style={{fontSize: 23, textAlign: 'center', ...myFont}}>English</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex: 1}} onPress={this.changeToAr}>
                                <Text style={{fontSize: 23, textAlign: 'center', ...myFont}}>العربية</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <TouchableOpacity style={{marginBottom: 30, borderRadius: 8,  marginHorizontal: 18, padding: 20, justifyContent: 'center', backgroundColor: '#000'}}>
                                <Text style={{textAlign: 'center', color: '#fff', fontSize: 16, ...myFont}}>{lang == 'ar' ? 'استمرار' : 'Continue'}</Text>
                        </TouchableOpacity> */}
                    </Animated.View>
                </ImageBackground>                     
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

export default connect(mapStateToProps, mapDispatchToProps)(AppLanguage)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    imgBack: {
        flex: 1,
        width: '100%'
    }
})
