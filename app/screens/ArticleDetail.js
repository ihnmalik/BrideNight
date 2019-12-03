import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
    
  }



  render() {
    return (
      <ScrollView>
            <View style={{position: 'relative'}}>
                <Image style={{width: '100%', height: 210}} resizeMode="cover" source={{uri: 'https://www.dubaitaxi.ae/-/media/DTC/Images/Services/Special-Needs-Taxi-min.jpg'}}></Image>
                <View style={{position: 'absolute', bottom: 0, width: '100%', height: 55, backgroundColor: 'rgba(0,0,0,.5)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                  <TouchableOpacity activeOpacity={1} style={{flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 15, padding: 3}}>
                                        <Text style={{color: '#fff', fontSize:22, margin: 8}}>30M</Text> 
                                        <Icon
                                          name="eyeo"
                                          color="#fff"
                                          size={30}
                                          style={{ marginVertical: Platform.OS == 'android' ? 8 : 0}}
                                        />                              
                                  </TouchableOpacity>
                                  <TouchableOpacity activeOpacity={.6} style={{flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 15, padding: 3}}>
                                        <Icon
                                          onPress={() => this.setState({liked: !this.state.liked})}
                                          name={this.state.liked ? 'heart' : 'hearto'}
                                          color="#fff"
                                          size={27}
                                        />                                
                                  </TouchableOpacity>
                </View>
            </View>
            <Text style={{textAlign: 'center', fontSize: 20, marginVertical: 10, color: '#7bbe50'}}>عنوان المقالة هو عنوان التطبيق؟</Text>
            <Text style={{textAlign: 'center', lineHeight: 25, fontSize: 15, color: 'gray', margin: 5}}>
                وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
                يآخر أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟  


                                وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
                يآخر أراد أن يتجنب الألم الذي ربما تنجم عنه بعض المتعة ؟  
            </Text>
            <View style={{height: 1, backgroundColor: '#eee', width: '95%', marginVertical: 10, alignSelf: 'center'}}></View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddArticleComment')} activeOpacity={.7} style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'space-around', width: 120, borderWidth: 1, borderColor: '#7bbe50', borderRadius: 25, margin: 6}}>
                     <Text style={{textAlign: 'right', fontSize: 13, color: '#7bbe50'}}>أضف تعليقاً</Text>
                     <Icon
                        name="message1"
                        color="#7bbe50"
                        size={13}/> 
                </TouchableOpacity>
               <Text style={{textAlign: 'right', fontSize: 15, margin: 10, color: '#7bbe50'}}>التعليقات: </Text> 
            </View>
            
            <View>
                     <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 10, backgroundColor: '#f7f7f7',marginBottom: 1}}>
                        <View style={{padding: 4}}>
                          <Text style={{color: 'gray', textAlign: 'right'}}>بنان التقنية</Text>
                          <View style={{width: '94%', alignSelf: 'flex-end'}}>
                              <Text style={{flexWrap: 'wrap', color: 'gray',textAlign: 'right', fontSize: 13}}> ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال</Text>
                          </View>
                        </View>
                        <View>
                          <Image style={{width: 50, height: 50}} source={{uri: 'https://pbs.twimg.com/profile_images/1026770106100146181/tvLOXUQV_400x400.jpg'}}></Image>    
                        </View>
                     </View>
                     {/* End of Template */}
                     <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 10, backgroundColor: '#f7f7f7',marginBottom: 1}}>
                        <View style={{padding: 4}}>
                          <Text style={{color: 'gray', textAlign: 'right'}}>بنان التقنية</Text>
                          <View style={{width: '94%', alignSelf: 'flex-end'}}>
                              <Text style={{flexWrap: 'wrap', color: 'gray',textAlign: 'right', fontSize: 13}}> ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال</Text>
                          </View>
                        </View>
                        <View>
                          <Image style={{width: 50, height: 50}} source={{uri: 'https://pbs.twimg.com/profile_images/1026770106100146181/tvLOXUQV_400x400.jpg'}}></Image>    
                        </View>
                     </View>

                     <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 10, backgroundColor: '#f7f7f7',marginBottom: 1}}>
                        <View style={{padding: 4}}>
                          <Text style={{color: 'gray', textAlign: 'right'}}>بنان التقنية</Text>
                          <View style={{width: '94%', alignSelf: 'flex-end'}}>
                              <Text style={{flexWrap: 'wrap', color: 'gray',textAlign: 'right', fontSize: 13}}> ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال</Text>
                          </View>
                        </View>
                        <View>
                          <Image style={{width: 50, height: 50}} source={{uri: 'https://pbs.twimg.com/profile_images/1026770106100146181/tvLOXUQV_400x400.jpg'}}></Image>    
                        </View>
                     </View>

                     <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 10, backgroundColor: '#f7f7f7',marginBottom: 1}}>
                        <View style={{padding: 4}}>
                          <Text style={{color: 'gray', textAlign: 'right'}}>بنان التقنية</Text>
                          <View style={{width: '94%', alignSelf: 'flex-end'}}>
                              <Text style={{flexWrap: 'wrap', color: 'gray',textAlign: 'right', fontSize: 13}}> ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال</Text>
                          </View>
                        </View>
                        <View>
                          <Image style={{width: 50, height: 50}} source={{uri: 'https://pbs.twimg.com/profile_images/1026770106100146181/tvLOXUQV_400x400.jpg'}}></Image>    
                        </View>
                     </View>

                     <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 10, backgroundColor: '#f7f7f7',marginBottom: 1}}>
                        <View style={{padding: 4}}>
                          <Text style={{color: 'gray', textAlign: 'right'}}>بنان التقنية</Text>
                          <View style={{width: '94%', alignSelf: 'flex-end'}}>
                              <Text style={{flexWrap: 'wrap', color: 'gray',textAlign: 'right', fontSize: 13}}> ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال</Text>
                          </View>
                        </View>
                        <View>
                          <Image style={{width: 50, height: 50}} source={{uri: 'https://pbs.twimg.com/profile_images/1026770106100146181/tvLOXUQV_400x400.jpg'}}></Image>    
                        </View>
                     </View>

                     <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 10, backgroundColor: '#f7f7f7',marginBottom: 1}}>
                        <View style={{padding: 4}}>
                          <Text style={{color: 'gray', textAlign: 'right'}}>بنان التقنية</Text>
                          <View style={{width: '94%', alignSelf: 'flex-end'}}>
                              <Text style={{flexWrap: 'wrap', color: 'gray',textAlign: 'right', fontSize: 13}}> ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال</Text>
                          </View>
                        </View>
                        <View>
                          <Image style={{width: 50, height: 50}} source={{uri: 'https://pbs.twimg.com/profile_images/1026770106100146181/tvLOXUQV_400x400.jpg'}}></Image>    
                        </View>
                     </View>

                     <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 10, backgroundColor: '#f7f7f7',marginBottom: 1}}>
                        <View style={{padding: 4}}>
                          <Text style={{color: 'gray', textAlign: 'right'}}>بنان التقنية</Text>
                          <View style={{width: '94%', alignSelf: 'flex-end'}}>
                              <Text style={{flexWrap: 'wrap', color: 'gray',textAlign: 'right', fontSize: 13}}> ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال</Text>
                          </View>
                        </View>
                        <View>
                          <Image style={{width: 50, height: 50}} source={{uri: 'https://pbs.twimg.com/profile_images/1026770106100146181/tvLOXUQV_400x400.jpg'}}></Image>    
                        </View>
                     </View>

                     <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 10, backgroundColor: '#f7f7f7',marginBottom: 1}}>
                        <View style={{padding: 4}}>
                          <Text style={{color: 'gray', textAlign: 'right'}}>بنان التقنية</Text>
                          <View style={{width: '94%', alignSelf: 'flex-end'}}>
                              <Text style={{flexWrap: 'wrap', color: 'gray',textAlign: 'right', fontSize: 13}}> ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال</Text>
                          </View>
                        </View>
                        <View>
                          <Image style={{width: 50, height: 50}} source={{uri: 'https://pbs.twimg.com/profile_images/1026770106100146181/tvLOXUQV_400x400.jpg'}}></Image>    
                        </View>
                     </View>                   
            </View>
      </ScrollView>
    );
  }
}