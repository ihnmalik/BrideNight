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
    }];

    const OutboxOrders = [{
      "id": 1,
      "first_name": "OutboxOrder 1",
      "last_name": "Jovovic",
      "following": true,
      "email": "djovovic0@nyu.edu",
      "image_url": "https://www.print.sa/dist/img/icon/og/printdotsa_og.png"
    }, {
      "id": 2,
      "first_name": "OutboxOrder 2",
      "last_name": "Fernely",
      "following": false,
      "email": "sfernely1@lulu.com",
      "image_url": "http://www.pension.gov.sa/MediaCenter/PublishingImages/PPALogo1.jpg"
    }, {
      "id": 3,
      "first_name": "OutboxOrder 3",
      "last_name": "McCudden",
      "following": false,
      "email": "bmccudden2@google.ca",
      "image_url": "https://media.licdn.com/dms/image/C4E0BAQHrew0jJ7zkfg/company-logo_200_200/0?e=2159024400&v=beta&t=5DyVBZM1i7f_bESPFNuos7_EH8MQfzbp63_Cb-L8Z30"
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
export class MyOrders extends Component {
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
            <View style={{flex: 1, alignItems: 'flex-end', padding: 8}}>
              <Text style={{fontSize: 17}}>{item.first_name}</Text>
              

              <Text style={{fontSize: 13, marginTop:5, fontWeight: '200'}}>12/10/2019</Text>
              <Text style={{fontSize: 13, marginTop:5, fontWeight: '200'}}>Order No. #12100</Text>
              <Text style={{fontSize: 16, color: 'red'}}>100 SAR</Text>
              <Text style={{fontSize: 12, marginTop:5, textAlign: 'left', color: 'green'}}>Active</Text>
            </View>
  
            <View>
              <Image
                source={{uri: item.image_url}} 
                style={{height: 80, width: 80}}
              />
            </View>
          </TouchableOpacity>
        </View>
      )
    }else {
      return (
        <View key={item.id} style={{ padding: 3, width: '100%', borderBottomWidth: 1, borderBottomColor: '#eee'}}>
          <TouchableOpacity activeOpacity={.8} style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}} onPress={() => this.props.navigation.navigate('MyOrderDetail')}>  
            <View>
              <Image
                source={{uri: item.image_url}} 
                style={{height: 80, width: 80}}
              />
            </View>

            <View style={{flex: 1, alignItems: 'flex-start', padding: 8}}>
              <Text style={{fontSize: 17}}>{item.first_name}</Text>
              

              <Text style={{fontSize: 13, marginTop:5, fontWeight: '200'}}>12/10/2019</Text>
              <Text style={{fontSize: 13, marginTop:5, fontWeight: '200'}}>Order No. #12100</Text>
              <Text style={{fontSize: 16, color: 'red'}}>100 SAR</Text>
              <Text style={{fontSize: 12, marginTop:5, textAlign: 'right', color: 'green'}}>Active</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)