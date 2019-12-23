import React, {Component,} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logIn, logOut} from '../redux/actions/authAction';
import {url} from '../utils/appsettings';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
import {
    updateCountryCity,
    updateProfileAboutAR,
    updateProfileAboutEN,
    updateProfileAvatar,
    updateProfileEmail,
    updateProfileLocale,
    updateProfileLogOut,
    updateProfileMobile,
    updateProfileName,
    updateProfileProfileMobile,
    updateProfilePushToken,
    updateProfileStatus,
    updateProfileStatusLabel,
    updateProfileUUID
} from '../redux/actions/profileAction';
import {Dropdown} from 'react-native-material-dropdown';
import AsyncStorage from '@react-native-community/async-storage'

import DateTimePickerModal from "react-native-modal-datetime-picker";


import ArabicLang from '../i18n/ar.json'
import EnglishLang from '../i18n/en.json'


// green:    #7bbe50,
// blue:  #188ee1,
const myFont = Platform.select({
    ios: {
        fontFamily: 'GESSTwoLight-Light',
    },
    android: {
        fontFamily: 'ArbFONTS-rabi3',
    },
})
const users = [];
class AccountInfoUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // users: users,
            profile: props.profile ? { ...props.profile, user: { avatar: '' } } : { user: { avatar: '', name: '', email: '', phone: '', mobile: '', profile_mobile: '' } },
            token: '',
            name: '',
            email: '',
            mobile: '',
            profile_mobile: '',
            about: '',
            about_ar: '',
            country: '',
            city: '',
            region: '',
            about_en: '',
            avatar: '',
            avatarData: '',
            password: '',
            password_con: '',
            userTypes: [],
            userTypeID: '',
            countries: [],
            days: [
                { value: 1, label: 'Saturday', index: 0 },
                { value: 2, label: 'Sunday', index: 1 },
                { value: 3, label: 'Monday', index: 2 },
                { value: 4, label: 'Tuesday', index: 3 },
                { value: 5, label: 'Wednesday', index: 4 },
                { value: 6, label: 'Thursday', index: 5 },
                { value: 7, label: 'Friday', index: 6 }
            ],
            cities: [],
            cityID: '',
            countryID: '',
            dayId: '',
            cityIndex: '',
            countryIndex: '',
            // error show/hide toggle variable
            showError: false,
            // requests error messages handlers
            avatarMsg: '',
            nameMsg: '',
            emailMsg: '',
            mobileMsg: '',
            profileMobileMsg: '',
            countryCityMsg: '',
            userTypeMsg: '',
            aboutArMsg: '',
            aboutEnMsg: '',
            passMsg: '',
            serverErrMsg: '',
            isStartDatePickerVisible: false,
            isEndDatePickerVisible: false,
            start_date: '',
            end_date: '',
            work_time_err: ""
        };
    }

    options = {
        title: this.props.language.lang == 'ar' ? 'اختيار صورة العرض' : 'Pick Profile Photo',
        chooseFromLibraryButtonTitle: this.props.language.lang == 'ar' ? 'اختيار من معرض الصور' : 'Choose from Photo Library',
        takePhotoButtonTitle: this.props.language.lang == 'ar' ? 'التقاط صورة بالكاميرا' : 'Use Camera to take a picture',
        cancelButtonTitle: this.props.language.lang == 'ar' ? 'إلغاء' : 'Cancel',
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
            skipBackup: true
        },
        allowsEditing: true
    };

    componentDidMount() {
        // this.setState({users: this.state.users.filter((item) => item.id <= this.state.pageIndex)})

        AsyncStorage.getItem('user').then((user) => {
            let u = JSON.parse(user)
            if (u) {
                //   alert(JSON.stringify(u.token))
                console.log(u);
                this.setState({ profile: u });
                if (u.user.country_id) {
                    this._loadCities(u.user.country_id)
                }
            }

            if (this.state.profile.user.id) {
                // this._loadUserPhotos(this.state.profile.user.id)
                // this._loadUserVids(this.state.profile.user.id)
                // this._loadWorkTimes(this.state.profile.user.id)
            }

            if (this.state.profile.user.isSubscriber) {
                // this._loadMembershipInfo()
            }
            // alert(JSON.stringify(u))
        })
        this._loadUserTypes();
        this._loadCountries();
    } // componentDidMount

    _loadUserTypes = () => {
        fetch(`${url}user_type`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Language': this.props.language.lang,
                // 'Authorization': 'Bearer ' + this.state.profile.token
            }
        })
            .then(r => r.json())
            .then((wt) => {
                //   alert(JSON.stringify(wt))
                if (wt.error) return this.setState({ showError: true, userTypeMsg: re.message });
                //     return this.setState({videos: wt.data})
                if (wt.data.length > 0) {
                    let temp = [];
                    for (let type of wt.data) {
                        temp.push({ value: type.id, label: type.name });
                    }

                    return this.setState({ userTypes: temp, showError: false, userTypeMsg: '' })
                }
            }).catch(e => {
                alert(JSON.stringify(e))
            });
    } // end of _loadUserTypes()

    _loadCountries = () => {
        fetch(`${url}setting/country?page=0`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'language': this.props.language.lang,
                // 'Authorization': 'Bearer ' + this.state.profile.token
            }
        })
            .then(r => r.json())
            .then((wt) => {
                //   alert(JSON.stringify(wt))
                if (wt.error) return this.setState({ showError: true, countryCityMsg: re.message });
                //     return this.setState({videos: wt.data})
                if (wt.data.length > 0) {
                    let temp = [];
                    let index = 0;
                    for (let type of wt.data) {
                        temp.push({ value: type.id, label: type.name, index });
                        index++;
                    }
                    // alert(JSON.stringify(temp))
                    this.setState({ countries: temp, showError: false, countryCityMsg: '' })
                }
            }).catch(e => {
                alert(JSON.stringify(e))
            })
    } // end of _loadCountries()

    _loadCities = id => {
        fetch(`${url}setting/country/regions/${id}?page=0`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'language': this.props.language.lang,
                // 'Authorization': 'Bearer ' + this.state.profile.token
            }
        })
            .then(r => r.json())
            .then((wt) => {
                //   alert(JSON.stringify(wt))
                if (wt.error) return this.setState({ showError: true, countryCityMsg: re.message });
                //     return this.setState({videos: wt.data})
                if (wt.data.length > 0) {
                    let temp = [];
                    let index = 0;
                    for (let type of wt.data) {
                        temp.push({ value: type.id, label: type.name, index });
                        index++;
                    }
                    // alert(JSON.stringify(temp))
                    this.setState({ cities: temp, showError: false, countryCityMsg: '' })
                }
            }).catch((e) => {
                alert(JSON.stringify(e))
            })
    } // end of _loadCountries()

    //   _login = () => {
    //     this.props.navigation.navigate('Login')
    //   }

    _openImagePickerType = () => {
        // TODO: camera or picker code goes here
        ImagePicker.showImagePicker(this.options, (response) => {

            if (response.didCancel) {

            } else if (response.error) {
                this.setState({ avatar: '', tstBgColor: '#DC143C' });
                this.setState({ showError: true, avatarMsg: this.props.language.lang == 'ar' ? 'تعذر تحديث صورة الملف ' : 'Sorry, your profile image has not been updated' });
            } else {
                //   const source = response.uri;

                // You can also display the image using data:
                //   const source =  'data:image/png;base64,' + response.data;
                const uploadImg = response.data;
                const src = response.uri;
                // alert(uploadImg)
                this.setState({
                    avatar: src,
                    avatarData: uploadImg,
                    // profile: {
                    //     ...this.state.profile,
                    //     user: {
                    //         ...this.state.profile.user,
                    //         avatar: uploadImg
                    //     }
                    // }
                });
                //   console.log(source)
                this._updateProfileAvatar(uploadImg)
            }
        });
    } // end of _openImagePickerType

    // content change handlers
    _handleNameChange = name => this.setState({ profile: { ...this.state.profile, user: { ...this.state.profile.user, name: name } } })
    _handleEmailChange = email => this.setState({ profile: { ...this.state.profile, user: { ...this.state.profile.user, email: email } } })
    _handleMobileChange = mobile => this.setState({ profile: { ...this.state.profile, user: { ...this.state.profile.user, mobile: mobile } } })
    _handleProfileMobileChange = profile_mobile => this.setState({ profile: { ...this.state.profile, user: { ...this.state.profile.user, profile_mobile: profile_mobile } } })
    _handleCountryChange = countryID => {
        // for(let country of this.state.countries){
        //     country.value == countryID
        // }

        let countries = this.state.countries.filter((country) => country.value == countryID)



        // return alert(this.state.countries[countryID - 1].label)
        // console.log(countries[0].index)
        this.setState({
            countryID, cities: [], countryIndex: countries[0].index, profile: {
                ...this.state.profile,
                user: {
                    ...this.state.profile.user,
                    country: countries.label,
                    country_id: countryID,
                    region_id: '',
                    region: ''
                }
            }
        })
        this._loadCities(countryID)
    };
    _handleCityChange = cityID => {
        // alert(this.state.cities[cityID - 1].label);
        let cities = this.state.cities.filter((city) => city.value == cityID)
        console.log(cities)
        console.warn(cities[0].index)
        // return alert(this.state.countries[countryID - 1].label)
        this.setState({
            cityID, cityIndex:
                cities[0].index,
            profile: {
                ...this.state.profile,
                user: {
                    ...this.state.profile.user,
                    region_id: cityID,
                    region: cities[0].label
                }
            }
        });
    }
    _handleDayChange = dayId => {
        let days = this.state.days.filter(day => day.value === dayId)

        this.setState({ dayId })
    }
    _handleUserTypeChange = userTypeID => {


        const thisType = this.state.userTypes.filter(type => type.value === userTypeID)

        this.setState({
            profile: {
                ...this.state.profile,
                user: {
                    ...this.state.profile.user,
                    user_type_id: userTypeID,
                    user_type: thisType[0].label
                }
            }
        })
    }
    _handleAboutARChange = about_ar => this.setState({ profile: { ...this.state.profile, user: { ...this.state.profile.user, about_ar } } })
    _handleAboutENChange = about_en => this.setState({ profile: { ...this.state.profile, user: { ...this.state.profile.user, about_en } } })
    _handlePasswordChange = password => this.setState({ password })
    _handlePasswordConChange = password_con => this.setState({ password_con })

    // update functions
    _updateProfileAvatar = (img) => {

        // this.setState({isLoading: true})


        RNFetchBlob.fetch('POST', url + 'user/profile', {
            'Authorization': `Bearer ${this.state.profile.token}`,
            // 'Content-Type': 'multipart/form-data',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'language': this.props.language.lang
        }, [
            { name: 'avatar', filename: new Date().getTime() + '.png', type: 'image/png', data: img }
        ])
            .then((res) => res.json())
            .then((resp) => {
                // console.log(resp)
                // let res = JSON.parse(resp["_bodyInit"])
                // let res = JSON.parse(resp["data"])
                // console.log(resp)
                alert(resp.message)
                if (resp.error) return this.setState({ showError: true, avatarMsg: re.message });
                let newImg = resp.data.avatar;
                // alert(JSON.stringify(resp))
                this.setState({
                    isLoading: false, tstBgColor: '#7bbe50',
                    profile: {
                        ...this.state.profile,
                        user: {
                            ...this.state.profile.user,
                            avatar: newImg
                        }
                    }
                });

                AsyncStorage.getItem('user').then((user) => {
                    if (user) {
                        let u = JSON.parse(user);
                        u.user.avatar = newImg;
                        this.props.updateProfileAvatar(u);
                        this.setState({ showError: false, avatarMsg: resp.message });
                        // u.user.email = "new@redux.com";
                        // this.props.updateProfileEmail(u);

                        // u.user.mobile = "05504030403";
                        // this.props.updateProfileMobile(u);
                    }

                })
                // this.showToast(res.message, Toast.SHORT , Toast.BOTTOM, '#7bbe50');       
            }).catch((e) => {
                alert(JSON.sgtringify(e))
            })

    } // end of _updateProfileAvatar()

    _updateProfileName = () => {
        if (!this.state.profile.user.name) return this.setState({ showError: true, nameMsg: this.props.language.lang == 'ar' ? 'حقل تعديل الإسم فارغ' : 'No changes were made to your name' });
        if (this.state.profile.user.name.length < 3) return this.setState({ showError: true, nameMsg: this.props.language.lang == 'ar' ? 'الإسم يجب أن يكون من 3 أحرف فأكثر' : 'your name must be 3 characters or above' });

        this.setState({ isLoading: true })



        fetch(url + 'user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.profile.token}`,
                'Language': this.props.language.lang
            },
            body: `name=${this.state.profile.user.name}`
        })
            .then((r) => r.json())
            .then((data) => {
                alert(data.message)
                // alert(JSON.stringify(resp))
                if (data.error) return this.setState({ showError: true, avatarMsg: data.message });
                let res = data;
                let newName = res.data.name;

                AsyncStorage.getItem('user').then((user) => {
                    if (user) {
                        let u = JSON.parse(user);
                        u.user.name = newName;
                        this.props.updateProfileName(u);
                        this.setState({ showError: false, nameMsg: data.message });
                        // u.user.email = "new@redux.com";
                        // this.props.updateProfileEmail(u);

                        // u.user.mobile = "05504030403";
                        // this.props.updateProfileMobile(u);
                    }

                })
            }).catch((err) => {
                alert(JSON.sgtringify(err))
            });

    } // end of _updateProfileName()

    _updateProfileEmail = () => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!this.state.profile.user.email) return this.setState({ showError: true, emailMsg: this.props.language.lang == 'ar' ? 'حقل تعديل البريد الإلكتروني فارغ' : 'No changes were made to your email' });
        if (!re.test(this.state.profile.user.email)) return this.setState({ showError: true, emailMsg: this.props.language.lang == 'ar' ? 'يجب ادخال بريد الكتروني صالح' : 'Please, Use a valid email' });

        this.setState({ isLoading: true })



        fetch(url + 'user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.profile.token}`,
                'Language': this.props.language.lang
            },
            body: `email=${this.state.profile.user.email}`
        })
            .then((r) => r.json())
            .then((data) => {
                alert(data.message)
                // alert(JSON.stringify(resp))
                if (data.error) return this.setState({ showError: true, emailMsg: data.message });
                let res = data;
                let newEmail = res.data.email;

                AsyncStorage.getItem('user').then((user) => {
                    if (user) {
                        let u = JSON.parse(user);
                        u.user.email = newEmail;
                        this.props.updateProfileEmail(u);
                        this.setState({ showError: false, emailMsg: data.message });
                        // u.user.email = "new@redux.com";
                        // this.props.updateProfileEmail(u);

                        // u.user.mobile = "05504030403";
                        // this.props.updateProfileMobile(u);
                    }

                })
            }).catch((err) => {
                alert(JSON.stringify(err))
            });

    } // end of _updateProfileEmail()

    _updateProfileMobile = () => {
        if (!this.state.profile.user.mobile) return this.setState({ showError: true, mobileMsg: this.props.language.lang == 'ar' ? 'حقل تعديل رقم الجوال فارغ' : 'No changes were made to your phone number' });
        if (this.state.profile.user.mobile.length < 10) return this.setState({ showError: true, mobileMsg: this.props.language.lang == 'ar' ? 'رقم الجوال المدخل غير صحيح' : 'Invalid Phone Number' });


        fetch(url + 'user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.profile.token}`,
                'Language': this.props.language.lang
            },
            body: `mobile=${this.state.profile.user.mobile}`
        })
            .then((r) => r.json())
            .then((data) => {
                alert(data.message)
                // alert(JSON.stringify(resp))
                if (data.error) return this.setState({ showError: true, mobileMsg: data.message });
                let res = data;
                let newMobile = res.data.mobile;

                AsyncStorage.getItem('user').then((user) => {
                    if (user) {
                        let u = JSON.parse(user);
                        u.user.mobile = newMobile;
                        this.props.updateProfileMobile(u);
                        this.setState({ showError: false, mobileMsg: data.message });
                        // u.user.email = "new@redux.com";
                        // this.props.updateProfileEmail(u);

                        // u.user.mobile = "05504030403";
                        // this.props.updateProfileMobile(u);
                    }

                })
                // return this.showToast(res.message, Toast.SHORT , Toast.BOTTOM, '#7bbe50');
            }).catch((err) => {
                alert(JSON.stringify(err))
            });
    } // end of _updateProfileMobile()

    _updateProfileProfileMobile = () => {

        if (!this.state.profile.user.profile_mobile) return this.setState({ showError: true, profileMobileMsg: this.props.language.lang == 'ar' ? 'حقل تعديل رقم الجوال فارغ' : 'No changes were made to your phone number' });
        if (this.state.profile.user.profile_mobile.length < 10) return this.setState({ showError: true, profileMobileMsg: this.props.language.lang == 'ar' ? 'رقم الجوال المدخل غير صحيح' : 'Invalid Phone Number' });


        fetch(url + 'user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.profile.token}`,
                'Language': this.props.language.lang
            },
            body: `profile_mobile=${this.state.profile.user.profile_mobile}`
        })
            .then((r) => r.json())
            .then((data) => {
                alert(data.message)
                // alert(JSON.stringify(resp))
                if (data.error) return this.setState({ showError: true, mobileMsg: data.message });
                let res = data;
                let newMobile = res.data.profile_mobile;

                AsyncStorage.getItem('user').then((user) => {
                    if (user) {
                        let u = JSON.parse(user);
                        u.user.profile_mobile = newMobile;
                        this.props.updateProfileProfileMobile(u);
                        this.setState({ showError: false, profileMobileMsg: data.message });
                        // u.user.email = "new@redux.com";
                        // this.props.updateProfileEmail(u);

                        // u.user.mobile = "05504030403";
                        // this.props.updateProfileMobile(u);
                    }

                })
            }).catch((err) => {
                alert(JSON.stringify(err))
            });
    } // end of _updateProfileMobile()

    _updateProfileAboutAR = () => {

        if (!this.state.profile.user.about_ar) return this.setState({ showError: true, aboutARMsg: this.props.language.lang == 'ar' ? 'حقل تعديل النبذة - عربي فارغ' : 'No changes were made to About - Arabic  is empty' });
        // if(this.state.name.length < 3) return this.showToast(this.props.language.lang == 'ar' ? 'الإسم يجب أن يكون من 3 أحرف فأكثر' : 'your name must be 3 characters or above', Toast.SHORT , Toast.BOTTOM, '#DC143C');



        fetch(url + 'user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.profile.token}`,
                'Language': this.props.language.lang
            },
            body: `about_ar=${this.state.profile.user.about_ar}`
        })
            .then((r) => r.json())
            .then((data) => {
                // alert(JSON.stringify(resp))
                alert(data.message)
                if (data.error) return this.setState({ showError: true, aboutARMsg: data.message });
                let res = data;
                let newName = res.data.about_ar;

                AsyncStorage.getItem('user').then((user) => {
                    if (user) {
                        let u = JSON.parse(user);
                        u.user.about_ar = newName;
                        this.props.updateProfileAboutAR(u);
                        this.setState({ showError: false, aboutARMsg: data.message });
                        // u.user.email = "new@redux.com";
                        // this.props.updateProfileEmail(u);

                        // u.user.mobile = "05504030403";
                        // this.props.updateProfileMobile(u);
                    }

                })
            }).catch((err) => {
                alert(JSON.stringify(err))
            });

    } // end of _updateProfileAboutAR()

    _updateProfileAboutEN = () => {

        if (!this.state.profile.user.about_en) return this.setState({ showError: true, aboutENMsg: this.props.language.lang == 'ar' ? 'حقل تعديل النبذة - انجليزي فارغ' : 'No changes were made to About - English is empty' });
        // if(this.state.name.length < 3) return this.showToast(this.props.language.lang == 'ar' ? 'الإسم يجب أن يكون من 3 أحرف فأكثر' : 'your name must be 3 characters or above', Toast.SHORT , Toast.BOTTOM, '#DC143C');


        fetch(url + 'user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.profile.token}`,
                'Language': this.props.language.lang
            },
            body: `about_en=${this.state.profile.user.about_en}`
        })
            .then((r) => r.json())
            .then((data) => {
                // alert(JSON.stringify(resp))
                alert(data.message)
                if (data.error) return this.setState({ showError: true, aboutENMsg: data.message });
                let res = data;
                let newName = res.data.about_en;

                AsyncStorage.getItem('user').then((user) => {
                    if (user) {
                        let u = JSON.parse(user);
                        u.user.about_en = newName;
                        this.props.updateProfileAboutEN(u);
                        this.setState({ showError: false, aboutENMsg: data.message });
                        // u.user.email = "new@redux.com";
                        // this.props.updateProfileEmail(u);

                        // u.user.mobile = "05504030403";
                        // this.props.updateProfileMobile(u);
                    }

                })
            }).catch((err) => {
                alert(JSON.stringify(err))
            });

    } // end of _updateProfileAboutEN()

    _updateProfilePass = () => {
        if (!this.state.password) return this.setState({ showError: true, passMsg: this.props.language.lang == 'ar' ? 'حقل كلمة المرور الجديدة فارغ' : 'No Changes were made to new password' });
        if (!this.state.password_con) return this.setState({ showError: true, passMsg: this.props.language.lang == 'ar' ? 'حقل تأكيد كلمة المرور فارغ' : 'Password confirm field should not be void' });
        if (this.state.password.length < 6 && this.state.password_con.length < 6) return this.setState({ showError: true, passMsg: this.props.language.lang == 'ar' ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' : 'Password should be 6 characters minimum' });
        if (this.state.password !== this.state.password_con) return this.setState({ showError: true, passMsg: this.props.language.lang == 'ar' ? 'كلمة المرور وتأكيد كلمة المرور غير متطابقين' : 'Password and Password confirm do not macth' });



        fetch(url + 'user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.profile.token}`,
                'Language': this.props.language.lang
            },
            body: `password=${this.state.password}&password_confirmation=${this.state.password_con}`
        })
            .then((r) => r.json())
            .then((data) => {
                // alert(JSON.stringify(resp))
                if (data.error) return this.setState({ showError: true, passMsg: data.message });
                let res = data;

                return this.setState({ showError: false, passMsg: res.message });
            }).catch((err) => {
                alert(JSON.stringify(err))
            });
    } // end of updateProfilePass() 

    _updateCountryCity = () => {
        this.setState({ countryCityMsg: '' })
        // console.log(this.state.countries[this.state.countryIndex].label + " << Country " + this.state.cities[this.state.cityIndex].label + " << City")
        if (!this.state.profile.user.country_id) return this.setState({ showError: true, countryCityMsg: this.props.language.lang == 'ar' ? 'يجب اختيار الدولة' : 'Country selection is compulsory' });
        if (!this.state.profile.user.region_id) return this.setState({ showError: true, countryCityMsg: this.props.language.lang == 'ar' ? 'يجب اختيار المدينة' : 'City selection is compulsory' });

        fetch(url + 'user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.profile.token}`,
                'Language': this.props.language.lang
            },
            body: `country=${this.state.profile.user.country_id}&region=${this.state.profile.user.region_id}`
        })
            .then((r) => r.json())
            .then((data) => {
                // alert(JSON.stringify(resp))
                alert(data.message)
                if (data.error) return this.setState({ showError: true, countryCityMsg: data.message });

                let res = data;
                // let newName = res.data.name;

                AsyncStorage.getItem('user').then((user) => {
                    if (user) {
                        let u = JSON.parse(user);
                        u.user.country = this.state.countries[this.state.countryIndex].label;
                        u.user.region = this.state.cities[this.state.cityIndex].label;
                        u.user.region_id = this.state.profile.user.region_id
                        u.user.country_id = this.state.profile.user.country_id

                        this.props.updateCountryCity(u);
                        this.setState({ showError: false, countryCityMsg: data.message });
                        // u.user.email = "new@redux.com";
                        // this.props.updateProfileEmail(u);

                        // u.user.mobile = "05504030403";
                        // this.props.updateProfileMobile(u);
                    }

                })
            }).catch((err) => {
                alert(JSON.stringify(err))
            });
    }

    _updateUserType = () => {
        if (!this.state.profile.user.user_type_id) return this.setState({ showError: true, userTypeMsg: this.props.language.lang == 'ar' ? 'يجب اختيار نوع المستخدم' : 'User Type should be selected first' });

        fetch(url + 'user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.profile.token}`,
                'Language': this.props.language.lang
            },
            body: `user_type_id=${this.state.profile.user.user_type_id}`
        })
            .then((r) => r.json())
            .then((data) => {
                alert(data.message)
                // alert(JSON.stringify(resp))
                if (data.error) return this.setState({ showError: true, userTypeMsg: data.message });

                AsyncStorage.getItem('user').then((user) => {
                    if (user) {
                        let u = JSON.parse(user);
                        u.user.user_type = this.state.profile.user.user_type
                        u.user.user_type_id = this.state.profile.user.user_type_id

                        this.props.updateCountryCity(u);
                        this.setState({ showError: false, userTypeMsg: data.message });
                        // u.user.email = "new@redux.com";
                        // this.props.updateProfileEmail(u);

                        // u.user.mobile = "05504030403";
                        // this.props.updateProfileMobile(u);
                    }

                })

                // return this.setState({ showError: false, userTypeMsg: data.message });
            }).catch((err) => {
                alert(JSON.stringify(err))
            });
    } // end of _updateUserType()

    showStartDatePicker = () => {
        this.setState({
            isStartDatePickerVisible: true
        })
    }

    hideStartDatePicker = () => {
        this.setState({
            isStartDatePickerVisible: false
        })
    }

    handleConfirmStartDate = date => {
        this.hideStartDatePicker()
        this.setState({
            start_date: date.toLocaleTimeString()
        })
    }

    showEndStartDatePicker = () => {
        this.setState({
            isEndDatePickerVisible: true
        })
    }

    hideEndStartDayPicker = () => {
        this.setState({
            isEndDatePickerVisible: false
        })
    }

    handleConfirmEndDate = date => {
        this.hideEndStartDayPicker()
        this.setState({
            end_date: date.toLocaleTimeString()
        })
    }

    handleAddWorkTime = () => {
        if (this.state.dayId && this.state.start_date && this.state.end_date) {
            this.setState({
                work_time_err: ''
            })
            fetch(url + 'user/worktime/innnn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${this.state.profile.token}`,
                    'Language': this.props.language.lang
                },
                body: `day_id=${this.state.dayId}&start_time=${this.state.start_date}&end_time=${this.state.end_date}`
            })
                .then((r) => r.json())
                .then((data) => {
                    alert(data.message)
                    // alert(JSON.stringify(resp))
                    if (data.error) return this.setState({ showError: true, work_time_err: data.message });
                    else {
                        this.setState({
                            dayId: '',
                            work_time_err: '',
                            start_date: '',
                            end_date: ''
                        })
                    }
                }).catch((err) => {
                    console.warn(err)
                    alert(JSON.sgtringify(err))
                });
        } else {
            this.setState({
                work_time_err: 'Please Input All the Fields'
            })
        }
    }

    _handleUpdatEnChange = () => {
        fetch(url + 'user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.state.profile.token}`,
                'Language': this.props.language.lang
            },
            body: `about_en=${this.state.profile.user.about_en}`
        })
            .then((r) => r.json())
            .then((data) => {
                console.warn(data)
                // alert(JSON.stringify(resp))
                if (data.error) {
                    alert(data.message)
                }
                // if (data.error) return this.setState({ showError: true, countryCityMsg: data.message });
                else {

                    let res = data;

                    console.warn(data.message)

                    alert(data.message)

                    this.setState({
                        profile: data
                    })

                    this.props._updateProfileAboutEN
                    // let newName = res.data.name;

                }
            }).catch((err) => {
                alert(JSON.stringify(err))
            });
    }

    render() {
        const { profile, language } = this.props;
        const lang = language.lang === "en" ? EnglishLang.applang : ArabicLang.applang
        return (
            this.props.auth.isLoggedIn && this.state.profile ?
                (
                    <ScrollView style={{ flex: 1, backgroundColor: '#eee' }}>
                        <StatusBar backgroundColor="#000" barStyle='light-content' />
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee', padding: 7 }}>
                            {
                                this.state.avatarMsg ? (
                                    <Text style={{ color: this.state.showError && this.state.avatarMsg ? 'red' : 'green', textAlign: 'center', paddingVertical: 10 }}>{this.state.avatarMsg}</Text>
                                ) : null
                            }
                            <View style={{ width: '90%', padding: 15, backgroundColor: '#fff', position: 'relative', marginVertical: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity activeOpacity={.8} onPress={this._openImagePickerType} style={{ position: 'relative', zIndex: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: 122, height: 122, borderRadius: 60, position: 'relative', borderWidth: 4, borderColor: '#eee' }}
                                        source={{ uri: this.state.profile.user.avatar }} />
                                    <TouchableOpacity activeOpacity={.8} onPress={this._openImagePickerType} style={{ width: 40, height: 40, backgroundColor: '#eee', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: -6, right: '62%', borderRadius: 25 }}>
                                        <Icon name="md-camera" size={21} color="gray" />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '90%', padding: 15, backgroundColor: '#fff', position: 'relative', marginTop: 6 }}>
                                <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>
                                    {
                                        this.state.nameMsg ? (
                                            <Text style={{ color: this.state.showError && this.state.nameMsg ? 'red' : 'green', textAlign: 'center', paddingVertical: 10 }}>{this.state.nameMsg}</Text>
                                        ) : null
                                    }
                                    <Text>{lang.name}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <TouchableOpacity onPress={this._updateProfileName} activeOpacity={.8} style={{ padding: 5, backgroundColor: '#303031', justifyContent: 'center' }}>
                                            <Text style={{ color: '#fff' }}>{lang.save}</Text>
                                        </TouchableOpacity>
                                        <TextInput
                                            style={{ flex: 1, padding: 10, borderWidth: 1, borderColor: '#303031' }}
                                            placeholder={"Enter Name"}
                                            autoCapitalize="words"
                                            value={this.state.profile.user.name}
                                            onChangeText={this._handleNameChange} />
                                    </View>
                                </View>
                                <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>
                                    {
                                        this.state.emailMsg ? (
                                            <Text style={{ color: this.state.showError && this.state.emailMsg ? 'red' : 'green', textAlign: 'center', paddingVertical: 10 }}>{this.state.emailMsg}</Text>
                                        ) : null
                                    }
                                    <Text>{lang.email}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <TouchableOpacity onPress={this._updateProfileEmail} activeOpacity={.8} style={{ padding: 5, backgroundColor: '#303031', justifyContent: 'center' }}>
                                            <Text style={{ color: '#fff' }}>{lang.save}</Text>
                                        </TouchableOpacity>
                                        <TextInput
                                            style={{ flex: 1, padding: 10, borderWidth: 1, borderColor: '#303031' }}
                                            keyboardType="email-address"
                                            autoCapitalize='none'
                                            autoCompleteType="email"
                                            placeholder={"Enter Email"}
                                            value={this.state.profile.user.email}
                                            onChangeText={this._handleEmailChange}
                                        />
                                    </View>
                                </View>
                                <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>
                                    {
                                        this.state.mobileMsg ? (
                                            <Text style={{ color: this.state.showError && this.state.mobileMsg ? 'red' : 'green', textAlign: 'center', paddingVertical: 10 }}>{this.state.mobileMsg}</Text>
                                        ) : null
                                    }
                                    <Text>{lang.mobile}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <TouchableOpacity onPress={this._updateProfileMobile} activeOpacity={.8} style={{ padding: 5, backgroundColor: '#303031', justifyContent: 'center' }}>
                                            <Text style={{ color: '#fff' }}>{lang.save}</Text>
                                        </TouchableOpacity>
                                        <TextInput
                                            style={{ flex: 1, padding: 10, borderWidth: 1, borderColor: '#303031' }}
                                            keyboardType="phone-pad"
                                            maxLength={13}
                                            placeholder={'e.g +966-321-654-987'}
                                            value={this.state.profile.user.mobile}
                                            onChangeText={this._handleMobileChange}
                                        />
                                    </View>
                                </View>
                                <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>
                                    {
                                        this.state.profileMobileMsg ? (
                                            <Text style={{ color: this.state.showError && this.state.profileMobileMsg ? 'red' : 'green', textAlign: 'center', paddingVertical: 10 }}>{this.state.profileMobileMsg}</Text>
                                        ) : null
                                    }
                                    <Text>{lang.profile_mobile}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <TouchableOpacity onPress={this._updateProfileProfileMobile} activeOpacity={.8} style={{ padding: 5, backgroundColor: '#303031', justifyContent: 'center' }}>
                                            <Text style={{ color: '#fff' }}>{lang.save}</Text>
                                        </TouchableOpacity>
                                        <TextInput
                                            style={{ flex: 1, padding: 10, borderWidth: 1, borderColor: '#303031' }}
                                            keyboardType="phone-pad"
                                            maxLength={13}
                                            placeholder={'e.g +966-321-654-987'}
                                            value={this.state.profile.user.profile_mobile}
                                            onChangeText={this._handleProfileMobileChange}
                                        />
                                    </View>
                                </View>

                                {
                                    this.state.countries ? (
                                        <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'center' }}>
                                            {/* <Text style={{textAlign: 'center'}}>Select User Type</Text> */}

                                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                                {/* <TouchableOpacity activeOpacity={.8} style={{padding: 5, backgroundColor: '#303031', justifyContent: 'center', height: 35}}>
                                <Text style={{color: '#fff'}}>Save</Text>
                            </TouchableOpacity>  */}
                                                <View style={{ flex: 1, justifyContent: 'center', paddingBottom: 25 }}>
                                                    <Dropdown
                                                        label={lang.select_country}
                                                        value={this.state.profile.user.country}
                                                        data={this.state.countries}
                                                        onChangeText={this._handleCountryChange}
                                                    />
                                                </View>

                                                {/* <TextInput style={{ flex: 1,padding: 10, borderWidth: 1, borderColor: '#303031'}} placeholder="User Type ID"/> */}
                                            </View>

                                        </View>
                                    ) : null
                                }

                                {
                                    this.state.profile.user.country_id && this.state.cities.length > 0 ? (
                                        <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'center' }}>
                                            {/* <Text style={{textAlign: 'center'}}>Select User Type</Text> */}

                                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                                {
                                                    this.state.profile.user.country_id && this.state.profile.user.region_id ? (
                                                        <TouchableOpacity activeOpacity={.8} onPress={this._updateCountryCity} style={{ padding: 5, backgroundColor: '#303031', justifyContent: 'center', height: 35 }}>
                                                            <Text style={{ color: '#fff' }}>{lang.save}</Text>
                                                        </TouchableOpacity>
                                                    ) : null
                                                }
                                                <View style={{ flex: 1, justifyContent: 'center', paddingBottom: 25 }}>
                                                    <Dropdown
                                                        label={lang.select_region}
                                                        data={this.state.cities}
                                                        value={this.state.profile.user.region}
                                                        onChangeText={this._handleCityChange}
                                                    />

                                                </View>

                                                {/* <TextInput style={{ flex: 1,padding: 10, borderWidth: 1, borderColor: '#303031'}} placeholder="User Type ID"/> */}
                                            </View>
                                            {
                                                this.state.countryCityMsg ? (
                                                    <Text style={{ color: this.state.showError && this.state.countryCityMsg ? 'red' : 'green', textAlign: 'center' }}>{this.state.countryCityMsg}</Text>
                                                ) : null
                                            }
                                        </View>
                                    ) : null
                                }
                                {/* <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
                    <View style={{flex: 1, flexDirection: 'row', }}>
                        <TouchableOpacity activeOpacity={.8} style={{padding: 5, backgroundColor: '#303031', justifyContent: 'center'}}>
                            <Text style={{color: '#fff'}}>Save</Text>
                        </TouchableOpacity>
                        <TextInput style={{ flex: 1,padding: 10, borderWidth: 1, borderColor: '#303031'}} placeholder="Locale"/>
                    </View>
                </View> */}

                                <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center' }}>{lang.select_user_type}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity activeOpacity={.8} onPress={this._updateUserType} style={{ padding: 5, backgroundColor: '#303031', justifyContent: 'center', height: 35 }}>
                                            <Text style={{ color: '#fff' }}>{lang.save}</Text>
                                        </TouchableOpacity>
                                        <View style={{ flex: 1, justifyContent: 'center', paddingBottom: 25 }}>
                                            <Dropdown
                                                label='User Type'
                                                value={this.state.profile.user.user_type}
                                                onChangeText={this._handleUserTypeChange}
                                                data={this.state.userTypes}
                                            />
                                        </View>

                                        {/* <TextInput style={{ flex: 1,padding: 10, borderWidth: 1, borderColor: '#303031'}} placeholder="User Type ID"/> */}
                                    </View>
                                </View>

                                <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>
                                    <Text>{lang.about_ar}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <TouchableOpacity
                                            activeOpacity={.8}
                                            style={{ padding: 5, backgroundColor: '#303031', justifyContent: 'center', height: 35 }}
                                            onPress={this._updateProfileAboutAR}
                                        >
                                            <Text style={{ color: '#fff' }}>{lang.save}</Text>
                                        </TouchableOpacity>
                                        <TextInput
                                            style={{ flex: 1, padding: 10, borderWidth: 1, borderColor: '#303031', height: 70 }} multiline numberOfLines={10}
                                            placeholder={profile.about_ar ? profile.about_ar : (this.state.profile.user.about_ar ? this.state.profile.user.about_ar : 'النبذة - عربي')}
                                            value={this.state.profile.user.about_ar}
                                            onChangeText={this._handleAboutARChange}
                                        />
                                    </View>
                                </View>

                                <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>
                                    <Text>{lang.about_en}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <TouchableOpacity
                                            activeOpacity={.8}
                                            style={{ padding: 5, backgroundColor: '#303031', justifyContent: 'center', height: 35 }}
                                            // onPress={this._handleUpdatEnChange}
                                            onPress={this._updateProfileAboutEN}
                                        >
                                            <Text style={{ color: '#fff' }}>{lang.save}</Text>
                                        </TouchableOpacity>
                                        <TextInput
                                            style={{ flex: 1, padding: 10, borderWidth: 1, borderColor: '#303031', height: 70 }}
                                            multiline numberOfLines={10}
                                            placeholder={profile.about_en ? profile.about_en : (this.state.profile.user.about_en ? this.state.profile.user.about_en : 'About - English')}
                                            value={this.state.profile.user.about_en} onChangeText={this._handleAboutENChange}
                                        />
                                    </View>
                                </View>

                                <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', paddingVertical: 10 }}>{lang.change_password}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <TextInput style={{ flex: 1, padding: 10, borderWidth: 1, borderColor: '#303031' }} secureTextEntry placeholder="Password" />
                                    </View>
                                </View>

                                <View style={{ flex: 1, paddingHorizontal: 10, marginTop: 6, justifyContent: 'center' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <TextInput style={{ flex: 1, padding: 10, borderWidth: 1, borderColor: '#303031' }} secureTextEntry placeholder="Password Confirm" />
                                    </View>
                                    <TouchableOpacity activeOpacity={.8} style={{ padding: 5, marginTop: 6, backgroundColor: '#303031', justifyContent: 'center' }}>
                                        <Text style={{ color: '#fff', textAlign: 'center' }}>{lang.save_password}</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', marginTop: 20 }}>{lang.add_work_time}</Text>
                                    {
                                        this.state.work_time_err ? (
                                            <Text style={{ color: 'red', textAlign: 'center', paddingVertical: 10 }}>{this.state.work_time_err}</Text>
                                        ) : null
                                    }
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ flex: 1, justifyContent: 'center', }}>
                                            <Dropdown
                                                label={lang.select_day}
                                                value={this.state.dayId}
                                                data={this.state.days}
                                                onChangeText={this._handleDayChange}
                                            />
                                        </View>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        {/* <View style={{flex: 1, justifyContent: 'center', paddingBottom: 25, flexDirection: 'row'}}> */}
                                        <TouchableOpacity activeOpacity={.8} onPress={this.showStartDatePicker} style={{ padding: 5, backgroundColor: '#303031', justifyContent: 'center', height: 35 }}>
                                            <Text style={{ color: '#fff' }}>{lang.start_time}:</Text>
                                        </TouchableOpacity>
                                        <View style={{ flex: 1, padding: 5, borderWidth: 1, borderColor: '#303031', }} >
                                            <Text style={{ fontSize: 15 }}>{this.state.start_date}</Text>
                                        </View>

                                        {/* </View> */}
                                    </View>


                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                                        {/* <View style={{flex: 1, justifyContent: 'center', paddingBottom: 25, flexDirection: 'row'}}> */}
                                        <TouchableOpacity activeOpacity={.8} onPress={this.showEndStartDatePicker} style={{ padding: 5, backgroundColor: '#303031', justifyContent: 'center', height: 35 }}>
                                            <Text style={{ color: '#fff' }}>{lang.end_time}</Text>
                                        </TouchableOpacity>
                                        <View style={{ flex: 1, padding: 5, borderWidth: 1, borderColor: '#303031', }}>
                                            <Text style={{ fontSize: 15 }}>{this.state.end_date}</Text>
                                        </View>

                                        {/* </View> */}
                                    </View>




                                    <TouchableOpacity activeOpacity={.8} onPress={this.handleAddWorkTime} style={{ padding: 5, backgroundColor: '#303031', justifyContent: 'center', height: 35, marginTop: 10, alignContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#fff' }}>{lang.add}</Text>
                                    </TouchableOpacity>


                                </View>
                            </View>
                        </View>
                        <DateTimePickerModal
                            isVisible={this.state.isStartDatePickerVisible}
                            mode="time"
                            onConfirm={this.handleConfirmStartDate}
                            onCancel={this.hideStartDatePicker}
                            date={new Date()}
                            is24Hour={true}
                        />
                        <DateTimePickerModal
                            isVisible={this.state.isEndDatePickerVisible}
                            mode="time"
                            onConfirm={this.handleConfirmEndDate}
                            onCancel={this.hideEndStartDayPicker}
                            date={new Date()}
                            is24Hour={true}
                        />
                    </ScrollView>
                ) : (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Image source={require('../assets/images/bride.png')} resizeMode="contain" style={{width: 200, height: 200}}/> */}
                        <Text style={{ color: '#303031', textAlign: 'center', marginBottom: 10 }}>{this.props.language.lang == 'ar' ? 'لم تسجل دخولك بعد: ' : 'You are not logged in:'}</Text>
                        <TouchableOpacity activeOpacity={.8} onPress={this._login} style={{ padding: 15, backgroundColor: '#303031', width: '70%', borderRadius: 6 }}>
                            <Text style={{ color: '#fff', textAlign: 'center' }}>{this.props.language.lang == 'ar' ? 'تسحيل الدخول' : 'Log In'}</Text>
                        </TouchableOpacity>
                    </View>
                )
        )

    }
} // end of component

const mapStateToProps = state => {
    const { language, auth, profile } = state;
    return { language, auth, profile };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        logIn,
        logOut,
        updateProfileName,
        updateProfileEmail,
        updateProfileMobile,
        updateProfileProfileMobile,
        updateProfileAboutAR,
        updateProfileAboutEN,
        updateProfileStatus,
        updateProfileStatusLabel,
        updateProfileLocale,
        updateProfileAvatar,
        updateCountryCity,
        updateProfilePushToken,
        updateProfileUUID,
        updateProfileLogOut
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfoUpdate)

const styles = StyleSheet.create({
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
})