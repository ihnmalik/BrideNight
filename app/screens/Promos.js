import React, { Component } from 'react';
import { View, Text, TouchableOpacity,ScrollView, StatusBar, FlatList, Image, RefreshControl, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SegmentedControlTab from 'react-native-segmented-control-tab';

    // green:    #7bbe50,
    // blue:  #188ee1,

    const InboxOrders = [{
      "id": 1,
      "first_name": "InboxOrder 1",
      "last_name": "Jovovic",
      "following": true,
      "email": "djovovic0@nyu.edu",
      "image_url": "https://www.promotions-ar.com/wp-content/uploads/2019/09/69393085_2444227178999383_7933773158081888256_n-1-390x220.jpg"
    }, {
      "id": 2,
      "first_name": "InboxOrder 2",
      "last_name": "Fernely",
      "following": true,
      "email": "sfernely1@lulu.com",
      "image_url": "https://www.iau.edu.sa/sites/default/files/styles/landscape_8x3/public/hero/slider-02.png?itok=_hB3WNay"
    }, {
      "id": 3,
      "first_name": "InboxOrder 3",
      "last_name": "McCudden",
      "following": true,
      "email": "bmccudden2@google.ca",
      "image_url": "https://www.klma.org/wp-content/uploads/2019/08/%D8%B9%D8%B1%D9%88%D8%B6-%D8%A7%D9%84-Crazy-SALE-%D9%85%D9%86-%D9%83%D8%A7%D8%B1%D9%81%D9%88%D8%B1.png"
    }, {
      "id": 4,
      "first_name": "InboxOrder 4",
      "last_name": "Yair",
      "following": false,
      "email": "myair3@posterous.com",
      "image_url": "https://d79rk766nhswo.cloudfront.net/media//block_images/hot-deals-ar.jpg"
    }, {
      "id": 5,
      "first_name": "InboxOrder 5",
      "last_name": "Adlam",
      "following": true,
      "email": "jadlam4@blog.com",
      "image_url": "http://www.awladragab.com/Download/Promotion/img_1151_ar.jpg"
    }, {
      "id": 6,
      "first_name": "InboxOrder 6",
      "last_name": "MacCarlich",
      "following": false,
      "email": "mmaccarlich5@blogspot.com",
      "image_url": "https://www.almrsal.com/wp-content/uploads/2018/11/%D8%B9%D8%B1%D9%88%D8%B6-%D8%AA%D9%88%D9%8A%D9%88%D8%AA%D8%A7-2018.jpg"
    }, {
      "id": 7,
      "first_name": "InboxOrder 7",
      "last_name": "Massot",
      "following": false,
      "email": "pmassot6@dyndns.org",
      "image_url": "https://www.saudi-promotion.com/wp-content/uploads/2019/05/mazda-saudi-825x510.jpg"
    }, {
      "id": 8,
      "first_name": "InboxOrder 8",
      "last_name": "Hungerford",
      "following": false,
      "email": "dhungerford7@cargocollective.com",
      "image_url": "http://3orodmisr.com/wp-content/uploads/2019/10/Image-Market-offers-2019-16.jpg"
    }, {
      "id": 9,
      "first_name": "InboxOrder 9",
      "last_name": "Goldes",
      "following": true,
      "email": "fgoldes8@google.com.hk",
      "image_url": "http://whitefridaydiscounts.com/wp-content/uploads/2017/10/%D8%B9%D8%B1%D9%88%D8%B6-%D8%A7%D9%84%D8%AC%D9%85%D8%B9%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-2017-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9.jpg"
    }, {
      "id": 10,
      "first_name": "InboxOrder 10",
      "last_name": "Sole",
      "following": true,
      "email": "psole9@blogs.com",
      "image_url": "https://www.almadar.ly/ar/PublishingImages/Lists/Special%20Offers/AllItems/ramadan-internet-offer20gb.jpg"
    }, {
      "id": 11,
      "first_name": "InboxOrder 11",
      "last_name": "Polglaze",
      "following": false,
      "email": "lpolglazea@kickstarter.com",
      "image_url": "https://images.netdirector.co.uk/gforces-auto/image/upload/w_1024,h_576,q_auto:best,c_fill,f_auto,fl_lossy/auto-client/1cf61d11325be606c6e83928ee827d36/aac_cadillac_acdelco_parts_liquidation_web_bpd_1880x627_ar.jpg"
    }, {
      "id": 12,
      "first_name": "InboxOrder 12",
      "last_name": "Ambrodi",
      "following": true,
      "email": "gambrodib@dion.ne.jp",
      "image_url": "https://trippati.com/wp-content/uploads/2019/02/turkey-honeymoon-offers.jpg"
    }];

    const OutboxOrders = [{
      "id": 1,
      "first_name": "OutboxOrder 1",
      "last_name": "Jovovic",
      "following": true,
      "email": "djovovic0@nyu.edu",
      "image_url": "https://media.extra.com/i/aurora/LGbig-1x2-Home-Top_ar?w=1600"
    }, {
      "id": 2,
      "first_name": "OutboxOrder 2",
      "last_name": "Fernely",
      "following": false,
      "email": "sfernely1@lulu.com",
      "image_url": "https://m.eyeofriyadh.com/news_images/2019/06/571a479014c.jpg"
    }, {
      "id": 3,
      "first_name": "OutboxOrder 3",
      "last_name": "McCudden",
      "following": false,
      "email": "bmccudden2@google.ca",
      "image_url": "https://i2.wp.com/www.3rod.nl/wp-content/uploads/2018/08/LBNL-29-Home-carousel-02c.jpg?zoom=2.625&fit=1200%2C435&ssl=1&resize=155%2C89"
    }, {
      "id": 4,
      "first_name": "OutboxOrder 4",
      "last_name": "Yair",
      "following": false,
      "email": "myair3@posterous.com",
      "image_url": "https://pta.gov.sa/assets/images/iconapp.png"
    }, {
      "id": 5,
      "first_name": "OutboxOrder 5",
      "last_name": "Adlam",
      "following": true,
      "email": "jadlam4@blog.com",
      "image_url": "https://portal.bu.edu.sa/image/journal/article?img_id=47506091&t=1556005405981"
    }, {
      "id": 6,
      "first_name": "OutboxOrder 6",
      "last_name": "MacCarlich",
      "following": true,
      "email": "mmaccarlich5@blogspot.com",
      "image_url": "https://www.mof.gov.sa/generalservcies/importantlinks/DocLib/new/Ministries/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D9%86%D9%82%D9%84.png"
    }, {
      "id": 7,
      "first_name": "OutboxOrder 7",
      "last_name": "Massot",
      "following": true,
      "email": "pmassot6@dyndns.org",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwVFv2KuEEhTwhFs-I8ZuZt7KU2ZNTjM9EA7-8DXnOe3ySSTXfA"
    }, {
      "id": 8,
      "first_name": "OutboxOrder 8",
      "last_name": "Hungerford",
      "following": true,
      "email": "dhungerford7@cargocollective.com",
      "image_url": "https://s3-eu-west-1.amazonaws.com/content.argaamnews.com/9d5fdbc4-5aa0-46bf-a8a9-c7fcb17ebec4.jpg"
    }, {
      "id": 9,
      "first_name": "OutboxOrder 9",
      "last_name": "Goldes",
      "following": false,
      "email": "fgoldes8@google.com.hk",
      "image_url": "https://cdn.sabq.org/uploads/media-cache/resize_800_relative/uploads/material-file/5b54720f51a773b72d6ea060/5b54720858058.jpg"
    }, {
      "id": 10,
      "first_name": "OutboxOrder 10",
      "last_name": "Sole",
      "following": false,
      "email": "psole9@blogs.com",
      "image_url": "https://pbs.twimg.com/profile_images/1026770106100146181/tvLOXUQV_400x400.jpg"
    }, {
      "id": 11,
      "first_name": "OutboxOrder 11",
      "last_name": "Polglaze",
      "following": false,
      "email": "lpolglazea@kickstarter.com",
      "image_url": "https://pbs.twimg.com/profile_images/912002658290077701/0eY_jBQX_400x400.jpg"
    }, {
      "id": 12,
      "first_name": "OutboxOrder 12",
      "last_name": "Ambrodi",
      "following": true,
      "email": "gambrodib@dion.ne.jp",
      "image_url": "https://www.badir.com.sa/sites/default/files/styles/thumbnail_news_100_100_/public/2019-04/%D8%B4%D8%B9%D8%A7%D8%B1%20%D8%A8%D8%A7%D8%AF%D8%B1-02_0.png?itok=TytqO9sq"
    }];
export class Promos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: InboxOrders,
      pageIndex: 5,
      lang: 'ar',
      selectedIndex: 0,
      refreshing: false
    };
  } // end of constructor

  handleIndexChange = (index) => {
    this.setState({selectedIndex: index, users: index == 0 ? InboxOrders : OutboxOrders});
  } // handleIndexChange

  componentDidMount() {

    // this.setState({users: this.state.users.filter((item) => item.id <= this.state.pageIndex)})
  }

  _keyExtractor = (item, index) => item.id.toString();
  _renderItem = ({item}) => {
    if(this.state.lang == 'ar') {
      return (
        <View key={item.id} style={{ padding: 3, width: '100%', borderBottomWidth: 1, borderBottomColor: '#eee'}}>
          <TouchableOpacity activeOpacity={.8} style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}} onPress={() => this.props.navigation.navigate('MyOrderDetail')}>  
            <View style={{flex: 1}}>
              <Image
                source={{uri: item.image_url}} 
                style={{height: 120, width: '100%'}}
              />
            </View>
          </TouchableOpacity>
        </View>
      )
    }else {
      return (
        <View key={item.id} style={{ padding: 3, width: '100%', borderBottomWidth: 1, borderBottomColor: '#eee'}}>
          <TouchableOpacity activeOpacity={.8} style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}} onPress={() => this.props.navigation.navigate('MyOrderDetail')}>  
            <View style={{flex: 1}}>
              <Image
                source={{uri: item.image_url}} 
                style={{height: 120, width: '100%'}}
              />
            </View>
          </TouchableOpacity>
        </View>
      )
    }

  } // end of renderItem()
  _refresh = () => {
    this.setState({refreshing: true});
    this.setState({pageIndex: this.state.pageIndex += 5, users: this.state.users.filter((item) => item.id <= this.state.pageIndex), refreshing: false})
}

  // InboxOrders = () => {
  //   const { lang, strings } = this.props.language;
  //   if(this.state.selectedIndex == 0) {
  //     if(lang == 'ar') {
  //       return (
  //         <View>
  //           <Text></Text>
  //         </View>
  //       )
  //     }else {
  //       return (
  //         <View>
            
  //         </View>
  //       )
  //     }
  //   }
  // }



  render() {
    const { lang, strings } = this.props.language;
    const { home_tab } = strings;
    this.lang = lang;

    return (
      <View style={{flex: 1}}>
      <StatusBar backgroundColor="#000"/>

        <FlatList
            style={{flex: 1}}
            data={this.state.users}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            refreshControl={<RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._refresh}
                colors={['#7bbe50','#188ee1']}
              />}
          />
                      
      </View>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Promos)