import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Rating } from 'react-native-ratings';
import Counter from "react-native-counters";
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeToArabic, changeToEnglish } from '../redux/actions/languageAction';
import { logIn, logOut } from '../redux/actions/authAction';
import { url } from '../utils/appsettings';

 class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    };
  }

  

  componentDidMount() {
  } // componentDidMount()

  _editComment = () => {
      this.props.navigation.navigate("EditComment");
  }

  render() {
      const {navigation} = this.props;
      let service = navigation.getParam('item', {});
      // alert(JSON.stringify(service))
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#eee'}}>
        <View style={{margin: 9, backgroundColor: 'white'}}>
          <View>
            <Text style={{paddingHorizontal: 8, textAlign: 'right', fontSize: 23, marginVertical: 10, color: '#303031'}}>{service.name}</Text>
            {/* <Text style={{paddingHorizontal: 8, textAlign: 'right', fontSize: 14, marginVertical: 3, color: 'gray'}}>Beauty - تجميل</Text> */}
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 8}}>
              <Text style={{paddingHorizontal: 8, color: 'gray', fontSize: 12}}>* بناءً على 120 تقييم</Text>  
              <Rating
                  type='star'
                  startingValue={3.5}
                  ratingCount={5}
                  fractions={2}
                  readonly={true}
                  imageSize={19}
                  style={{paddingHorizontal: 8}}
                />
          </View>
          <Image 
              resizeMode="contain"
              source={{uri: service.avatar}}
              style={{width: '100%', height: 210, marginTop: 10, marginBottom: 10}}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text style={{fontSize: 24, color: '#f00', marginHorizontal: 10, fontWeight: '300', textAlign: 'left'}}>
                  {service.price >= 1 ? 'SAR ' + service.price : 'FREE'} 
                </Text>
                {/* <Text style={{fontSize: 18, textDecorationLine: 'line-through', color: 'gray', fontWeight: '200', textAlign: 'left'}}>$200</Text> */}
            </View>

            <Text style={{fontSize: 20, color:service.status == 'active' ? 'green' : '#f00', marginHorizontal: 10, fontWeight: '200', textAlign: 'left'}}>
              {service.status == 'active' ? 'متوفر في المتجر' : 'غير متوفر في المتجر'}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
             <View>
               <Counter textColor="gray" touchableColor="gray" min={1} max={service.qty} start={1} />
             </View>
             <View>
                <Text style={{fontSize: 20, color: 'gray', fontWeight: '300'}}>الكمية</Text>
             </View>
          </View>

          <Text style={{ textAlign: this.props.language.lang == 'en' ? 'justify' : 'right', fontWeight: '300', lineHeight: 25, fontSize: 15, color: 'gray', margin: 5}}>
            {service.description}
          </Text>
          <View style={{padding: 10, alignItems: 'center'}}>
              <TouchableOpacity activeOpacity={.8} style={{height: 50, width: '85%',backgroundColor: '#000', justifyContent: 'center', borderRadius: 25}}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>أضف إلى السلة</Text>
              </TouchableOpacity>        
          </View>
        </View>

        <View style={{ height: 300, marginHorizontal: 9, marginBottom: 9, backgroundColor: 'white'}}>
                  <View>
                    <Text style={{paddingHorizontal: 8, textAlign: 'right', fontSize: 23, marginVertical: 10, color: '#000', fontWeight: '200'}}>التعليقات</Text>
                  </View>
                  <ScrollView style={{marginVertical: 2}} nestedScrollEnabled={true}>
                      {
                        [1,2,3,4,5].map((item) => {
                                    return (
                                      <View key={item} style={{flexDirection: 'row', marginVertical: 5, borderTopWidth: 1, borderBottomWidth: 1, borderTopColor: 'white', borderBottomColor: 'white' }}>
                                          <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                                            <TouchableOpacity>
                                                <Icon name="hearto" size={23} color="#bdbdbd" />
                                            </TouchableOpacity>
                                          </View>                  
                                          <View style={{flex: 3, padding: 5, alignItems: 'flex-end'}}>
                                            <Text style={{fontSize: 14, fontWeight: 'bold', textAlign: 'right', color: '#303031'}}> مريم الإبراهيم   <Text style={{fontWeight: '100', color: 'gray'}}>ويُستخدم في صناعات كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.</Text></Text>
                                            {/* <Text style={{fontSize: 12, color: 'gray'}}> 11-10-2019, 02:00 PM </Text> */}
                                            {/* <View>
                                              <Text style={{textAlign: 'right', color: 'gray', padding: 5}}>ويُستخدم في صناعات كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.</Text>
                                            </View> */}
                                            {/* <View style={{flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eee', padding: 6, width: '100%'}}>
                                                <TouchableOpacity style={{paddingRight: 15}}>
                                                    <Icon name="ios-trash" size={25} color="gray" />
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={this._editComment} style={{paddingRight: 15}}>
                                                    <Icon name="md-create" size={25} color="gray" />
                                                </TouchableOpacity>
                                            </View> */}
                                            <View>
                                              <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'right', color: '#bdbdbd', marginTop: 7}}>6d   18 Likes</Text>
                                            </View>
                                          </View>
                                          <View style={{flex: 1, backgroundColor: 'white', padding: 3 , alignItems: 'center'}}>
                                            <View style={{width: 50, height: 50, borderRadius: Platform.OS == 'android' ? 55 : 40, alignItems: 'center'}}>
                                              <Image source={{uri: 'https://ctau-thechristianpost.netdna-ssl.com/static/files/2019/08/30/30%20August%202019%20Bonnie%20Dowie%20photo%20Japanese%20business%20principle%20unsplash.jpg'}} resizeMode="stretch" style={{width: 50, height: 50, borderRadius: Platform.OS == 'android' ? 35 : 25}}/>
                                            </View>
                                          </View>

                                      </View>
                                    )
                                  })
                                }
                    </ScrollView>
                    <KeyboardAvoidingView style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
                    <TextInput placeholder="أترك تعليقك..." style={{flex: 3, padding: 10, textAlign: 'right'}} multiline={true} />
                      <TouchableOpacity style={{flex: 1, height: 40, padding: 8, backgroundColor: '#303031', justifyContent: 'center'}}>
                            <Text style={{textAlign: 'center', color: '#fff'}}>ارسال التعليق</Text>
                      </TouchableOpacity>
                    </KeyboardAvoidingView>
              </View>

      </ScrollView>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)