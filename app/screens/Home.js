import React, {Component} from 'react';
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    Image,
    RefreshControl,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {getDefaultFontName, url} from '../utils/appsettings';
import {mapDispatchToProps, mapStateToProps} from "../utils/AppConnecter";
import {getLangOf, setComp} from "../App";


export class Home extends Component {
    static navigationOptions = {
        // title: 'color',
        // headerTitleStyle: { alignSelf: 'center' },
    };

    constructor(props) {
        super(props);
        setComp(this);
        this.state = {
            products: [],
            activeIndex: 0,
            tabs: [],
            isLoading: true,
            showError: false,
            errorMsg: '',
        };
        // this.classLangs = getLangOf(this);
        this.classLangs = getLangOf();
    };

    componentDidMount() {
        this.loadCategories();
    };

    _setActive = index => {
        this.setState({activeIndex: index, isLoading: true});
        this.loadProductsByCatID(index);
    };

    loadProductsByCatID = id => {
        fetch(`${url}shop/product/category/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
                Language: this.props.language.lang,
            },
            // body: post
        })
            .then(r => r.json())
            .then(re => {
                // alert(JSON.stringify(re))
                if (re.error) {
                    return this.setState({
                        showError: true,
                        errorMsg: re.message,
                        isLoading: false,
                    });
                }
                if (re.errors) {
                    let err;
                    for (err in re.errors) {
                        let $err = err;
                        this.setState({
                            showError: true,
                            errorMsg: re.errors[$err],
                            isLoading: false,
                        });
                    }
                    return;
                } else {
                    this.setState({products: re.data, isLoading: false});
                }
            });
    }; // end of loadProductsByCatID()

    loadCategories = () => {
        fetch(url + 'shop/category', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
                Language: this.props.language.lang,
            },
            // body: post
        })
            .then(r => r.json())
            .then(re => {
                // alert(JSON.stringify(re.data.length))
                if (re.error) {
                    return this.setState({showError: true, errorMsg: re.message});
                }
                if (re.errors) {
                    let err;
                    for (err in re.errors) {
                        this.setState({showError: true, errorMsg: re.errors[err]});
                    }
                    return;
                } else {
                    this.setState({tabs: re.data, activeIndex: re.data[0].id});
                    this.loadProductsByCatID(this.state.activeIndex);
                }
            });
    }; // end of loadCategories()

    render() {
        const {lang /*, strings*/} = this.props.language;
        // const {home_tab} = strings;
        this.lang = lang;
        // alert(JSON.stringify(home_tab))

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#000" barStyle="light-content"/>
                <View>
                    <ScrollView
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={{
                            width: '100%',
                            alignSelf: 'center',
                            backgroundColor: '#fff',
                        }}>
                        {this.state.tabs.map(tab => {
                            return (
                                <TouchableOpacity
                                    onPress={() => this._setActive(tab.id)}
                                    activeOpacity={0.8}
                                    key={tab.id}
                                    style={{
                                        backgroundColor: '#000',
                                        width: Dimensions.get('window').width / 3,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 40,
                                        borderBottomWidth: this.state.activeIndex == tab.id ? 4 : 0,
                                        borderBottomColor: '#eee',
                                    }}>
                                    <Text
                                        style={{
                                            color: this.state.activeIndex == tab.id ? '#eee' : '#fff',
                                            ...getDefaultFontName(),
                                        }}>
                                        {tab.name}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                </View>

                <View style={{flex: 3}}>
                    {this.state.isLoading == false ? (
                        <FlatList
                            data={this.state.products}
                            style={{flex: 1}}
                            numColumns={2}
                            ListEmptyComponent={
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: '45%',
                                    }}>
                                    <Text style={{color: 'gray', fontSize: 17}}>
                                        This is an empty section
                                    </Text>
                                </View>
                            }
                            renderItem={({item}) => (
                                <View style={{width: '50%'}}>
                                    <TouchableOpacity
                                        activeOpacity={0.9}
                                        onPress={() =>
                                            this.props.navigation.navigate('ProductDetail', {
                                                item: item,
                                            })
                                        }
                                        style={{
                                            flex: 1,
                                            borderRadius: 4,
                                            alignItems: 'center',
                                            backgroundColor: '#fff',
                                            flexDirection: 'column',
                                            padding: 2,
                                        }}>
                                        <Image
                                            style={styles.imageThumbnail}
                                            resizeMode="stretch"
                                            source={{uri: item.avatar}}
                                        />
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                ...getDefaultFontName(),
                                                padding: 5,
                                                fontSize: 17,
                                            }}>
                                            {item.name}
                                        </Text>

                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                paddingVertical: 5,
                                                justifyContent: 'space-evenly',
                                                alignItems: 'center',
                                                alignSelf: 'flex-start',
                                            }}>
                                            <TouchableOpacity
                                                style={{
                                                    flex: 1,
                                                    padding: 4,
                                                    backgroundColor: '#000',
                                                    borderBottomRightRadius: 15,
                                                    borderTopRightRadius: 15,
                                                }}>
                                                <Text
                                                    style={{
                                                        textAlign: 'center',
                                                        color: '#fff',
                                                        fontSize: 12,
                                                    }}>
                                                    Add To Cart
                                                </Text>
                                            </TouchableOpacity>
                                            <View
                                                style={{
                                                    flex: 1,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}>
                                                <Text
                                                    style={{
                                                        textAlign: 'center',
                                                        color: 'gray',
                                                        fontSize: 17,
                                                        fontWeight: 'bold',
                                                    }}>
                                                    {item.price >= 1 ? 'SAR ' + item.price : 'FREE'}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this._refresh}
                                    colors={['#7bbe50', '#188ee1']}
                                />
                            }
                            keyExtractor={(item, index) => index}
                        />
                    ) : (
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text>{this.state.errorMsg ? this.errorMsg : ''}</Text>
                            <ActivityIndicator size="small" color="#303031"/>
                        </View>
                    )}
                </View>
            </View>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imageThumbnail: {
        width: '100%',
        height: 180,
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
        backgroundColor: '#1B83CD',
    },
});
