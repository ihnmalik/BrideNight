import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, StyleSheet, FlatList, Platform, RefreshControl, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Rating } from 'react-native-ratings';

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
  "first_name": "مكياج 1",
  "last_name": "Jovovic",
  "email": "djovovic0@nyu.edu",
  "image_url": "https://babyy.cc/wp-content/uploads/2018/07/1955.jpg"
}, {
  "id": 2,
  "first_name": "مكياج 2",
  "last_name": "Fernely",
  "email": "sfernely1@lulu.com",
  "image_url": "https://girab7wa.com/wp-content/uploads/2018/11/%D8%B5%D9%88%D8%B1-%D8%A3%D8%AD%D8%AF%D8%AB-%D9%85%D9%83%D9%8A%D8%A7%D8%AC-%D9%84%D9%84%D8%B9%D9%8A%D9%88%D9%86-2019-%D9%86%D8%B5%D8%A7%D8%A6%D8%AD-%D9%84%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D9%85%D9%83%D9%8A%D8%A7%D8%AC-%D8%A7%D9%84%D8%B9%D9%8A%D9%88%D9%86-10-780x405.jpg"
}, {
  "id": 3,
  "first_name": "مكياج 4",
  "last_name": "McCudden",
  "email": "bmccudden2@google.ca",
  "image_url": "http://alarznews.com/wp-content/uploads/2019/02/hqdefault-1.jpg"
}, {
  "id": 4,
  "first_name": "مكياج 5",
  "last_name": "Yair",
  "email": "myair3@posterous.com",
  "image_url": "https://www.asraralmakyaj.com/-/media/Project/asraralmakyaj/asraralmakyajAR/asraralmakyajAR/Website/Articles/2018/Articles/Eye-Makeup/Smokey-eyes-makeup-with-varying-degrees-of-Spring-Beauty-11-Asraralmakyaj.jpg"
}, {
  "id": 5,
  "first_name": "مكياج 6",
  "last_name": "Adlam",
  "email": "jadlam4@blog.com",
  "image_url": "https://www.asraralmakyaj.com/-/media/Project/asraralmakyaj/asraralmakyajAR/asraralmakyajAR/Website/Articles/AAM-all-Old-Images/NewArticleImages/156.jpg?la=ar-AE&hash=DF9E912BD4DF17707FCB687D8B5079DE7D7AEF7F"
}, {
  "id": 6,
  "first_name": "مكياج 7",
  "last_name": "MacCarlich",
  "email": "mmaccarlich5@blogspot.com",
  "image_url": "http://2.bp.blogspot.com/-6JUTKaYtJg0/UWFivwPCNbI/AAAAAAAAAvg/pob3bB5ExfI/s640/color+eye+shadow+(5).png"
}];

export default class ServicesUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle='light-content'/>
              {/* <View>
                <ScrollView pagingEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true} style={{width: '100%', alignSelf: 'center', backgroundColor: '#fff'}}>
                  {
                    tabs.map((tab) => {
                      return (
                        <TouchableOpacity onPress={() => this._setActive(tab.index)} activeOpacity={.8} key={tab.index} style={{backgroundColor: '#000', width: Dimensions.get('window').width / 3, justifyContent: 'center', alignItems: 'center', height: 40, borderBottomWidth: this.state.activeIndex == tab.index ? 4 : 0, borderBottomColor: '#eee'}}>
                            <Text style={{color: this.state.activeIndex == tab.index ? '#eee' : '#fff'}}>{tab.title}</Text>
                        </TouchableOpacity>
                      )
                    })
                  }
                </ScrollView>
              </View> */}


          <ScrollView horizontal style={{flex:1, alignSelf: 'center', direction: 'rtl', backgroundColor: '#fff', paddingTop: 7}} showsHorizontalScrollIndicator={false}>
             <TouchableOpacity style={{padding: 5, margin: 5, backgroundColor: '#000'}}>
                <Text style={{...myFont, color: 'white'}}>الكل</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 5, margin: 5, backgroundColor: '#eee'}}>
                <Text style={{...myFont, color: 'gray'}}>المدينة</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={{padding: 10, margin: 10, backgroundColor: '#fff'}}>
                <Text style={{...myFont, color: 'gray'}}>السعر</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={{padding: 5, margin: 5, backgroundColor: '#eee'}}>
                <Text style={{...myFont, color: 'gray'}}>أوقات العمل</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={{padding: 10, margin: 10, backgroundColor: '#fff'}}>
                <Text style={{...myFont, color: 'gray'}}>التقييم</Text>
              </TouchableOpacity> */}
          </ScrollView>
          <View style={{flex: 1}}>

              <FlatList
                  data={this.state.users}
                  style={{flex: 1}}
                  renderItem={({ item }, i) => (
                  <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ServiceUserDetail', {item: item})} style={{ flex: 1, padding: 1, alignItems: 'center', backgroundColor: '#fff', flexDirection: 'column', marginBottom: 2 }}>
                      
                        <Image style={styles.imageThumbnail} resizeMode="stretch" source={{ uri: item.image_url }} />
                        <Rating
                          type='star'
                          startingValue={3.5}
                          ratingCount={5}
                          fractions={2}
                          readonly={true}
                          imageSize={12}
                          tintColor="#fff"
                          style={{paddingHorizontal: 2}}
                        />

                        <Text style={{textAlign: 'center', ...myFont, padding: 2, fontSize: 16}}>{item.first_name}</Text>
                        <Text style={{textAlign: 'center', padding: 2, fontSize: 14, color: '#DC143C'}}>SAR 130</Text>
                        
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff'
  },
  row: {
      flexDirection: 'row',
      justifyContent: 'center'
  },
  imageThumbnail: {
      width: '85%',
      height: 140,
      borderRadius: 8,
      marginVertical: 10
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
