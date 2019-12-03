import React, { Component } from 'react';
import { View, Text, TouchableOpacity,ScrollView, StatusBar, FlatList, Image, RefreshControl, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SegmentedControlTab from 'react-native-segmented-control-tab';

    // green:    #7bbe50,
    // blue:  #188ee1,

    const MyFollowers = [{
      "id": 1,
      "first_name": "Manal2000",
      "last_name": "Jovovic",
      "following": true,
      "email": "djovovic0@nyu.edu",
      "image_url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/401c358a-32f6-4806-89d2-ee153e46f8b0/d551j04-4e319dcc-5b87-4298-b1cf-4818ce4193b5.png/v1/fill/w_896,h_892,strp/miley_cyrus_circle_png_by_kelly0311_d551j04-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk2IiwicGF0aCI6IlwvZlwvNDAxYzM1OGEtMzJmNi00ODA2LTg5ZDItZWUxNTNlNDZmOGIwXC9kNTUxajA0LTRlMzE5ZGNjLTViODctNDI5OC1iMWNmLTQ4MThjZTQxOTNiNS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yGnXIMGrHJoXlOuB-9hEz70Ocwcqw421HV5nbB_9gck"
    }, {
      "id": 2,
      "first_name": "Mona 9219",
      "last_name": "Fernely",
      "following": true,
      "email": "sfernely1@lulu.com",
      "image_url": "https://firedupcoaching.org/wp-content/uploads/2018/11/Nicola-portrait-round.png"
    }, {
      "id": 3,
      "first_name": "Mai Imran",
      "last_name": "McCudden",
      "following": true,
      "email": "bmccudden2@google.ca",
      "image_url": "https://i2.wp.com/cibobistro.com/wp-content/uploads/2017/02/avatar-round-1.png?fit=364%2C364&ssl=1"
    }, {
      "id": 4,
      "first_name": "Sameera Jol",
      "last_name": "Yair",
      "following": false,
      "email": "myair3@posterous.com",
      "image_url": "https://i2.wp.com/www.clicksitter.ca/wp-content/uploads/2017/04/avatar-round-2-1.png?ssl=1"
    }, {
      "id": 5,
      "first_name": "Maria Diab",
      "last_name": "Adlam",
      "following": true,
      "email": "jadlam4@blog.com",
      "image_url": "https://www.libreriasanjorge.com.ar/core/vendors/v24/wf/clean/images/usuario-avatar-circular.fw-p-800.png"
    }, {
      "id": 6,
      "first_name": "Jennifer Jonathan",
      "last_name": "MacCarlich",
      "following": false,
      "email": "mmaccarlich5@blogspot.com",
      "image_url": "http://media.withtank.com/5ee20fac1a/alexis_round_avatar_2.png"
    }, {
      "id": 7,
      "first_name": "Beauty Wagon",
      "last_name": "Massot",
      "following": false,
      "email": "pmassot6@dyndns.org",
      "image_url": "https://www.speechirl.com/wp-content/uploads/2018/08/rachel-round.jpg"
    }, {
      "id": 8,
      "first_name": "Che Jian",
      "last_name": "Hungerford",
      "following": false,
      "email": "dhungerford7@cargocollective.com",
      "image_url": "http://amyngstudio.com/start/wp-content/uploads/2015/01/Amy_portrait_final_round.png"
    }, {
      "id": 9,
      "first_name": "Jolly Jobs",
      "last_name": "Goldes",
      "following": true,
      "email": "fgoldes8@google.com.hk",
      "image_url": "http://www.sheeby.com/assets/211947d3f9564c839d5411e2114b7969.png"
    }, {
      "id": 10,
      "first_name": "Christina Fraday",
      "last_name": "Sole",
      "following": true,
      "email": "psole9@blogs.com",
      "image_url": "https://christin-marczinzik.de/wp-content/uploads/2016/11/portrait-cm-round.png"
    }, {
      "id": 11,
      "first_name": "Jemmy Transor",
      "last_name": "Polglaze",
      "following": false,
      "email": "lpolglazea@kickstarter.com",
      "image_url": "https://awholenewtwist.com/wp-content/uploads/2015/05/portrait-round-300x300.png"
    }, {
      "id": 12,
      "first_name": "Sarah Clob",
      "last_name": "Ambrodi",
      "following": true,
      "email": "gambrodib@dion.ne.jp",
      "image_url": "https://render.fineartamerica.com/images/rendered/default/flat/round-beach-towel/images/artworkimages/medium/1/portrait-of-marie-therese-charlotte-of-france-adolf-ulrich-wertmuller.jpg?&targetx=0&targety=-83&imagewidth=788&imageheight=955&modelwidth=788&modelheight=788&backgroundcolor=4C582E&orientation=0"
    }];

    const Following = [{
      "id": 1,
      "first_name": "Madona Emanuel",
      "last_name": "Jovovic",
      "following": true,
      "email": "djovovic0@nyu.edu",
      "image_url": "https://icon-library.net/images/icon-avatars/icon-avatars-12.jpg"
    }, {
      "id": 2,
      "first_name": "Ess Al-Kahmi",
      "last_name": "Fernely",
      "following": false,
      "email": "sfernely1@lulu.com",
      "image_url": "https://icon-library.net/images/icon-avatars/icon-avatars-12.jpg"
    }, {
      "id": 3,
      "first_name": "Madi Actor",
      "last_name": "McCudden",
      "following": false,
      "email": "bmccudden2@google.ca",
      "image_url": "https://www.pngkey.com/png/full/782-7822206_sharon-pope-round-woman.png"
    }, {
      "id": 4,
      "first_name": "Chen Yung Lee",
      "last_name": "Yair",
      "following": false,
      "email": "myair3@posterous.com",
      "image_url": "https://www.helsinkibusinesshub.fi/wp-content/uploads/2018/02/tian-round-2017-web-blue.png"
    }, {
      "id": 5,
      "first_name": "Hura Isman",
      "last_name": "Adlam",
      "following": true,
      "email": "jadlam4@blog.com",
      "image_url": "https://images.squarespace-cdn.com/content/v1/5785b85b15d5dbb0fab56c26/1562617935229-AODF9W9LJVOPO72AIBE6/ke17ZwdGBToddI8pDm48kGzPON_icsvEjwfblZQkopNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFgihas-m2wuOHHKTYH7vrnj5zxElze8gxv5Ma4zXsel6QvevUbj177dmcMs1F0H-0/MayaSchofield-round.png?format=1000w"
    }, {
      "id": 6,
      "first_name": "Christiana Amanda",
      "last_name": "MacCarlich",
      "following": true,
      "email": "mmaccarlich5@blogspot.com",
      "image_url": "https://images.squarespace-cdn.com/content/v1/559cddc2e4b0a65ec392a452/1562590017805-YXOXECYQ3KK1U411ZNZW/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmrMDYraMJMCQwFxTSOIP7LpSBEQpA-g5k6VTjWbSuadHJq0dp98hg5AZvIaPb3DoM/Alexandra_round.png"
    }, {
      "id": 7,
      "first_name": "Opera Morfey",
      "last_name": "Massot",
      "following": true,
      "email": "pmassot6@dyndns.org",
      "image_url": "https://res.cloudinary.com/pozters/image/upload/w_700/v1536001228/prod_uploads/z43n56l8K9lp7Kd2qwE7X"
    }, {
      "id": 8,
      "first_name": "Jimmy Martin",
      "last_name": "Hungerford",
      "following": true,
      "email": "dhungerford7@cargocollective.com",
      "image_url": "https://www.trzcacak.rs/myfile/detail/296-2963426_sharon-pope-round-woman.png"
    }];

    const tabsAr = ['المتابِعون', 'المتابَعون'];
    const tabsEn = ['Followers', 'Following'];
export class Followers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: MyFollowers,
      pageIndex: 5,
      selectedIndex: 0,
      refreshing: false
    };
  }

  handleIndexChange = (index) => {
    this.setState({selectedIndex: index, users: index == 0 ? MyFollowers : Following});
  } // handleIndexChange

  componentDidMount() {

    // this.setState({users: this.state.users.filter((item) => item.id <= this.state.pageIndex)})
  }
  _followToggle(id) {
    let newArr = []
    for(let item of this.state.users) {
        if(item.id === id){
          item.following = !item.following;
        }
        newArr.push({...item})
    }

    this.setState({users: newArr})
  }

  _keyExtractor = (item, index) => item.id.toString();
  _renderItem = ({item}) => {
    if(this.props.language.lang == 'ar') {
      return (
        <View key={item.id} style={{ padding: 3, width: '100%', borderBottomWidth: 1, borderBottomColor: '#eee'}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>  
            <View style={{justifyContent: 'center', paddingHorizontal: 8}}>
              <TouchableOpacity onPress={() => this._followToggle(item.id)} style={{justifyContent: 'center', padding: 10, width: 110,  backgroundColor: item.following ? '#000' : '#fff', borderRadius: 7, borderWidth: 1, borderColor: item.following ? '#fff' : '#000'}}>
                <Text style={{color: item.following ? '#fff' : '#000', textAlign: 'center'}}>{item.following ? 'إلغاء المتابعة' : 'متابعة'}</Text>
              </TouchableOpacity>
            </View>

            <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', padding: 8}}>
              <Text style={{fontSize: 17, color: 'gray', textAlign: 'right'}}>{item.first_name}</Text>
            </View>
  
            <View>
              <Image
                source={{uri: item.image_url}} 
                style={{height: 80, width: 80}}
              />
            </View>
          </View>
        </View>
      )
    }else {
      return (
        <View key={item.id} style={{ padding: 3, width: '100%', borderBottomWidth: 1, borderBottomColor: '#eee'}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>  
            <View>
              <Image
                source={{uri: item.image_url}} 
                style={{height: 80, width: 80}}
              />
            </View>

            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center', padding: 8}}>
              <Text style={{fontSize: 17, color: 'gray', textAlign: 'right'}}>{item.first_name}</Text>
            </View>

            <View style={{justifyContent: 'center', paddingHorizontal: 8}}>
              <TouchableOpacity onPress={() => this._followToggle(item.id)} style={{justifyContent: 'center', padding: 10, width: 110,  backgroundColor: item.following ? '#000' : '#fff', borderRadius: 7, borderWidth: 1, borderColor: item.following ? '#fff' : '#000'}}>
                <Text style={{color: item.following ? '#fff' : '#000', textAlign: 'center'}}>{item.following ? 'إلغاء المتابعة' : 'متابعة'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }

  } // end of renderItem()
  
  _refresh = () => {
    this.setState({refreshing: true});
    this.setState({pageIndex: this.state.pageIndex += 5, users: this.state.users.filter((item) => item.id <= this.state.pageIndex), refreshing: false})
}

  render() {

    const { lang, strings } = this.props.language;
    const { home_tab } = strings;
    this.lang = lang;
    return (
      <View style={{flex: 1}}>
      <StatusBar backgroundColor="#000"/>
        <SegmentedControlTab
                      values={lang == 'ar' ? tabsAr : tabsEn}
                      selectedIndex={this.state.selectedIndex}
                      onTabPress={this.handleIndexChange}
                      tabsContainerStyle={{padding: 10}}
                      tabStyle={{borderColor: '#000', height: 40}}
                      tabTextStyle={{color: '#000'}}
                      activeTabStyle={{backgroundColor: '#000'}}
                      />

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

export default connect(mapStateToProps, mapDispatchToProps)(Followers)