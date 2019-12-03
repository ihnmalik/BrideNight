import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'ar'
    };
  }

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#eee'}}>
      <StatusBar backgroundColor="#000" barStyle = 'light-content'/>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee', padding: 7}}>
          <View style={{width: '90%', padding: 7, backgroundColor: '#fff', marginVertical: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={{uri: 'http://empowerms.org/wp-content/uploads/2017/08/011Empower-Round.png'}} style={{width: 80, height: 80}}/>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{fontSize: 19, fontWeight: '100'}}>Miraz1994</Text>
              <Text style={{fontWeight: '100'}}>sam@oppercop.com</Text>
              <Text style={{fontSize: 12, fontWeight: '100', color: 'gray', marginTop: 10}}>
                  is simply dummy text of the printing and typesetting industry.
              </Text>
            </View>
          </View>

          <View style={{width: '90%', padding: 7, backgroundColor: '#fff', marginVertical: 5, flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'center', fontSize: 17, paddingBottom: 10, fontWeight: '100'}}>Followers</Text>
              <Text style={{textAlign: 'center', fontSize: 26, fontWeight: '100'}}>120</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', fontSize: 17, paddingBottom: 10, fontWeight: '100'}}>Followings</Text>
              <Text style={{textAlign: 'center', fontSize: 26, fontWeight: '100'}}>99</Text>
            </View>
          </View>

          <View style={{width: '90%', padding: 7, backgroundColor: '#fff'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 4}}>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>Name: </Text>
              </View>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>Miraz Ahmad</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 7}}>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>Subscription Type: </Text>
              </View>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>User</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 7}}>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>Mobile: </Text>
              </View>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>+966550343043</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 7}}>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>Country: </Text>
              </View>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>Saudi Arabia</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 7}}>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>City: </Text>
              </View>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>Riyadh</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 7}}>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>DOB: </Text>
              </View>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>1993</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 7}}>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>Website: </Text>
              </View>
              <View style={{flex: 1}}>
                 <Text style={{textAlign: 'center', fontWeight: '100'}}>minimal.com</Text>
              </View>
            </View>
          </View>


          <View style={{width: '90%', padding: 7, marginVertical: 5, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text style={{color: '#000', textAlign: 'center', fontWeight: '200'}}>10:00 AM - 00:00 AM (Sat - Thurs)</Text>
    
              <Text style={{color: '#000', textAlign: 'center', fontWeight: '200'}}>أوقات العمل</Text>
          </View>

          <View style={{width: '90%', padding: 7, marginVertical: 5, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{justifyContent: 'center'}}>
                <Text style={{color: '#000', textAlign: 'center', fontWeight: '200'}}>Subscription Expires in: </Text>
              </View>
              <View>
                 <Text style={{color: '#000', textAlign: 'center', fontWeight: '200'}}>20-10-2020</Text>
                 <TouchableOpacity style={{padding: 5, backgroundColor: '#000', marginVertical: 4}} onPress={() => this.props.navigation.navigate('AccountRenew')}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>Renew Now</Text>
                 </TouchableOpacity>
              </View>
          </View>

        <View style={{width: '90%', padding: 7, margin: 7, backgroundColor: 'white'}}>
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
        </View>

        <View style={{width: '90%', padding: 7, margin: 7, backgroundColor: 'white'}}>
          <View>
            <Text style={{paddingHorizontal: 8, textAlign: 'right', fontSize: 23, marginVertical: 10, color: '#000', fontWeight: '200'}}>الفيديوهات</Text>
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            {
              ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRedQ7WaH6-HxNfLKtXRUl0J8Hq2QyHuf0jYwpRh2fpOc_COf4j", "https://m.layalina.com/site-images/sites/default/files/prod/video/3/d/235036/b6f8dbd836bcf8c22cdec1404ca8432db3e6965e-010217103802.JPG?preset=article-main-img&save-png=1&rnd=1.1.0", "https://www.socialarabi.com/wp-content/uploads/2019/02/we-5.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSepldtAE0lbd7L_mu4Ll04-ba7ztR4gPqoDQKc2jw-cxDQ0-ZT", "https://almraah.net/uploads/07-2013/135449_mn66com.gif"].map((img) => {
                return (
                  <TouchableOpacity style={{alignItems: 'flex-start'}} key={img}>
                    <Image style={{height: 60, width: 60, margin: 4}} source={{uri: img}} />
                  </TouchableOpacity>
                  
                )
              })
            }
          </View>
        </View>

          <View style={{width: '90%', padding: 7, backgroundColor: '#fff', marginVertical: 5, flexDirection: 'row', justifyContent: 'space-around'}}>
            
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

          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
})