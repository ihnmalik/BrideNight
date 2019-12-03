import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, StyleSheet, FlatList, Platform, RefreshControl,  Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SwiperFlatList from 'react-native-swiper-flatlist';

const { height, width } =   Dimensions.get('window');
const myFont = Platform.select({
  ios: {
    fontFamily: 'GESSTwoLight-Light',
  },
  android: {
    fontFamily: 'ArbFONTS-rabi3',
  },
})

const users = [{
  "id": 1,
  "first_name": "Ninjas",
  "last_name": "Jovovic",
  "email": "djovovic0@nyu.edu",
  "image_url": "http://www.hoshinoresorts-magazine.com/wp-content/uploads/2019/03/ninja-training.jpg"
}, {
  "id": 2,
  "first_name": "Comedians",
  "last_name": "Fernely",
  "email": "sfernely1@lulu.com",
  "image_url": "https://brisbanepowerhouse.org/wp-content/uploads/2016/11/2017_BCF_WebsiteImage-3-1178x663.jpeg"
}, {
  "id": 3,
  "first_name": "Action",
  "last_name": "McCudden",
  "email": "bmccudden2@google.ca",
  "image_url": "http://www.thealcoholicentrepreneur.com/wp-content/uploads/2017/03/action.jpg"
}, {
  "id": 4,
  "first_name": "Thriller",
  "last_name": "Yair",
  "email": "myair3@posterous.com",
  "image_url": "https://i.ytimg.com/vi/nh6qadskPXw/maxresdefault.jpg"
}, {
  "id": 5,
  "first_name": "Drama",
  "last_name": "Adlam",
  "email": "jadlam4@blog.com",
  "image_url": "https://netstorage-legit.akamaized.net/images/78cfa61df97e907c.jpg"
}, {
  "id": 6,
  "first_name": "Series",
  "last_name": "MacCarlich",
  "email": "mmaccarlich5@blogspot.com",
  "image_url": "http://cdn.collider.com/wp-content/uploads/2017/10/jack-ryan-tv-series-john-krasinski.jpg"
}];

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
      
    };
  }
/*
{
        "id": 1,
        "first_name": "مكياج 1",
        "last_name": "Jovovic",
        "email": "djovovic0@nyu.edu",
        "image_url": "https://girab7wa.com/wp-content/uploads/2018/11/%D8%B5%D9%88%D8%B1-%D8%A3%D8%AD%D8%AF%D8%AB-%D9%85%D9%83%D9%8A%D8%A7%D8%AC-%D9%84%D9%84%D8%B9%D9%8A%D9%88%D9%86-2019-%D9%86%D8%B5%D8%A7%D8%A6%D8%AD-%D9%84%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D9%85%D9%83%D9%8A%D8%A7%D8%AC-%D8%A7%D9%84%D8%B9%D9%8A%D9%88%D9%86-10-780x405.jpg"
      }, {
        "id": 2,
        "first_name": "مكياج 2",
        "last_name": "Fernely",
        "email": "sfernely1@lulu.com",
        "image_url": "https://adwatak.com/wp-content/uploads/2018/10/%D9%81%D8%B1%D8%B4-%D9%85%D9%83%D9%8A%D8%A7%D8%AC.jpg"
      }, {
        "id": 3,
        "first_name": "مكياج 3",
        "last_name": "McCudden",
        "email": "bmccudden2@google.ca",
        "image_url": "https://babyy.cc/wp-content/uploads/2018/07/1955.jpg"
      }, {
        "id": 4,
        "first_name": "مكياج 4",
        "last_name": "Yair",
        "email": "myair3@posterous.com",
        "image_url": "https://wordss.cc/wp-content/uploads/2018/07/3807.jpg"
      }
*/
  componentDidMount(){
    
  }


  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle='light-content'/>
          <ScrollView>
              <View style={{flex: 1}}>
                <SwiperFlatList
                  autoplay
                  autoplayDelay={4}
                  autoplayLoop
                  index={0}
                  showPagination
                >
                    <Image style={[styles.child, { backgroundColor: 'tomato' }]} source={{uri: 'https://girab7wa.com/wp-content/uploads/2018/11/%D8%B5%D9%88%D8%B1-%D8%A3%D8%AD%D8%AF%D8%AB-%D9%85%D9%83%D9%8A%D8%A7%D8%AC-%D9%84%D9%84%D8%B9%D9%8A%D9%88%D9%86-2019-%D9%86%D8%B5%D8%A7%D8%A6%D8%AD-%D9%84%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D9%85%D9%83%D9%8A%D8%A7%D8%AC-%D8%A7%D9%84%D8%B9%D9%8A%D9%88%D9%86-10-780x405.jpg'}} />
                    <Image style={[styles.child, { backgroundColor: 'tomato' }]} source={{uri: 'https://girab7wa.com/wp-content/uploads/2018/11/%D8%B5%D9%88%D8%B1-%D8%A3%D8%AD%D8%AF%D8%AB-%D9%85%D9%83%D9%8A%D8%A7%D8%AC-%D9%84%D9%84%D8%B9%D9%8A%D9%88%D9%86-2019-%D9%86%D8%B5%D8%A7%D8%A6%D8%AD-%D9%84%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D9%85%D9%83%D9%8A%D8%A7%D8%AC-%D8%A7%D9%84%D8%B9%D9%8A%D9%88%D9%86-10-780x405.jpg'}} />
                    <Image style={[styles.child, { backgroundColor: 'tomato' }]} source={{uri: 'https://adwatak.com/wp-content/uploads/2018/10/%D9%81%D8%B1%D8%B4-%D9%85%D9%83%D9%8A%D8%A7%D8%AC.jpg'}} />
                    <Image style={[styles.child, { backgroundColor: 'tomato' }]} source={{uri: 'https://adwatak.com/wp-content/uploads/2018/10/%D9%81%D8%B1%D8%B4-%D9%85%D9%83%D9%8A%D8%A7%D8%AC.jpg'}} />
                    <Image style={[styles.child, { backgroundColor: 'tomato' }]} source={{uri: 'https://babyy.cc/wp-content/uploads/2018/07/1955.jpg'}} />
                    <Image style={[styles.child, { backgroundColor: 'tomato' }]} source={{uri: 'https://babyy.cc/wp-content/uploads/2018/07/1955.jpg'}} />

                </SwiperFlatList>
              </View>

              <View style={{flex: 3}}>
                <View style={{borderBottomWidth: 1, borderTopWidth: 1, borderTopColor: '#eee' , borderBottomColor: '#eee', paddingTop: 30, marginBottom: 15}}>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', direction: 'rtl', paddingBottom: 15, paddingHorizontal: 13}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', ...myFont}}>
                      المكياج
                    </Text>   

                    <TouchableOpacity>
                      <Text style={{color: 'gray', fontSize: 16, ...myFont}}>
                          عرض الكل
                      </Text>
                    </TouchableOpacity>                  
                  </View>

                  <ScrollView horizontal style={{direction: 'rtl', alignSelf: 'center', marginHorizontal: 5}} showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ServicesUsers')} style={{ width: 120, height: 155, borderRadius: 10, backgroundColor: '#fff', flexDirection: 'column', marginHorizontal: 3}}>
                          
                          <Image style={styles.imageThumbnail}  resizeMode="stretch" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyP0LxksZLjOPvVBt7k7qE1Om8tpGng_j1Uc4Z5nY5Nt5up75' }} />
                          <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center', ...myFont, marginVertical: 10, fontSize: 13, flexWrap: 'wrap'}}>مكياج 1 idsuhfuids fdkgjnda</Text>
                            {/* <Text style={{textAlign: 'center', color: 'gray', fontSize: 11, fontWeight: 'bold'}}>Subscriber 120</Text>        */}
                          </View>

                    </TouchableOpacity>

                      <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ServicesUsers')} style={{ width: 120, height: 155, borderRadius: 10, backgroundColor: '#fff', flexDirection: 'column', marginHorizontal: 3}}>
                          
                          <Image style={styles.imageThumbnail}  resizeMode="stretch" source={{ uri: 'https://kisss.cc/wp-content/uploads/2018/06/5261-2.jpg' }} />
                          <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center', ...myFont, marginVertical: 10, fontSize: 13, flexWrap: 'wrap'}}>مكياج 2</Text>
                            {/* <Text style={{textAlign: 'center', color: 'gray', fontSize: 11, fontWeight: 'bold'}}>Subscriber 120</Text>        */}
                          </View>

                    </TouchableOpacity>

                      <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ServicesUsers')} style={{ width: 120, height: 155, borderRadius: 10, backgroundColor: '#fff', flexDirection: 'column', marginHorizontal: 3}}>
                          
                            <Image style={styles.imageThumbnail}  resizeMode="stretch" source={{ uri: 'https://hoouri.com/blog/wp-content/uploads/2019/02/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D9%85%D9%83%D9%8A%D8%A7%D8%AC-%D8%B3%D9%87%D9%84%D8%A9.jpg' }} />
                            <View style={{flex: 1,}}>
                              <Text style={{textAlign: 'center', ...myFont, marginVertical: 10, fontSize: 13, flexWrap: 'wrap'}}>مكياج 3</Text>
                              {/* <Text style={{textAlign: 'center', color: 'gray', fontSize: 11, fontWeight: 'bold'}}>Subscriber 120</Text>        */}
                            </View>

                      </TouchableOpacity>
                  </ScrollView>
                </View>


                <View style={{borderBottomWidth: 1, borderTopWidth: 1, borderTopColor: '#eee' , borderBottomColor: '#eee', paddingTop: 30, marginBottom: 15}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', direction: 'rtl', paddingBottom: 15, paddingHorizontal: 13}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', ...myFont}}>
                      تسريحات
                    </Text>   

                    <TouchableOpacity>
                      <Text style={{color: 'gray', fontSize: 16, ...myFont}}>
                          عرض الكل
                      </Text>
                    </TouchableOpacity>                  
                </View>


                  <ScrollView horizontal style={{direction: 'rtl', alignSelf: 'center', marginHorizontal: 5}} showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ServicesUsers')} style={{ width: 120, height: 155, borderRadius: 10, backgroundColor: '#fff', flexDirection: 'column', marginHorizontal: 3}}>
                          
                          <Image style={styles.imageThumbnail}  resizeMode="stretch" source={{ uri: 'https://eveningg.cc/wp-content/uploads/2018/12/1697.jpg' }} />
                          <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center', ...myFont, marginVertical: 10, fontSize: 13, flexWrap: 'wrap'}}>تسريحة 1</Text>
                            {/* <Text style={{textAlign: 'center', color: 'gray', fontSize: 11, fontWeight: 'bold'}}>Subscriber 120</Text>        */}
                          </View>

                    </TouchableOpacity>

                      <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ServicesUsers')} style={{ width: 120, height: 155, borderRadius: 10, backgroundColor: '#fff', flexDirection: 'column', marginHorizontal: 3}}>
                          
                          <Image style={styles.imageThumbnail}  resizeMode="stretch" source={{ uri: 'https://www.sayidaty.net/sites/default/files/styles/800x510/public/2018/10/05/4240041-1349038633.jpg' }} />
                          <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center', ...myFont, marginVertical: 10, fontSize: 13, flexWrap: 'wrap'}}>تسريحة 2</Text>
                            {/* <Text style={{textAlign: 'center', color: 'gray', fontSize: 11, fontWeight: 'bold'}}>Subscriber 120</Text>        */}
                          </View>

                    </TouchableOpacity>

                      <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ServicesUsers')} style={{ width: 120, height: 155, borderRadius: 10, backgroundColor: '#fff', flexDirection: 'column', marginHorizontal: 3}}>
                          
                            <Image style={styles.imageThumbnail}  resizeMode="stretch" source={{ uri: 'https://i.pinimg.com/originals/b1/41/61/b141618dae3cd35e68a5d954fd52580c.jpg' }} />
                            <View style={{flex: 1,}}>
                              <Text style={{textAlign: 'center', ...myFont, marginVertical: 10, fontSize: 13, flexWrap: 'wrap'}}>تسريحة 3</Text>
                              {/* <Text style={{textAlign: 'center', color: 'gray', fontSize: 11, fontWeight: 'bold'}}>Subscriber 120</Text>        */}
                            </View>

                      </TouchableOpacity>
                  </ScrollView>
                </View>

              <View style={{borderBottomWidth: 1, borderTopWidth: 1, borderTopColor: '#eee' , borderBottomColor: '#eee', paddingTop: 30, marginBottom: 15}}>
                <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'space-between', direction: 'rtl', paddingBottom: 15, paddingHorizontal: 13}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', ...myFont}}>
                      فساتين
                    </Text>   

                    <TouchableOpacity>
                      <Text style={{color: 'gray', fontSize: 16, ...myFont}}>
                          عرض الكل
                      </Text>
                    </TouchableOpacity>                  
                  </View>

                  <ScrollView horizontal style={{direction: 'rtl', alignSelf: 'center', marginHorizontal: 5}} showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ServicesUsers')} style={{ width: 120, height: 155, borderRadius: 10, backgroundColor: '#fff', flexDirection: 'column', marginHorizontal: 3}}>
                          
                          <Image style={styles.imageThumbnail}  resizeMode="stretch" source={{ uri: 'https://www.mashahir.net/wp-content/uploads/2017/08/%D9%81%D8%B3%D8%A7%D8%AA%D9%8A%D9%86-%D8%B2%D9%81%D8%A7%D9%81-%D9%81%D8%AE%D9%85%D8%A9.jpg' }} />
                          <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center', ...myFont, marginVertical: 10, fontSize: 13, flexWrap: 'wrap'}}>فستان 1</Text>
                            {/* <Text style={{textAlign: 'center', color: 'gray', fontSize: 11, fontWeight: 'bold'}}>Subscriber 120</Text>        */}
                          </View>

                    </TouchableOpacity>

                      <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ServicesUsers')} style={{ width: 120, height: 155, borderRadius: 10, backgroundColor: '#fff', flexDirection: 'column', marginHorizontal: 3}}>
                          
                          <Image style={styles.imageThumbnail}  resizeMode="stretch" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZDc8iCQ5skKx7fpEJE8MaqRoDXGJ9a_jjt-3c9_FmXo_W4zp' }} />
                          <View style={{flex: 1}}>
                            <Text style={{textAlign: 'center', ...myFont, marginVertical: 10, fontSize: 13, flexWrap: 'wrap'}}>فستان 2</Text>
                            {/* <Text style={{textAlign: 'center', color: 'gray', fontSize: 11, fontWeight: 'bold'}}>Subscriber 120</Text>        */}
                          </View>

                    </TouchableOpacity>

                      <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ServicesUsers')} style={{ width: 120, height: 155, borderRadius: 10, backgroundColor: '#fff', flexDirection: 'column', marginHorizontal: 3}}>
                          
                            <Image style={styles.imageThumbnail}  resizeMode="stretch" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFetEj-GUm4GTSNLsX-00X-n1NfAr_nwAgjDO1kJQI2zC_1bOl' }} />
                            <View style={{flex: 1,}}>
                              <Text style={{textAlign: 'center', ...myFont, marginVertical: 10, fontSize: 13, flexWrap: 'wrap'}}>فستان 3</Text>
                              {/* <Text style={{textAlign: 'center', color: 'gray', fontSize: 11, fontWeight: 'bold'}}>Subscriber 120</Text>        */}
                            </View>

                      </TouchableOpacity>
                  </ScrollView>
                </View>
                
              {/* <FlatList
                  data={this.state.users}
                  style={{flex: 3,padding: Platform.OS == 'ios' ? 9 : 0 }}
                  renderItem={({ item }, i) => (
                  <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ServicesUsers', {item: item})} style={{ flex: 1, borderRadius: 10, alignItems: 'center', backgroundColor: '#fff', flexDirection: 'column',  margin: 4 , shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.66,
                  marginBottom: 14,
                  elevation: 3}}>
                      
                        <Image style={styles.imageThumbnail} resizeMode="contain" source={{ uri: item.image_url }} />
                        <Text style={{textAlign: 'center', ...myFont, padding: 10}}>{item.first_name}</Text>


                      <View style={{flexDirection: 'row',paddingVertical: 10, justifyContent: 'space-evenly', alignItems: 'center', alignSelf: 'flex-start'}}>
                          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                              <Text style={{textAlign: 'center', color: 'gray', fontSize: 11, fontWeight: 'bold'}}>
                                 121 Subscriber
                              </Text>               
                          </View>
                      </View>
                  </TouchableOpacity>
                  )}
                  refreshControl={<RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._refresh}
                  colors={['#7bbe50','#188ee1']}
                  />}
                  numColumns={2}
                  keyExtractor={(item, index) => index}
              /> */}
            </View>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff'
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
      height: 100,
      borderRadius: 7,
      alignSelf: 'center'
  },
  cubeL: {
      width: 170,
      height: 170,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomRightRadius: 25,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: '#1B83CD',
  },
  cubeR: {
      width: 170,
      height: 170,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 25,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: '#1B83CD'
  }
})
