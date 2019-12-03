import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView , StatusBar, FlatList, RefreshControl, Platform, Dimensions, AsyncStorage, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeToArabic, changeToEnglish } from '../redux/actions/languageAction';
import { logIn, logOut } from '../redux/actions/authAction';
import { url } from '../utils/appsettings';



    // green:    #7bbe50,
    // blue:  #188ee1,
    const myFont = Platform.select({
        ios: {
          fontFamily: 'GESSTwoLight-Light',
        },
        android: {
          fontFamily: 'ArbFONTS-rabi3',
        },
      })

    const items = [{
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

    //   const tabs = [
    //     {index: 1, name: 'tab1', title: 'مطربين'},
    //     {index: 2, name: 'tab2', title: 'مكياج'},
    //     {index: 3, name: 'tab3', title: 'مصورين'},
    //     {index: 4, name: 'tab4', title: 'Tab 4'},
    //     {index: 5, name: 'tab5', title: 'Tab 5'},
    //     {index: 6, name: 'tab6', title: 'Tab 6'},
    //     {index: 7, name: 'tab7', title: 'Tab 7'},
    //     {index: 8, name: 'tab8', title: 'Tab 8'},
    //   ]
export class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: [],
            activeIndex: 0,
            tabs: [],
            isLoading: true,
            showError: false,
            errorMsg: '',
        }
    }

    componentDidMount() {
        // AsyncStorage.getItem('user').then((user) => {
        //     // let u = JSON.parse(user)
        //     // alert(JSON.stringify(u))
        // })
        
        this.loadCategories();
    } // end of componentDidMount()

    _setActive = (index) => {

        this.setState({activeIndex: index, isLoading: true});
        this.loadProductsByCatID(index)
}

    loadProductsByCatID = id => {
        fetch(`${url}shop/product/category/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Language': this.props.language.lang
            }
            // body: post
        })
        .then(r => r.json())
        .then((re) => {
            // alert(JSON.stringify(re))
            if(re.error) return this.setState({showError: true, errorMsg: re.message, isLoading: false});
            if(re.errors){
                for(let err in re.errors) {
                    this.setState({showError: true, errorMsg: re.errors[err], isLoading: false});   
                }
                return;
            }else {

                this.setState({products: re.data, isLoading: false})
            }
        })
    } // end of loadProductsByCatID()

    loadCategories = () => {
        fetch(url + 'shop/category', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Language': this.props.language.lang
            }
            // body: post
        })
        .then(r => r.json())
        .then((re) => {
            // alert(JSON.stringify(re.data.length))
            if(re.error) return this.setState({showError: true, errorMsg: re.message});
            if(re.errors){
                for(let err in re.errors) {
                    this.setState({showError: true, errorMsg: re.errors[err]});   
                }
                return;
            }else {

                this.setState({tabs: re.data, activeIndex: re.data[0].id});
                this.loadProductsByCatID(this.state.activeIndex);
            }
        }) 
    } // end of loadCategories()

    render() {
        const { lang, strings } = this.props.language;
        const { home_tab } = strings;
        this.lang = lang;
        // alert(JSON.stringify(home_tab))



        return (
            <View style={styles.container}>
            <StatusBar backgroundColor="#000" barStyle='light-content'/>
                    <View>
                      <ScrollView pagingEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true} style={{width: '100%', alignSelf: 'center', backgroundColor: '#fff'}}>
                        {
                          this.state.tabs.map((tab) => {
                            return (
                              <TouchableOpacity onPress={() => this._setActive(tab.id)} activeOpacity={.8} key={tab.id} style={{backgroundColor: '#000', width: Dimensions.get('window').width / 3, justifyContent: 'center', alignItems: 'center', height: 40, borderBottomWidth: this.state.activeIndex == tab.id ? 4 : 0, borderBottomColor: '#eee'}}>
                                  <Text style={{color: this.state.activeIndex == tab.id ? '#eee' : '#fff', ...myFont}}>{tab.name}</Text>
                              </TouchableOpacity>
                            )
                          })
                        }
                      </ScrollView>
                    </View>



                <View style={{flex: 3}}>
                    {
                        this.state.isLoading == false ? (
                            <FlatList
                            data={this.state.products}
                            style={{flex: 1}}
                            ListEmptyComponent={<View style={{justifyContent: 'center', alignItems: 'center', marginTop: '45%'}}><Text style={{color: 'gray', fontSize: 17}}>This is an empty section</Text></View>}
                            renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={.9} onPress={() => this.props.navigation.navigate('ProductDetail', {item: item})} style={{ flex: 1, borderRadius: 4, alignItems: 'center', backgroundColor: '#fff', flexDirection: 'column', padding: 2}}>
                                
                                  <Image style={styles.imageThumbnail} resizeMode="contain" source={{ uri: item.avatar }} />
                                  <Text style={{textAlign: 'center', ...myFont, padding: 5, fontSize: 17}}>{item.name}</Text>
    
    
                                <View style={{flexDirection: 'row',paddingVertical: 5, justifyContent: 'space-evenly', alignItems: 'center', alignSelf: 'flex-start'}}>
                                    <TouchableOpacity style={{flex: 1,padding: 4, backgroundColor: '#000', borderBottomRightRadius: 15, borderTopRightRadius: 15}}>
                                        <Text style={{textAlign: 'center', color: '#fff', fontSize: 12}}>Add To Cart</Text>
                                    </TouchableOpacity>
                                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{textAlign: 'center', color: 'gray', fontSize: 17, fontWeight: 'bold'}}>
                                            {item.price >= 1 ? 'SAR ' +  item.price : 'FREE'}
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
                        />
                        ) : (
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <Text>{this.state.errorMsg ? this.errorMsg : ''}</Text>
                                <ActivityIndicator size='small' color="#303031" />
                            </View>
                        )
                    }

                </View>
            </View>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)

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
        width: '100%',
        height: 180 
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