import React, {Component} from 'react';
import { createSwitchNavigator, createAppContainer, NavigationActions, StackActions } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import Thunk from 'redux-thunk';
import { Text, Image, TouchableOpacity,View, Platform } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Ionicons';


// const myFont = Platform.select({
//     ios: {
//       fontFamily: 'GESSTwoLight-Light',
//     },
//     android: {
//       fontFamily: 'ArbFONTS-rabi3',
//     },
//   });

const myFont = Platform.select({
    ios: {
      fontFamily: 'GESSTwoLight-Light',
    },
    android: {
      fontFamily: 'NotoNaskhArabic-Regular',
    },
  });

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: ['language','auth'],
    whitelist: ['language', 'auth']
}


const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, {}, applyMiddleware(Thunk))


persistStore(store)


// Screens
import Login from './screens/Login';
import Code from './screens/Code';
import Reset from './screens/Reset';

import Register from './screens/Register';
import AppLanguage from './screens/AppLanguage';
import Splash from './screens/Splash';
import ResetPass from './screens/ResetPass';
import UserGroupsList from './screens/UserGroupsList';
import DonationsList from './screens/DonationsList';
import ContributionsList from './screens/ContributionsList';
import ProductDetail from './screens/ProductDetail';
import AddArticleComment from './screens/AddArticleComment';
import EditComment from './screens/EditComment';
import EndOrderUserInfo from './screens/EndOrderUserInfo';
import EndOrderPaymentType from './screens/EndOrderPaymentType';
import EndOrderFinishReciept from './screens/EndOrderFinishReciept';
import Cart from './screens/Cart';
import ServicesUsers from './screens/ServicesUsers';
import ServiceUserDetail from './screens/ServiceUserDetail';



// Drawer Screens
import Profile from './screens/Profile';
import MyOrders from './screens/MyOrders';
import MyOrderDetail from './screens/MyOrderDetail';
import MyDonations from './screens/MyDonations';
import MyContributions from './screens/MyContributions';
import MyArticles from './screens/MyArticles';
import PrivateMessages from './screens/PrivateMessages';
import Followers from './screens/Followers';
import ArticleDetail from './screens/ArticleDetail';
import ContactUs from './screens/ContactUs';
import PaymentsRecords from './screens/PaymentsRecords';
import Promos from './screens/Promos';
import PaymentRecordDetail from './screens/PaymentRecordDetail';
import Notifications from './screens/Notifications';
import NotificationDetail from './screens/NotificationDetail';



// Tabs 
import Home from './screens/Home';
import Services from './screens/Services';
import Account from './screens/Account'
import AccountInfoUpdate from './screens/AccountInfoUpdate';
import AccountRenew from './screens/AccountRenew';
import Info from './screens/Info';

// Custom Components
import SideMenu from './components/SideMenu';

// Navigators
//1- deep StackNavs AR 
const InfoStackAr = createStackNavigator({
    Info: {
        screen: Info,
        navigationOptions: (props) =>  {
            return {
                title: 'معلومات',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex : 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerLeft: (<View></View>)
            }
            
        }
    }
})

const AccountStackAr = createStackNavigator({
    Account: {
        screen: Account, 
        navigationOptions: (props) =>  {
            return {
                title: 'الحساب',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (<View></View>),
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }
            
        }
    },
    AccountRenew: {
        screen: AccountRenew,
        navigationOptions: (props) => {
            return {
                title: 'تجديد الإشتراك',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerLeft: (<View></View>)
            }
        }
    },
    AccountInfoUpdate: {
        screen: AccountInfoUpdate,
        navigationOptions: (props) => {
            return {
                title: 'تعديل الملف',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerLeft: (<View></View>)
            }
        }
    }
})

const AddArticleCommentStack = createStackNavigator({
    AddArticleComment: AddArticleComment
}, {
    headerMode: 'none'
})

const ServicesStackAr = createStackNavigator({
    Services: {
        screen: Services,
        navigationOptions: (props) =>  {
            return {
                title: 'الخدمات',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerBackTitle: ' ',
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerLeft: (<View></View>)
            }
            
        }
    },
    ServicesUsers: {
        screen: ServicesUsers, 
        navigationOptions: (props) =>  {
            return {
                title: 'قائمة الخدمات',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerBackTitle: ' ',
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (<View></View>) 
                // headerRight: (
                //     <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                //         <Icon name="ios-menu" size={34} color="#fff" />
                //     </TouchableOpacity>)
            }
            
        }
    },
    ServiceUserDetail: {
        screen: ServiceUserDetail, 
        navigationOptions: (props) =>  {
            return {
                title: 'الخدمة',
                headerStyle: {
                    backgroundColor: '#303031',
                },
                headerBackTitle: ' ',
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (<View></View>) 
                // headerRight: (
                //     <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                //         <Icon name="ios-menu" size={34} color="#fff" />
                //     </TouchableOpacity>)
            }
            
        }
    },
    ArticleDetail: {
        screen: ArticleDetail, 
        navigationOptions: (props) =>  {
            return {
                title: 'تفاصيل الخدمة',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign:'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (<View></View>) 
                // headerRight: (
                //     <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                //         <Icon name="ios-menu" size={34} color="#fff" />
                //     </TouchableOpacity>)
            }
            
        }
    },
    AddArticleComment: {
        screen: AddArticleComment,
        navigationOptions: (props) =>  {
            return {
                title: 'أضف تعليقك!',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    textAlign: 'center',
                    flex: 1
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (<View></View>) 
                // headerRight: (
                //     <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                //         <Icon name="ios-menu" size={34} color="#fff" />
                //     </TouchableOpacity>)
            }
            
        }
    }
},
{
    mode: 'modal'
})


// HOME STACK DEEP STACKS - Arabic - Users Groups, Services Sections, Donations, Contributions 
const UserGroupsStackAr = createStackNavigator({
    UserGroupsList: {
        screen: UserGroupsList ,
        navigationOptions: (props) => {
            return {
                header: null
            }
        }
    } 
});

const DonationsStackAr = createStackNavigator({
    DonationsList: {
        screen: DonationsList ,
        navigationOptions: (props) => {
            return {
                header: null
            }
        }
    }
});

const ContributionsStackAr = createStackNavigator({
    ContributionsList: {
        screen: ContributionsList ,
        navigationOptions: (props) => {
            return {
                header: null
            }
        }
    } 
});

const HomeStackAr = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: (props) =>  {
            return {
                title: 'المتجر',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerBackTitle: null,
                headerTitleStyle: {
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    fontSize: 23,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.navigate('Cart')}>
                        <Icon name="md-basket" size={34} color="#fff" />
                    </TouchableOpacity>
                )
            }
            
        }
    },
    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: (props) => {

            return {
                title: 'تفاصيل المنتج',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (<View></View>)    
            }
        }
    },
    EditComment: {
        screen: EditComment,
        navigationOptions: (props) => {
            return {
                title: 'تعديل التعليق',
                headerStyle: {
                    backgroundColor: '#000'
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (<View></View>) 
            }
        }
    },
    Cart: {
        screen: Cart,
        navigationOptions: (props) => {

            return {
                title: 'السلة',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (<View></View>)  
            }
        }
    },
    EndOrderUserInfo: {
        screen: EndOrderUserInfo,
        navigationOptions: (props) => {

            return {
                title: 'معلومات المستخدم',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',  
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (<View></View>)   
            }
        }
    },
    EndOrderPaymentType: {
        screen: EndOrderPaymentType,
        navigationOptions: (props) => {

            return {
                title: 'معلومات الدفع',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',   
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (<View></View>)  
            }
        }
    },
    EndOrderFinishReciept: {
        screen: EndOrderFinishReciept,
        navigationOptions: (props) => {

            return {
                title: 'تأكيد بيانات الطلب',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',    
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (<View></View>) 
            }
        }
    }
})

// 2- deep StackNavs En

const InfoStackEn = createStackNavigator({
    Info: {
        screen: Info,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Info',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (<View></View>)
            }

        }
    }
})

const AccountStackEn = createStackNavigator({
    Account: {
        screen: Account, 
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Account',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (<View></View>)
            }

        }
    },
    AccountRenew: {
        screen: AccountRenew,
        navigationOptions: (props) => {
            return {
                title: 'Account Renewal',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerLeft: (<View></View>)
            }
        }
    },
    AccountInfoUpdate: {
        screen: AccountInfoUpdate,
        navigationOptions: (props) => {
            return {
                title: 'Update Profile',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    textAlign: 'center',
                    flex: 1
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight:(<View></View>)
            }
        }
    }
})

const ServicesStackEn = createStackNavigator({
    Services: {
        screen: Services,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Services',
                headerStyle: {
                    backgroundColor: '#303031',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (<View></View>),
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    },
    ServicesUsers: {
        screen: ServicesUsers, 
        navigationOptions: (props) =>  {
            return {
                title: 'Services',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerBackTitle: ' ',
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight:(<View></View>)
                // headerLeft: (
                //     <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                //         <Icon name="ios-menu" size={34} color="#fff" />
                //     </TouchableOpacity>)
            }
            
        }
    },
    ServiceUserDetail: {
        screen: ServiceUserDetail, 
        navigationOptions: (props) =>  {
            return {
                title: "Service",
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerBackTitle: ' ',
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign:'center'
                },
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight:(<View></View>)
                // headerLeft: (
                //     <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                //         <Icon name="ios-menu" size={34} color="#fff" />
                //     </TouchableOpacity>)
            }
            
        }
    },
    ArticleDetail: {
        screen: ArticleDetail, 
        navigationOptions: (props) =>  {
            return {
                title: 'Article Detail',
                headerStyle: {
                    backgroundColor: '#000',
                    ...myFont
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight:(<View></View>)
                // headerRight: (
                //     <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                //         <Icon name="ios-menu" size={34} color="#fff" />
                //     </TouchableOpacity>)
            }
            
        }
    },
    AddArticleComment: {
        screen: AddArticleComment,
        navigationOptions: (props) =>  {
            return {
                title: 'Add Your Comment!',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (<View></View>)
                // headerRight: (
                //     <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                //         <Icon name="ios-menu" size={34} color="#fff" />
                //     </TouchableOpacity>)
            }
            
        }
    }
}, {
    mode: 'modal'
});

// HOME STACK DEEP STACKS - English - Users Groups, Service Sections, Donations, Contributions 
const UserGroupsStackEn = createStackNavigator({
    UserGroupsList: {
        screen: UserGroupsList ,
        navigationOptions: (props) => {
            return {
                header: null
            }
        }
    } 
});

const DonationsStackEn = createStackNavigator({
    DonationsList: {
        screen: DonationsList ,
        navigationOptions: (props) => {
            return {
                header: null
            }
        }
    }
});

const ContributionsStackEn = createStackNavigator({
    ContributionsList: {
        screen: ContributionsList ,
        navigationOptions: (props) => {
            return {
                header: null
            }
        }
    } 
});


const HomeStackEn = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Home',
                headerStyle: {
                    backgroundColor: '#000'
                },
                headerBackTitle: null,
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center',
                },
                // headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="md-basket" size={34} color="#fff" />
                    </TouchableOpacity>),
            }

        }
    },
    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: (props) => {

            return {
                title: 'Product Detail',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center',
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',  
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}}>
                        {/* <Icon name="md-basket" size={34} color="#fff" /> */}
                    </TouchableOpacity>),
            }
        }
    },
    EditComment: {
        screen: EditComment,
        navigationOptions: (props) => {
            return {
                title: 'EditComment',
                headerStyle: {
                    backgroundColor: '#000'
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center',
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}}>
                        {/* <Icon name="md-basket" size={34} color="#fff" /> */}
                    </TouchableOpacity>),
            }
        }
    },
    Cart: {
        screen: Cart,
        navigationOptions: (props) => {

            return {
                title: 'Cart',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center',
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff', 
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}}>
                        {/* <Icon name="md-basket" size={34} color="#fff" /> */}
                    </TouchableOpacity>),   
            }
        }
    },
    EndOrderUserInfo: {
        screen: EndOrderUserInfo,
        navigationOptions: (props) => {

            return {
                title: 'User Info',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center',
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',    
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}}>
                        {/* <Icon name="md-basket" size={34} color="#fff" /> */}
                    </TouchableOpacity>),
            }
        }
    },
    EndOrderPaymentType: {
        screen: EndOrderPaymentType,
        navigationOptions: (props) => {

            return {
                title: 'Payment Info',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center',
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',   
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}}>
                        {/* <Icon name="md-basket" size={34} color="#fff" /> */}
                    </TouchableOpacity>), 
            }
        }
    },
    EndOrderFinishReciept: {
        screen: EndOrderFinishReciept,
        navigationOptions: (props) => {

            return {
                title: 'تأكيد بيانات الطلب',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    alignItems: 'center',
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center',
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff', 
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.goBack()}>
                        <Icon name="md-arrow-back" size={34} color="#fff" />
                    </TouchableOpacity>),
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}}>
                        {/* <Icon name="md-basket" size={34} color="#fff" /> */}
                    </TouchableOpacity>),   
            }
        }
    }
})




// Arabic TabNav
const TabNavAr = createBottomTabNavigator({
    Info: {
        screen: InfoStackAr,
        navigationOptions: {
            title: 'معلومات',
        } 
    },
    Account: {
        screen: AccountStackAr,
        navigationOptions: {
            title: 'الحساب'  
        } 
    },
    Services: {
        screen: ServicesStackAr,
        navigationOptions: {
            title: 'الخدمات'  
        } 
    },
    Home: {
        screen: HomeStackAr,
        navigationOptions: {
          title: 'المتجر',
        }  
    },
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) =>  ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            let icon;
            if(routeName == 'Home'){
                icon = 'md-home';
            }else if(routeName == 'Services') {
                icon = 'ios-heart';
            }else if(routeName == 'Account') {
                icon = 'md-person';
            }else if(routeName == 'Info') {
                icon = 'md-information-circle';
            }

            return <Icon name={icon} style={{width:26, height: 26, marginTop:24, paddingTop: 2, textAlign: 'center'}} color={tintColor} size={26}/>
        }
    }),
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        labelStyle: {
            fontSize: 13,
            marginTop:25,
            ...myFont,
            textAlign: 'center'
        },
        style: {
            backgroundColor: '#eee',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            
        }
    }
});

const TabNavEn = createBottomTabNavigator({
    Home: {
        screen: HomeStackEn,
        navigationOptions: {
            title: 'Store',
        } 
    },  
    Services: {
        screen: ServicesStackEn,
        navigationOptions: {
            title: 'Services'  
        } 
    },
    Account: {
        screen: AccountStackEn,
        navigationOptions: {
            title: 'Account'  
        } 
    },

    Info: {
        screen: InfoStackEn,
        navigationOptions: {
          title: 'Info',
        }  
    },
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) =>  ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            let icon;
            if(routeName == 'Home'){
                icon = 'md-home';
            }else if(routeName == 'Services') {
                icon = 'ios-heart';
            }else if(routeName == 'Account') {
                icon = 'md-person';
            }else if(routeName == 'Info') {
                icon = 'md-information-circle';
            }

            return <Icon name={icon} style={{width:26, height: 26, marginTop:24, textAlign: 'center'}} color={tintColor} size={26}/>
        }
    }),
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        labelStyle: {
            fontSize: 13,
            marginTop:25, 
            textAlign: 'center',
            ...myFont
        },
        style: {
            backgroundColor: '#eee',
            padding: 5 
        }
    }
});

TabNavAr.navigationOptions = ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    let name = routeName;
    if(routeName == 'Home'){
        name = 'الرئيسية'
    }else if(routeName == 'Services') {
        name = 'الخدمات'
    }else if(routeName == 'Account') {
        name = 'الحساب'
    }else if(routeName == 'Info') {
        name = 'معلومات'
    }
    return {
        headerTitle: name
    }
}

TabNavEn.navigationOptions = ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    let name = routeName;
    if(routeName == 'Home'){
        name = 'Home';
    }else if(routeName == 'Services') {
        name = 'New Articles';
    }else if(routeName == 'Account') {
        name = 'Account';
    }else if(routeName == 'Info') {
        name = 'Info';
    }
    return {
        headerTitle: name
    }
}

// Arabic StackNav
const menuIcon = "" // require('./assets/images/ic_menu_white_24dp.png')



const StackNavAr = createStackNavigator({
    TabMain: TabNavAr,
}, {
    headerMode: 'none',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerRight: (
            <TouchableOpacity activeOpacity={.6} >
                <Image source={menuIcon} style={{width: 32, height: 30, marginRight: 14}}  />
            </TouchableOpacity>  
        ) 
    }
});
 // Arabic Drawer Items Stacks
const ProfileStackAr = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'الملف الشخصي',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont,
                    flex: 1,
                    textAlign: 'center'
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} >
                        {/* <Icon name="md-arrow-back" size={34} color="#fff" /> */}
                    </TouchableOpacity>),
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});
const MyOrdersStackAr = createStackNavigator({
    MyOrders: {
        screen: MyOrders,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'طلباتي',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    },
    MyOrderDetail: {
        screen: MyOrderDetail,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'تفاصيل الطلب',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});
const MyDonationsStackAr = createStackNavigator({
    MyDonations: {
        screen: MyDonations,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'تبرعاتي',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});
const MyContributionsStackAr = createStackNavigator({
    MyContributions: {
        screen: MyContributions,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'مبادراتي',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});
const MyArticlesStackAr = createStackNavigator({
    MyArticles: {
        screen: MyArticles,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'مقالاتي',
                headerStyle: {
                    backgroundColor: '#000',
                    ...myFont
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});
const PrivateMessagesStackAr = createStackNavigator({
    PrivateMessages: {
        screen: PrivateMessages,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'الرسائل الخاصة',
                headerStyle: {
                    backgroundColor: '#000',
                    ...myFont
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});
const FollowersStackAr = createStackNavigator({
    Followers: {
        screen: Followers,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'قائمة المتابعون',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});

const PaymentsRecordsStackAr = createStackNavigator({
    PaymentsRecords: {
        screen: PaymentsRecords,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'الدفعات',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    },
    PaymentRecordDetail: {
        screen: PaymentRecordDetail,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'تفاصيل الدفعة',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});

const NotificationsStackAr = createStackNavigator({
    Notifications: {
        screen: Notifications,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'الإشعارات',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    },
    NotificationDetail: {
        screen: NotificationDetail,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'تفاصيل الاشعار',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
})

const PromosStackAr = createStackNavigator({
    Promos: {
        screen: Promos,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'العروض',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
})

const ContactUsStackAr = createStackNavigator({
    ContactUs: {
        screen: ContactUs,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'تواصل معنا',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});


const LoginStackAr = createStackNavigator({
        Login: {
        screen: Login,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Login',
                header: null,
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    },
    Register: {
        screen: Register,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Register',
                header: null,
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    },
    Code: {
        screen: Code,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Code',
                header: null,
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    },
    Reset: {
        screen: Reset,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Reset',
                header: null,
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }
    
        }   
    }
});



// const DrawerNavAr = createDrawerNavigator({
//     Home: StackNavAr,
//     Profile: ProfileStackAr,
//     MyOrders: MyOrdersStackAr,
//     MyDonations: MyDonationsStackAr,
//     MyContributions: MyContributionsStackAr,
//     MyArticles: MyArticlesStackAr,
//     PrivateMessages: PrivateMessagesStackAr,
//     Followers: FollowersStackAr,
//     LogOut: LogoutAr
// }, {
//     contentComponent: SideMenu,
//     drawerPosition: 'right',
//     drawerLockMode: 'locked-closed',
//     drawerBackgroundColor: 'rgba(255,255,255,.8)',
//     drawerType: 'back',
//     hideStatusBar: true,
//     overlayColor: 'rgba(255, 255, 255, 1)'
// })


// English StackNav
const StackNavEn = createStackNavigator({
    TabMain: TabNavEn
}, {
    headerMode: 'none',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#000'
        },
        headerTintColor: '#fff',
        headerBackTitle: ' ',
        headerLeft: (
            <TouchableOpacity activeOpacity={.6} >
                <Image source={menuIcon} style={{width: 32, height: 30, marginLeft: 14}}  />
            </TouchableOpacity>  
        ) 
    }
});

// English Drawer Items Stacks
const ProfileStackEn = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Profile',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});
const MyOrdersStackEn = createStackNavigator({
    MyOrders: {
        screen: MyOrders,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'My Orders',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    },
    MyOrderDetail: {
        screen: MyOrderDetail,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'تفاصيل الطلب',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});
const MyDonationsStackEn = createStackNavigator({
    MyDonations: {
        screen: MyDonations,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'My Donations',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});
const MyContributionsStackEn = createStackNavigator({
    MyContributions: {
        screen: MyContributions,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'My Contributions',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});
const MyArticlesStackEn = createStackNavigator({
    MyArticles: {
        screen: MyArticles,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'My Articles',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});
const PrivateMessagesStackEn = createStackNavigator({
    PrivateMessages: {
        screen: PrivateMessages,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Private Messages',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});
const FollowersStackEn = createStackNavigator({
    Followers: {
        screen: Followers,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Followers',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});

const PaymentsRecordsStackEn = createStackNavigator({
    PaymentsRecords: {
        screen: PaymentsRecords,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Payment Records',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    },
    PaymentRecordDetail: {
        screen: PaymentRecordDetail,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Payment Detail',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});

const NotificationsStackEn = createStackNavigator({
    Notifications: {
        screen: Notifications,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Notifications',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    },
    NotificationDetail: {
        screen: NotificationDetail,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Notification Detail',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
})

const PromosStackEn = createStackNavigator({
    Promos: {
        screen: Promos,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Promos',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
})

const ContactUsStackEn = createStackNavigator({
    ContactUs: {
        screen: ContactUs,
        navigationOptions: (props) => {
            // alert(JSON.stringify(props))
            return {
                title: 'Contact Us',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: '300',
                    ...myFont
                },
                headerBackTitle: ' ',
                headerTintColor: '#fff',
                headerLeft: (
                    <TouchableOpacity style={{paddingLeft: 15}} onPress={() => props.navigation.toggleDrawer()}>
                        <Icon name="ios-menu" size={34} color="#fff" />
                    </TouchableOpacity>)
            }

        }
    }
});

const LoginStackEn = createStackNavigator({
    Login: {
    screen: Login,
    navigationOptions: (props) => {
        // alert(JSON.stringify(props))
        return {
            title: 'Login',
            header: null,
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTitleStyle: {
                fontSize: 23,
                fontWeight: '300',
                ...myFont
            },
            headerBackTitle: ' ',
            headerTintColor: '#fff',
            headerRight: (
                <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                    <Icon name="ios-menu" size={34} color="#fff" />
                </TouchableOpacity>)
        }

    }
},
Register: {
    screen: Register,
    navigationOptions: (props) => {
        // alert(JSON.stringify(props))
        return {
            title: 'Register',
            header: null,
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTitleStyle: {
                fontSize: 23,
                fontWeight: '300',
                ...myFont
            },
            headerBackTitle: ' ',
            headerTintColor: '#fff',
            headerRight: (
                <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                    <Icon name="ios-menu" size={34} color="#fff" />
                </TouchableOpacity>)
        }

    }
},
Code: {
    screen: Code,
    navigationOptions: (props) => {
        // alert(JSON.stringify(props))
        return {
            title: 'Code',
            header: null,
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTitleStyle: {
                fontSize: 23,
                fontWeight: '300',
                ...myFont
            },
            headerBackTitle: ' ',
            headerTintColor: '#fff',
            headerRight: (
                <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                    <Icon name="ios-menu" size={34} color="#fff" />
                </TouchableOpacity>)
        }

    }
},
Reset: {
    screen: Reset,
    navigationOptions: (props) => {
        // alert(JSON.stringify(props))
        return {
            title: 'Reset',
            header: null,
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTitleStyle: {
                fontSize: 23,
                fontWeight: '300',
                ...myFont
            },
            headerBackTitle: ' ',
            headerTintColor: '#fff',
            headerRight: (
                <TouchableOpacity style={{paddingRight: 15}} onPress={() => props.navigation.toggleDrawer()}>
                    <Icon name="ios-menu" size={34} color="#fff" />
                </TouchableOpacity>)
        }

    }   
}
});

const DrawerNavEn = createDrawerNavigator({
    Home: StackNavEn,
    Profile: ProfileStackEn,
    MyOrders: MyOrdersStackEn,
    MyDonations: MyDonationsStackEn,
    MyContributions: MyContributionsStackEn,
    Info: InfoStackEn,
    MyArticles: MyArticlesStackEn,
    PrivateMessages: PrivateMessagesStackEn,
    Followers: FollowersStackEn
}, {
    contentComponent: SideMenu,
    drawerPosition: 'left',
    drawerBackgroundColor: '#eee',
    drawerType: 'back',
    hideStatusBar: true,
    overlayColor: '#eee'
})




const SwitchNavigatorAr = createSwitchNavigator({
    Splash: Splash,
    AppLanguage: AppLanguage,
    // Login: Login, 
    Login: LoginStackAr,
    Home: Home,
    // Register: Register,
    ResetPass: ResetPass,
    AppMain: createDrawerNavigator({
        Home: StackNavAr,
        Profile: ProfileStackAr,
        MyOrders: MyOrdersStackAr,
        MyDonations: MyDonationsStackAr,
        MyContributions: MyContributionsStackAr,
        Info: InfoStackAr,
        MyArticles: MyArticlesStackAr,
        PrivateMessages: PrivateMessagesStackAr,
        Followers: FollowersStackAr,
        ContactUs: ContactUsStackAr,
        PaymentsRecords: PaymentsRecordsStackAr,
        Notifications: NotificationsStackAr,
        Promos: PromosStackAr,
        
        LogOut: AppLanguage
    }, {
        contentComponent: SideMenu,
        drawerPosition: 'right',
        drawerLockMode: 'locked-closed',
        drawerBackgroundColor: '#eee',
        drawerType: 'back',
        hideStatusBar: true,
        overlayColor: '#eee'
    })
})

const SwitchNavigatorEn = createSwitchNavigator({
    Splash: Splash,
    AppLanguage: AppLanguage,
    // Login: Login, 
    Login: LoginStackEn,
    Home: Home,
    // Register: Register,
    ResetPass: ResetPass,
    AppMain: createDrawerNavigator({
        Home: StackNavEn,
        Profile: ProfileStackEn,
        MyOrders: MyOrdersStackEn,
        MyDonations: MyDonationsStackEn,
        MyContributions: MyContributionsStackEn,
        Info: InfoStackEn,
        MyArticles: MyArticlesStackEn,
        PrivateMessages: PrivateMessagesStackEn,
        Followers: FollowersStackEn,
        ContactUs: ContactUsStackEn,
        PaymentsRecords: PaymentsRecordsStackEn,
        Notifications: NotificationsStackEn,
        Promos: PromosStackEn,
        
        LogOut: AppLanguage
    }, {
        contentComponent: SideMenu,
        drawerPosition: 'left',
        drawerBackgroundColor: '#eee',
        drawerType: 'back',
        hideStatusBar: true,
        overlayColor: '#eee'
    })
})

const AppContainerAr = createAppContainer(SwitchNavigatorAr);
const AppContainerEn = createAppContainer(SwitchNavigatorEn);


export default class App extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)

        this.state = {
            lang: 'ar'
        }

    }



    componentDidMount() {
        // AsyncStorage.removeItem('language').then(() => {})
        // AsyncStorage.removeItem('user').then(() => {})
        // AsyncStorage.removeItem('isLoggedIn').then(() => {})
        this._isMounted = true;

        if(this._isMounted) {
         AsyncStorage.getItem('language').then((lang) => { 
             if(lang) {
                //  alert(lang)
                 this.setState({lang})
             } else {
                 this.setState({lang: 'ar'})
             }   
                 
        })

        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        if(this._isMounted) {
            return (
                <Provider store={store}>
                    {this.state.lang == 'ar' ? (<AppContainerAr/>) : (<AppContainerEn/>)}
                </Provider>
            );
        }else {
            return (
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000'}}>
                  <Text style={{color: '#fff'}}>Loading ...</Text>  
                </View>   
            )
        }

    }
}