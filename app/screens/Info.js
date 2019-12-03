import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, FlatList, Image, RefreshControl, ScrollView, StyleSheet, Dimensions, Platform } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

const { width } =   Dimensions.get('window');

const myFont = Platform.select({
  ios: {
    fontFamily: 'GESSTwoLight-Light',
  },
  android: {
    fontFamily: 'ArbFONTS-rabi3',
  },
})

export class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
}

render() {
  const { lang, strings } = this.props.language;
  const { home_tab } = strings;
  this.lang = lang;

  return (
    <View style={{flex: 1}}>
    <StatusBar backgroundColor="#000" barStyle="light-content"/>
      <ScrollView style={{flex: 1, padding: 12, backgroundColor: '#eee'}}>
      <View style={{flex: 1}}>
                <SwiperFlatList
                  autoplay
                  autoplayDelay={4}
                  autoplayLoop
                  index={0}
                  showPagination={false}
                  disableGesture
                >
                    <Image style={[styles.child, { backgroundColor: 'tomato' }]} source={{uri: 'http://www.asiaone.com/sites/default/files/original_images/Jul2019/040719_makeup_pixabay.jpg'}} />
                    <Image style={[styles.child, { backgroundColor: 'tomato' }]} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81g%2BSAgPJmL._SY355_.jpg'}} />
                    <Image style={[styles.child, { backgroundColor: 'tomato' }]} source={{uri: 'https://adwatak.com/wp-content/uploads/2018/10/%D9%81%D8%B1%D8%B4-%D9%85%D9%83%D9%8A%D8%A7%D8%AC.jpg'}} />
                    <Image style={[styles.child, { backgroundColor: 'tomato' }]} source={{uri: 'http://uggboots-outlet.co.uk/wp-content/uploads/2018/05/professional-makeup-tools-laying-together-PLBYXNM.jpg'}} />
                    <Image style={[styles.child, { backgroundColor: 'tomato' }]} source={{uri: 'https://www.afterglowcosmetics.com/lib/uploads/2017/11/Afterglow-BrushSet-2.jpg'}} />
                    <Image style={[styles.child, { backgroundColor: 'tomato' }]} source={{uri: 'https://timeincsecure-a.akamaihd.net/rtmp_uds/507936866/201905/1116/507936866_6036762227001_6036739951001-vs.jpg?pubId=507936866&videoId=6036739951001'}} />

                </SwiperFlatList>
        </View>

        <View>
          <Text style={{textAlign: 'justify', marginVertical: 16, fontSize: 17, ...myFont}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</Text>
        </View>

        <View>
          <Text style={{textAlign: 'justify', marginVertical: 16, fontSize: 17, ...myFont}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</Text>
        </View>

        <View>
          <Text style={{textAlign: 'justify', marginVertical: 16, fontSize: 17, ...myFont}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</Text>
        </View>

        {/* <View style={{marginTop: 12}}>
          <Image  source={{uri: 'https://static.makeuseof.com/wp-content/uploads/2015/12/youtube-player-670x335.jpg'}} style={{width: '100%', height: 300}} />
        </View> */}
        
      <View style={{width: '100%', padding: 7, backgroundColor: '#fff', marginVertical: 5, flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity style={{paddingLeft: 15}} onPress={() => {}}>
              <Icon name="logo-twitter" size={34} color="skyblue" />
            </TouchableOpacity>  
            <TouchableOpacity style={{paddingLeft: 15}} onPress={() => {}}>
              <Icon name="logo-facebook" size={34} color="steelblue" />
            </TouchableOpacity> 
            <TouchableOpacity style={{paddingLeft: 15}} onPress={() => {}}>
              <Icon name="md-at" size={34} color="red" />
            </TouchableOpacity> 
            <TouchableOpacity style={{paddingLeft: 15}} onPress={() => {}}>
              <Icon name="logo-instagram" size={34} color="purple" />
            </TouchableOpacity>   
            <TouchableOpacity style={{paddingLeft: 15}} onPress={() => {}}>
              <Icon name="md-call" size={34} color="green" />
            </TouchableOpacity>        
      </View>
      </ScrollView>
    </View>
  );
} // end of render()
}

const mapStateToProps = state => {
  const { language } = state;
  return { language };
}

const mapDispatchToProps = dispatch => {
return bindActionCreators({
  // changeToArabic,
  // changeToEnglish
}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)

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
  }
})