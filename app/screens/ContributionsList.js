import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, FlatList, Image, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
    // green:    #7bbe50,
    // blue:  #188ee1,


export class ContributionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
  }

  _keyExtractor = (item, index) => item.id.toString();
  _renderItem = ({item}) => {
    if(this.state.lang == 'ar') {
      return (
        <View key={item.id} style={{ padding: 3, width: '100%', borderBottomWidth: 1, borderBottomColor: '#eee'}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>  
            <View style={{flex: 1, alignItems: 'flex-end', padding: 8}}>
              <Text style={{fontSize: 17}}>{item.first_name}</Text>
              <Text style={{fontSize: 13, marginTop:5}}>{item.email}</Text>
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

            <View style={{flex: 1, alignItems: 'flex-start', padding: 8}}>
              <Text style={{fontSize: 17}}>{item.first_name}</Text>
              <Text style={{fontSize: 13, marginTop:5}}>{item.email}</Text>
            </View>
          </View>
        </View>
      )
    }

  } // end of renderItem()

  render() {
    const { lang, strings } = this.props.language;
    const { home_tab } = strings;
    this.lang = lang;

    return (
      <View style={{flex: 1}}>
      <StatusBar backgroundColor="#188ee1"/>
        <FlatList
            style={{flex: 1}}
            data={this.state.users}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
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

export default connect(mapStateToProps, mapDispatchToProps)(ContributionsList)
