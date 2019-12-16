import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet, FlatList, Linking, TouchableOpacity, ActivityIndicator, RefreshControl, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeToArabic, changeToEnglish } from '../redux/actions/languageAction';
import { logIn, logOut } from '../redux/actions/authAction';
import { url } from '../utils/appsettings';
import AsyncStorage from '@react-native-community/async-storage'

import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';

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
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: users,
      profile: null,
      memberInfo: null,
      workTimes: null,
      photos: [],
      videos: [],
      pageIndex: 16,
      photoErr: '',
      showError: false,
      isPhotoLoading: false
    };
  }

  componentDidMount() {
    // this.setState({users: this.state.users.filter((item) => item.id <= this.state.pageIndex)})

    AsyncStorage.getItem('user').then((user) => {
      let u = JSON.parse(user)
      if (u) {
        this.setState({ profile: u });
      }

      if (this.state.profile) {
        if (this.state.profile.user.id) {
          this._loadUserPhotos(this.state.profile.user.id)
          this._loadUserVids(this.state.profile.user.id)
          this._loadWorkTimes(this.state.profile.user.id)
        }
      }

      if (this.state.profile) {
        if (this.state.profile.user.isSubscriber) {
          this._loadMembershipInfo()
        }
      }
      // alert(JSON.stringify(u))
    })
  } // componentDidMount

  _login = () => {
    this.props.navigation.navigate('Login')
  }

  _refresh = () => {
    // this.setState({refreshing: true});
    // this.setState({pageIndex: this.state.pageIndex += 4, users: users.filter((item) => item.id <= this.state.pageIndex), refreshing: false})
  }

  _loadMembershipInfo = () => {
    fetch(`${url}user/membership`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Language': this.props.language.lang,
        'Authorization': 'Bearer ' + this.state.profile.token
      }
    })
      .then(r => r.json())
      .then((mem) => {
        // alert(JSON.stringify(mem))
        if (mem.error) return;
        return this.setState({ memberInfo: mem.data })
      })
  } // end of _loadMembershipInfo()

  _loadWorkTimes = (id) => {
    fetch(`${url}user/${id}/worktimes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Language': this.props.language.lang,
        'Authorization': 'Bearer ' + this.state.profile.token
      }
    })
      .then(r => r.json())
      .then((wt) => {
        // alert(JSON.stringify(wt))
        if (wt.error) return;
        console.log("work time", wt.data)
        return this.setState({ workTimes: wt.data })
      })
  } // end of _loadWorkTimes()

  _loadUserPhotos = (id) => {
    // user/3/photos
    fetch(`${url}user/${id}/photos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Language': this.props.language.lang,
        'Authorization': 'Bearer ' + this.state.profile.token
      }
    })
      .then(r => r.json())
      .then((wt) => {
        // alert(JSON.stringify(wt))
        if (wt.error) return;
        console.log("my Images", wt.data);
        return this.setState({ photos: wt.data })
      })
  } // end of _loadUserPhotos()

  _loadUserVids = (id) => {
    fetch(`${url}user/${id}/videos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Language': this.props.language.lang,
        'Authorization': 'Bearer ' + this.state.profile.token
      }
    })
      .then(r => r.json())
      .then((wt) => {
        // alert(JSON.stringify(wt))
        if (wt.error) return;
        return this.setState({ videos: wt.data })
      })
  } // end of _loadUserVids()

  _editProfile = () => {
    this.props.navigation.navigate('AccountInfoUpdate');
  } // end of_editProfile()



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


  videoOptions = {
    title: this.props.language.lang == 'ar' ? 'اختيار صورة العرض' : 'Pick Profile Photo',
    chooseFromLibraryButtonTitle: this.props.language.lang == 'ar' ? 'اختيار من معرض الصور' : 'Choose from Photo Library',
    takePhotoButtonTitle: this.props.language.lang == 'ar' ? 'التقاط صورة بالكاميرا' : 'Use Camera to take a picture',
    cancelButtonTitle: this.props.language.lang == 'ar' ? 'إلغاء' : 'Cancel',
    mediaType: 'video',
    videoQuality: 'medium',
    // allowsEditing: true,
    quality: 1
  }

  // update functions
  uploadImage = (img) => {

    this.setState({ isPhotoLoading: true })

    RNFetchBlob.fetch('POST', url + 'user/photos', {
      'Authorization': `Bearer ${this.state.profile.token}`,
      // 'Content-Type': 'multipart/form-data',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'language': this.props.language.lang,
    }, [
      { name: 'media', filename: new Date().getTime() + '.png', type: 'image/png', data: img }
    ])
      .then((res) => res.json())
      .then((resp) => {

        console.log(resp)
        if (resp.error) return this.setState({ showError: true, photoErr: resp.message, isPhotoLoading: false });
        let newImg = resp.data.avatar;
        // alert(JSON.stringify(resp))
        this.setState({ isPhotoLoading: false, tstBgColor: '#7bbe50', showError: false, photoErr: '' });

        this._loadUserPhotos(this.state.profile.user.id)
        // this.showToast(res.message, Toast.SHORT , Toast.BOTTOM, '#7bbe50');       
      }).catch((e) => {
        alert(e)
      })

  } // end of _updateProfileAvatar()

  // update functions
  uploadVideo = (video) => {

    this.setState({ isVideoLoading: true })

    RNFetchBlob.fetch('POST', url + 'user/videos', {
      'Authorization': `Bearer ${this.state.profile.token}`,
      'Content-Type': 'multipart/form-data',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      // "Accept":"multipart/form-data",
      'language': this.props.language.lang,
    }, [
      { name: 'media', filename: new Date().getTime() + '.mp4', data: RNFetchBlob.wrap(video) }
    ])
      .then((res) => res.json())
      .then((resp) => {

        console.log(resp)
        if (resp.error) return this.setState({ showError: true, videErr: resp.message, isVideoLoading: false });
        // alert(JSON.stringify(resp))
        this.setState({ isVideoLoading: false, tstBgColor: '#7bbe50', showError: false, videErr: '' });

        this._loadUserVids(this.state.profile.user.id)
        // this.showToast(res.message, Toast.SHORT , Toast.BOTTOM, '#7bbe50');       
      }).catch((e) => {
        alert(e)
      })

  } // end of _updateProfileAvatar()


  handleImageUpload = () => {
    // TODO: camera or picker code goes here
    ImagePicker.showImagePicker(this.options, (response) => {

      if (response.didCancel) {

      } else if (response.error) {
        this.setState({ tstBgColor: '#DC143C' });
        this.setState({ showError: true, photoErr: this.props.language.lang == 'ar' ? 'تعذر تحديث صورة الملف ' : 'Sorry, your profile image has not been updated' });
      } else {

        const uploadImg = response.data;
        const src = response.uri;
        // // alert(uploadImg)
        // this.setState({
        //     avatar: src,
        //     avatarData: uploadImg
        // });
        //   console.log(source)
        this.uploadImage(uploadImg)
      }
    });
  } // end of _openImagePickerType



  handleVideoUpload = () => {
    ImagePicker.showImagePicker(this.videoOptions, (response) => {
      if (response.didCancel) {

      } else if (response.error) {
        this.setState({ tstBgColor: '#DC143C' });
        this.setState({ showError: true, videErr: this.props.language.lang == 'ar' ? 'تعذر تحديث صورة الملف ' : 'Sorry, your video has not been updated' });
      } else {

        const uploadVideo = response.data;
        const src = response.uri;

        this.uploadVideo(response.uri)
      }
    })
  }
  handleDeleteImage = (media_id) => {
    fetch(`${url}media/photos/${media_id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.state.profile.token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'language': this.props.language.lang,
        // 'Authorization': 'Bearer ' + this.state.profile.token
      }
    })
      .then(r => r.json())
      .then((wt) => {
        // alert(JSON.stringify(wt))
        if (wt.error) return this.setState({ showError: true, photoErr: wt.message });

        this._loadUserPhotos(this.state.profile.user.id)
      }).catch((e) => {
        alert(JSON.stringify(e))
      })
  }

  handleDeleteVideo = (media_id) => {
    fetch(`${url}media/photos/${media_id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.state.profile.token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'language': this.props.language.lang,
        // 'Authorization': 'Bearer ' + this.state.profile.token
      }
    })
      .then(r => r.json())
      .then((wt) => {
        // alert(JSON.stringify(wt))
        if (wt.error) return this.setState({ showError: true, videErr: wt.message });

        this._loadUserVids(this.state.profile.user.id)
      }).catch((e) => {
        alert(JSON.stringify(e))
      })
  }
  render() {
    console.warn(this.state.workTimes)
    // alert(JSON.stringify(profile))
    return (
      this.props.auth.isLoggedIn && this.state.profile ?
        (
          <ScrollView style={{ flex: 1, backgroundColor: '#eee' }}>
            <StatusBar backgroundColor="#000" barStyle='light-content' />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee', padding: 7 }}>
              <View style={{ width: '90%', padding: 7, backgroundColor: '#fff', marginVertical: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={{ uri: this.props.profile.avatar ? this.props.profile.avatar : this.state.profile.user.avatar }} style={{ width: 80, height: 80, borderRadius: 40 }} />
                  {
                    this.props.language.lang == 'en' ?
                      <TouchableOpacity onPress={this._editProfile} activeOpacity={.8} style={{ flexDirection: 'row', width: 120, height: 35, justifyContent: 'space-around', alignItems: 'center', padding: 1, margin: 10, borderWidth: 1, borderColor: 'skyblue', borderRadius: 10 }}>
                        <Icon name="md-create" size={20} color="skyblue" />
                        <Text style={{ alignSelf: 'center', color: 'skyblue', ...myFont }}>Edit Profile</Text>
                      </TouchableOpacity>
                      :
                      <TouchableOpacity onPress={this._editProfile} activeOpacity={.8} style={{ flexDirection: 'row', width: 120, height: 35, justifyContent: 'space-around', alignItems: 'center', padding: 1, margin: 10, borderWidth: 1, borderColor: 'skyblue', borderRadius: 10 }}>
                        <Text style={{ alignSelf: 'center', color: 'skyblue', ...myFont }}>تعديل الملف</Text>
                        <Icon name="md-create" size={20} color="skyblue" />
                      </TouchableOpacity>
                  }
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 19, fontWeight: '100' }}>{this.state.profile.user.name}</Text>
                  <Text style={{ fontWeight: '100' }}>{this.props.profile.email ? this.props.profile.email : this.state.profile.user.email}</Text>
                  <Text style={{ fontSize: 12, fontWeight: '100', color: 'gray', marginTop: 10 }}>
                    {this.state.profile.user.about}
                  </Text>
                </View>
              </View>

              <View style={{ width: '90%', padding: 7, backgroundColor: '#fff', marginVertical: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ textAlign: 'center', fontSize: 17, paddingBottom: 10, fontWeight: '100' }}>Followers</Text>
                  <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '100' }}>120</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text style={{ textAlign: 'center', fontSize: 17, paddingBottom: 10, fontWeight: '100' }}>Followings</Text>
                  <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '100' }}>99</Text>
                </View>
              </View>

              <View style={{ width: '90%', padding: 7, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 4 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '100' }}>Name: </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '100' }}>{this.props.profile.name ? this.props.profile.name : (this.state.profile.user.name ? this.state.profile.user.name : ' - ')}</Text>
                  </View>
                </View>
                {/* <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 7}}>
                <View style={{flex: 1}}>
                   <Text style={{textAlign: 'center', fontWeight: '100'}}>Subscription Type: </Text>
                </View>
                <View style={{flex: 1}}>
                   <Text style={{textAlign: 'center', fontWeight: '100'}}>{profile.user.role_name ? profile.user.role_name : ' - '}</Text>
                </View>
              </View> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 7 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '100' }}>Mobile: </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '100' }}>{this.props.profile.mobile ? this.props.profile.mobile : (this.state.profile.user.mobile ? this.state.profile.user.mobile : ' - ')}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 7 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '100' }}>Country: </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '100' }}>{this.props.profile.country ? this.props.profile.country : (this.state.profile.user.country ? this.state.profile.user.country : ' - ')}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 7 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '100' }}>City: </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '100' }}>{this.props.profile.region ? this.props.profile.region : (this.state.profile.user.region ? this.state.profile.user.region : ' - ')}</Text>
                  </View>
                </View>
                {/* <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 7}}>
                <View style={{flex: 1}}>
                   <Text style={{textAlign: 'center', fontWeight: '100'}}>DOB: </Text>
                </View>
                <View style={{flex: 1}}>
                   <Text style={{textAlign: 'center', fontWeight: '100'}}>1993</Text>
                </View>
              </View> */}
                {/*<View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 7}}>
                <View style={{flex: 1}}>
                   <Text style={{textAlign: 'center', fontWeight: '100'}}>Website: </Text>
                </View>
                <View style={{flex: 1}}>
                   <Text style={{textAlign: 'center', fontWeight: '100'}}>minimal.com</Text>
                </View>
              </View>*/}
              </View>

              {
                this.state.profile.user.isSubscriber && this.state.workTimes ?
                  <View style={{ width: '90%', padding: 7, marginVertical: 5, backgroundColor: '#fff', flexDirection: 'column', }}>
                    <Text style={{ color: '#000', textAlign: 'right', fontWeight: '200' }}>أوقات العمل</Text>
                    {this.state.workTimes.map((item) => {
                      return (
                        <View style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
                          <Text style={{ color: '#000', textAlign: 'left', fontWeight: '200' }}>{item}</Text>
                          <Icon
                            name="md-trash" style={{ marginLeft: 'auto', fontSize: 20 }}
                          // onPress={}
                          />
                        </View>
                      )
                    })}
                  </View>

                  : null

              }

              {
                this.state.profile.user.isSubscriber && this.state.memberInfo ?
                  this.state.memberInfo.exp_date ? (
                    <View style={{ width: '90%', padding: 7, marginVertical: 5, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around' }}>
                      <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: '#000', textAlign: 'center', fontWeight: '200' }}>Subscription Expires in: </Text>
                      </View>
                      <View>
                        <Text style={{ color: '#000', textAlign: 'center', fontWeight: '200' }}>{this.state.memberInfo.exp_date}</Text>
                        <TouchableOpacity style={{ padding: 5, backgroundColor: '#000', marginVertical: 4 }} onPress={() => this.props.navigation.navigate('AccountRenew')}>
                          <Text style={{ textAlign: 'center', color: '#fff' }}>{this.props.language.lang == 'en' ? 'Renew Now' : 'جدد اشتراكك الآن'}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : null
                  : null
              }
              {/* 
              <View style={{ width: '90%', padding: 7, margin: 7, backgroundColor: 'white' }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Text style={{ paddingHorizontal: 8, textAlign: 'left', fontSize: 14, marginVertical: 10, color: '#000', fontWeight: '200' }}>
                    Subscription Expires in
                  </Text>

                  <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 'auto' }}>
                    <Text style={{ paddingHorizontal: 8, textAlign: 'left', fontSize: 14, marginVertical: 10, color: '#000', fontWeight: '200' }}>
                      20-10-2020
                    </Text>
                    <TouchableOpacity style={{ padding: 7, backgroundColor: '#303031', marginVertical: 4, borderRadius: 5, marginLeft: 'auto' }} onPress={() => this.props.navigation.navigate('AddPhoto')}>
                      <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, ...myFont }}>Renew Now</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View> */}


              <Text style={{ color: this.state.showError && this.state.photoErr ? 'red' : 'green', textAlign: 'center' }}>{this.state.photoErr}</Text>

              {this.state.photos.length ? <View style={{ width: '90%', padding: 7, margin: 7, backgroundColor: 'white' }}>
                <View>
                  <Text style={{ paddingHorizontal: 8, textAlign: 'right', fontSize: 23, marginVertical: 10, color: '#000', fontWeight: '200' }}>الصور</Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {
                    this.state.photos.length ? (
                      this.state.photos.map((img) => {
                        return (
                          <View style={{ alignItems: 'flex-start' }}>
                            <TouchableOpacity key={img.id}>
                              <Image style={{ height: 60, width: 60, margin: 4 }} source={{ uri: img.url }} />
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={{ position: 'absolute', width: 20, height: 20, borderRadius: 10, backgroundColor: 'red', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}
                              onPress={() => this.handleDeleteImage(img.id)}
                            >
                              <Icon name="md-close" style={{ color: 'white' }} />
                            </TouchableOpacity>
                          </View>
                        )
                      })
                    ) : null
                  }
                </View>
              </View> : null}

              <View style={{ width: '90%', padding: 7, margin: 7, backgroundColor: 'white' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  {/* <Text style={{ textAlign: 'center', color: '#303031', fontSize: 18, ...myFont }}>{this.props.language.lang == 'en' ? " There isn't any added photos " : ' لاتوجد صور مضافة '}</Text> */}
                  <TouchableOpacity style={{ padding: 7, width: 180, backgroundColor: '#303031', marginVertical: 4, borderRadius: 5 }} onPress={this.handleImageUpload}>
                    {
                      this.state.isPhotoLoading ?
                        <ActivityIndicator />
                        :
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, ...myFont }}>{this.props.language.lang == 'en' ? 'Add Photos' : 'أضف صور'}</Text>

                    }
                  </TouchableOpacity>
                </View>
              </View>


              <Text style={{ color: this.state.showError && this.state.videErr ? 'red' : 'green', textAlign: 'center' }}>{this.state.videErr}</Text>
              <View style={{ width: '90%', padding: 7, margin: 7, backgroundColor: 'white' }}>
                <View>
                  <Text style={{ paddingHorizontal: 8, textAlign: 'right', fontSize: 23, marginVertical: 10, color: '#000', fontWeight: '200' }}>الفيديوهات</Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {
                    this.state.videos.length ? (
                      this.state.videos.map((vid) => {
                        return (
                          <View style={{ alignItems: 'flex-start' }} >
                            <TouchableOpacity
                              key={vid.id}
                              onPress={() => Linking.openURL(vid.url)}
                            >
                              {/* <Text>{vid.name}</Text> */}
                              <Image style={{ height: 60, width: 60, margin: 4 }} source={{ uri: vid.thumbnail }} />
                              {/* <Image style={{height: 60, width: 60, margin: 4}} source={{uri: vid.url}} /> */}
                            </TouchableOpacity>

                            <TouchableOpacity 
                              style={{ position: 'absolute', width: 20, height: 20, borderRadius: 10, backgroundColor: 'red', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}
                              onPress={() => this.handleDeleteVideo(vid.id)}
                            >
                              <Icon name="md-close" style={{ color: 'white' }} />
                            </TouchableOpacity>
                          </View>
                        )
                      })
                    ) : null
                  }
                </View>
              </View>

              <View style={{ width: '90%', padding: 7, margin: 7, backgroundColor: 'white' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  {/* <Text style={{ textAlign: 'center', color: '#303031', fontSize: 18, ...myFont }}>{this.props.language.lang == 'en' ? " There isn't any added Videos " : ' لاتوجد فيديوهات مضافة '}</Text> */}
                  <TouchableOpacity style={{ padding: 7, width: 180, backgroundColor: '#303031', marginVertical: 4, borderRadius: 5 }} onPress={this.handleVideoUpload}>
                    {
                      this.state.isVideoLoading ?
                        <ActivityIndicator />
                        :
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, ...myFont }}>{this.props.language.lang == 'en' ? 'Add Videos' : 'أضف فيديو'}</Text>
                    }
                  </TouchableOpacity>
                </View>
              </View>

              {/* <View style={{width: '90%', padding: 7, backgroundColor: '#fff', marginVertical: 5, flexDirection: 'row', justifyContent: 'space-around'}}>
              
                  <TouchableOpacity style={{paddingLeft: 15}} onPress={() => {}}>
                    <Icon name="logo-twitter" size={34} color="skyblue" />
                  </TouchableOpacity>  
                  <TouchableOpacity style={{paddingLeft: 15}} onPress={() => {}}>
                    <Icon name="logo-facebook" size={34} color="steelblue" />
                  </TouchableOpacity> 
                  <TouchableOpacity style={{paddingLeft: 15}} onPress={() => {}}>
                    <Icon name="logo-youtube" size={34} color="red" />
                  </TouchableOpacity> 
                  <TouchableOpacity style={{paddingLeft: 15}} onPress={() => {}}>
                    <Icon name="logo-instagram" size={34} color="purple" />
                  </TouchableOpacity>          
  
            </View> */}
            </View>
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
}

const mapStateToProps = state => {
  const { language, auth, profile } = state;
  return { language, auth, profile };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeToArabic,
    changeToEnglish,
    logIn,
    logOut
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
})