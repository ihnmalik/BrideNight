import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Platform, FlatList, RefreshControl,  KeyboardAvoidingView, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Rating } from 'react-native-ratings';
import Counter from "react-native-counters";
import SwiperFlatList from 'react-native-swiper-flatlist';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const { height, width } =   Dimensions.get('window');

const myFont = Platform.select({
  ios: {
    fontFamily: 'GESSTwoLight-Light',
  },
  android: {
    fontFamily: 'ArbFONTS-rabi3',
  },
})

const tabs = [
  {index: 1, name: 'tab1', title: 'عني'},
  {index: 2, name: 'tab2', title: 'الفيديو'},
  {index: 3, name: 'tab3', title: 'الصور'}
]

const users = [{
  "id": 1,
  "first_name": "مكياج 1",
  "last_name": "Jovovic",
  "email": "djovovic0@nyu.edu",
  "image_url": "https://i.pinimg.com/474x/cb/56/f5/cb56f5a4ae18f0e174d630d8bdc9211b.jpg"
}, {
  "id": 2,
  "first_name": "مكياج 2",
  "last_name": "Fernely",
  "email": "sfernely1@lulu.com",
  "image_url": "http://www.makeup2do.com/wp-content/uploads/2016/08/526x297-aNj.jpg"
}, {
  "id": 3,
  "first_name": "مكياج 3",
  "last_name": "McCudden",
  "email": "bmccudden2@google.ca",
  "image_url": "http://www.makeup2do.com/wp-content/uploads/2016/08/Eye-Makeup-Trends.jpg"
}, {
  "id": 4,
  "first_name": "مكياج 4",
  "last_name": "Yair",
  "email": "myair3@posterous.com",
  "image_url": "https://www.makeup2do.com/wp-content/uploads/2016/08/Video-Tutorial-of-Cute-Makeup-Tips-For-Eyes.jpg"
}];

const images = [{
  "id": 1,
  "first_name": "مكياج 1",
  "last_name": "Jovovic",
  "email": "djovovic0@nyu.edu",
  "image_url": "https://www.rd.com/wp-content/uploads/2016/09/01-dirty-makeup-tools.jpg"
}, {
  "id": 2,
  "first_name": "مكياج 2",
  "last_name": "Fernely",
  "email": "sfernely1@lulu.com",
  "image_url": "https://liveglam.com/wp-content/uploads/2016/10/how-much-do-professional-makeup-brushes-cost.png"
}, {
  "id": 3,
  "first_name": "مكياج 3",
  "last_name": "McCudden",
  "email": "bmccudden2@google.ca",
  "image_url": "https://sassytownhouseliving.com/wp-content/uploads/2015/03/The-Top-10-Essential-Makeup-Tools-You-Cant-Live-Without-1.jpg"
}, {
  "id": 4,
  "first_name": "مكياج 4",
  "last_name": "Yair",
  "email": "myair3@posterous.com",
  "image_url": "https://becomingbrilliance.com/wp-content/uploads/2019/01/Makeup-Brushes-3-1080x720.jpg"
}];

export default class ServiceUserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      lang: 'en',
      users,
      images,
      activeIndex: 1,
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    };
  }

  
_setActive = (index) => this.setState({activeIndex: index})

  componentDidMount() {
    setTimeout(() => {
      this.setState({lang: 'ar', content: 'لوريم إيبسوم(Lorem Ipsum) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير '})
    }, 1000);
  } // componentDidMount()

  render() {
      const {navigation} = this.props;
      let service = navigation.getParam('item', {});

    return (
      <ScrollView style={{flex: 1, backgroundColor: '#eee'}}>
        <View style={{ backgroundColor: 'white'}}>
          <View style={{backgroundColor: '#303031', padding: 10}}>
          
          <View style={{flexDirection: 'row', marginTop: 6}}>
            <TouchableOpacity activeOpacity={.8} style={{marginHorizontal: 10}}>
                <Icon name="sharealt" size={26} color="#fff" />
            </TouchableOpacity> 
            <TouchableOpacity activeOpacity={.8} style={{marginHorizontal: 10}}>
                <Icon name="hearto" size={26} color="#fff" />
            </TouchableOpacity> 
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>

              <View style={{flex: 1, justifyContent: 'center' , marginTop:30}}>
                  <View style={{flexDirection: 'row', direction: 'rtl'}}>
                    <Text style={{color: '#fff', textAlign: 'center', marginHorizontal: 3, fontWeight: '200', fontSize: 18}}>Riyadh</Text>
                  </View>
                  <View style={{flexDirection: 'row', direction: 'rtl'}}>
                    <Text style={{color: '#fff', textAlign: 'center', marginHorizontal: 3, fontWeight: '200', fontSize: 19}}>SAR 200</Text>
                    {/* <Text style={{color: '#fff', textAlign: 'center', marginHorizontal: 3, fontWeight: '200', fontSize: 19}}>SAR 200 السعر</Text> */}
                  </View>

                  <View style={{flexDirection: 'row', direction: 'rtl'}}>
                    <TouchableOpacity>
                      <Text style={{color: '#fff', textAlign: 'center', marginHorizontal: 3, fontWeight: '200', fontSize: 19}}>05504300430 </Text>
                      {/* <Text style={{color: '#fff', textAlign: 'center', marginHorizontal: 3, fontWeight: '200', fontSize: 19}}>رقم التواصل 05504300430 </Text> */}
                    </TouchableOpacity>
                  </View>
                  {/* <Rating
                  type='star'
                  startingValue={3.5}
                  ratingCount={5}
                  fractions={2}
                  readonly={true}
                  imageSize={12}
                  style={{paddingVertical: 6}}
                /> */}

              </View>
            <View>

              <Image 
                  resizeMode="cover"
                  source={{uri: service.image_url}}
                  style={{width: 100, height: 100, margin: 10, borderRadius: 50, alignSelf: 'center'}}
              />

                  <View  >
                    <Text style={{paddingHorizontal: 8, textAlign: 'center', fontSize: 18, color: '#fff', flexWrap: 'wrap', fontWeight: '200'}}>عائشة محمد</Text>
                    {/* <Text style={{paddingHorizontal: 8, textAlign: 'center', fontSize: 18, color: '#fff'}}>{service.first_name}</Text> */}
                  </View>

              <Rating
                  type='star'
                  startingValue={3.5}
                  ratingCount={5}
                  fractions={2}
                  readonly={true}
                  imageSize={12}
                  tintColor="#303031"
                  ratingTextColor="#000"
                  style={{paddingHorizontal: 2}}
                />

            </View>
          </View>

          
              <TouchableOpacity activeOpacity={.8}>
                  <LinearGradient start={{x: 0.8, y: 0.0}} end={{x: 0.1, y: 0.0}} colors={['#C6930A', '#8b6508' ]} style={{ width: '50%', padding: 10, marginHorizontal: 7, alignSelf: 'flex-start', borderRadius: 5, marginTop: 5, backgroundColor: '#d4af37'}}>
                      <Text style={{color: '#fff', textAlign: 'center', ...myFont, fontSize: 18}}>متابعة</Text>
                  </LinearGradient>
              </TouchableOpacity>
        </View>



              <View>
                    <ScrollView pagingEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true} style={{width: '100%', alignSelf: 'center', backgroundColor: '#fff', direction: 'rtl'}}>
                        {
                          tabs.map((tab) => {
                            return (
                              <TouchableOpacity onPress={() => this._setActive(tab.index)} activeOpacity={.8} key={tab.index} style={{backgroundColor: '#fff', width: Dimensions.get('window').width / 3, justifyContent: 'center', alignItems: 'center', height: 40, borderBottomWidth: this.state.activeIndex == tab.index ? 2 : 0, borderBottomColor: '#303031'}}>
                                  <Text style={{color: this.state.activeIndex == tab.index ? '#303031' : 'gray', ...myFont}}>{tab.title}</Text>
                              </TouchableOpacity>
                            )
                          })
                        }
                    </ScrollView>
              </View>

                      {
                        this.state.activeIndex == 1 ? (
                          <View>
                            <View style={{flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'space-between', direction: 'rtl', marginTop: 15}}>
                              <Text style={{color: '#000', textAlign: 'center', ...myFont}}>أوقات العمل</Text>
                              <View>                       
                                <Text style={{color: 'gray', textAlign: 'center', fontWeight: '200'}}>10:00 AM - 00:00 AM (Sat - Thurs)</Text>
                                <Text style={{color: 'gray', textAlign: 'right', fontWeight: '200'}}>* Except Friday</Text>
                              </View>
                            </View>

                            <View>
                                <Text style={{color: '#000', textAlign: 'right',  marginHorizontal: 10, ...myFont}}>الوصف</Text>
                                <Text style={{color: 'gray', textAlign: 'right', margin: 10, ...myFont}}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ماإفتراضي كنموذج عن النص، و نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص</Text>
                            </View>

                            <View style={{ height: 300, backgroundColor: 'white'}}>
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
                            </View>

                            <KeyboardAvoidingView style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
                                  <TextInput placeholder="أترك تعليقك..." style={{flex: 3, padding: 10, textAlign: 'right'}} multiline={true} />
                                  <TouchableOpacity style={{flex: 1, height: 40, padding: 8, backgroundColor: '#303031', justifyContent: 'center'}}>
                                        <Text style={{textAlign: 'center', color: '#fff'}}>ارسال التعليق</Text>
                                  </TouchableOpacity>
                            </KeyboardAvoidingView>
                         </View>
                        ) : null
                      }

                      {
                        this.state.activeIndex == 2 ? (
                            <View style={{backgroundColor: 'white'}}>
                              <View>
                                <Text style={{paddingHorizontal: 8, textAlign: 'right', fontSize: 23, marginVertical: 10, color: '#000', fontWeight: '200'}}>الفيديو</Text>
                              </View>
                              <View style={{flex: 1}}>
                              <FlatList
                                    data={this.state.users}
                                    style={{flex: 1}}
                                    renderItem={({ item }) => (
                                    <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ProductDetail', {item: item})} style={{ flex: 1, borderRadius: 4, alignItems: 'center', margin: 3, backgroundColor: '#fff', flexDirection: 'column'}}>
                                        
                                          <Image style={styles.imageThumbnail} resizeMode="stretch" source={{ uri: item.image_url }} />
                                          {/* <Text style={{textAlign: 'center', ...myFont, padding: 5, fontSize: 17}}>{item.first_name}</Text> */}

                                    </TouchableOpacity>
                                    )}
                                    refreshControl={<RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this._refresh}
                                    colors={['#7bbe50','#188ee1']}
                                    />}
                                    numColumns={2}
                                    keyExtractor={(item, index) => index}
                                />
                              </View>
                            </View>
                        ) : null
                      }

                      {
                        this.state.activeIndex == 3 ? (
                          <View style={{backgroundColor: 'white'}}>
                          <View>
                            <Text style={{paddingHorizontal: 8, textAlign: 'right', fontSize: 23, marginVertical: 10, color: '#000', fontWeight: '200'}}>الصور</Text>
                          </View>
                          <View style={{flex: 1}}>
                          <FlatList
                                data={this.state.images}
                                style={{flex: 1}}
                                renderItem={({ item }) => (
                                <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ProductDetail', {item: item})} style={{ flex: 1, borderRadius: 4, alignItems: 'center', margin: 3, backgroundColor: '#fff', flexDirection: 'column'}}>
                                    
                                      <Image style={styles.imageThumbnail} resizeMode="stretch" source={{ uri: item.image_url }} />
                                      {/* <Text style={{textAlign: 'center', ...myFont, padding: 5, fontSize: 17}}>{item.first_name}</Text> */}

                                </TouchableOpacity>
                                )}
                                refreshControl={<RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._refresh}
                                colors={['#7bbe50','#188ee1']}
                                />}
                                numColumns={2}
                                keyExtractor={(item, index) => index}
                            />
                          </View>
                        </View>
                        ) : null
                      }
        </View>



        {/* <View style={{marginHorizontal: 9, marginVertical: 2, backgroundColor: 'white'}}>
          <View>
            <Text style={{paddingHorizontal: 8, textAlign: 'right', fontSize: 23, marginVertical: 10, color: '#000', fontWeight: '200'}}>الصور</Text>
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            {
              ["https://lyricss.cc/wp-content/uploads/2019/03/13508.jpg", "https://upload.3dlat.com/uploads/3dlat.net_31_15_2f89_images-1-.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWgmsnmP3gih5VK8fSXQF9lq7lDpRuRvUzhlbMdJtIRtjwGyVj", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfeM7G-4CKlz9mQVjTZlqE3oYRtk94iZjqYqo-jr-BvjwDGne6", "https://www.gheir.com/UserFiles/Blue.Glitter.Eye.shadow.Tutorial.Picture.jpg", "https://www.aljamila.com/sites/default/files/styles/ph2_1000_auto/public/2017/04/20/1090986-1036339479.file_494?itok=fDlfGYYM", "https://www.sayidaty.net/sites/default/files/styles/800x510/public/2016/11/09/4448581-678807047.jpg"].map((img) => {
                return (
                  <TouchableOpacity style={{alignItems: 'flex-start'}} key={img}>
                    <Image style={{height: 60, width: 60, margin: 4}} source={{uri: img}} />
                  </TouchableOpacity>
                  
                )
              })
            }
          </View>
        </View> */}




      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#eee'
  },
  child: {
    height: 155,
    width,
    justifyContent: 'center'
  },
  row: {
      flexDirection: 'row',
      justifyContent: 'center'
  },
  imageThumbnail: {
      width: '100%',
      height: 150,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
  }
})