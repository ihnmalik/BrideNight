import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import Counter from "react-native-counters";

export default class EndOrderFinishReciept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      lang: 'en',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    };
  }

  componentDidMount() {

  } // componentDidMount()

  render() {
      const {navigation} = this.props;

    return (
      <ScrollView style={{flex: 1, backgroundColor: '#eee'}}>
        {/* <View style={{marginHorizontal: 9, marginVertical: 6, backgroundColor: 'white'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#eee', padding: 5}}>
            <TouchableOpacity activeOpacity={.8} style={{flex: 1, padding: 1, width: 120, height: 35, backgroundColor: '#000', justifyContent: 'center', borderRadius: 20}} onPress={() => this.props.navigation.navigate('EndOrderUserInfo')}>
                  <Text style={{color: '#fff', textAlign: 'center', fontSize: 12}}>Check Out</Text>
            </TouchableOpacity> 

            <View style={{flex: 2, flexWrap: 'wrap'}}>
                <Text style={{paddingHorizontal: 8, textAlign: 'right', fontSize: 16, marginVertical: 10, color: '#000'}}><Text>المجموع الكلي: </Text> 120$ </Text>
            </View>
          </View>
        </View> */}

         <View style={{marginHorizontal: 9, marginVertical: 6, backgroundColor: 'white'}}>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 18, fontWeight: '200'}}>بيانات الطلب</Text>
         </View>
            {
                [1,2,4].map((i) => {
                    return (
                        <View key={i} style={{ marginHorizontal: 9, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#eee',}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                           <View style={{flex: 2, padding: 4}}>
                              <View style={{marginVertical: 4, alignItems: 'flex-end'}}>
                                   <Text style={{fontSize: 21, marginVertical: 3,  color: '#000', fontWeight: '500', textAlign: 'left'}}>مكياج 1</Text>
                                   <Text style={{fontSize: 18, marginVertical: 3,  color: 'gray', fontWeight: '200', textAlign: 'left'}}>$200</Text>
                              </View>
              
                             <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                                <View>
                                  <TouchableOpacity activeOpacity={.8} style={{ padding: 3,  backgroundColor: '#fff', justifyContent: 'center', borderWidth: 1, borderColor: '#f00', borderRadius: 5}}>
                                      <Text  style={{color: '#f00', textAlign: 'center', fontSize: 12}}>Remove</Text>
                                  </TouchableOpacity>  
                                </View>
              
                                <View>
                                  <Counter textColor="gray" touchableColor="gray" min={1} max={20} start={1} />
                                </View>
                             </View>
                           </View>
                           <View style={{flex: 1}}>
                              <Image source={{uri: 'https://www.3roos.com/wp-content/uploads/2019/07/0-37-750x460.jpg'}} style={{width: 120, height: 120}} />
                           </View>
                        </View>
                      </View>              
                    )
                })
            }

         <View style={{marginHorizontal: 9, marginVertical: 4, backgroundColor: 'white'}}>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 18, fontWeight: '200'}}>بيانات المستخدم</Text>
         </View>

         <View style={{marginHorizontal: 9, marginVertical: 2, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 14, fontWeight: '200'}}>BananTec</Text>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 18}}>اسم المستخدم</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 14, fontWeight: '200'}}>+966550449234</Text>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 18}}>الجوال</Text>
            </View>
            <View>
                <Text style={{textAlign: 'right', padding: 10, fontSize: 18}}>عنوان الشحن</Text>
                <Text style={{textAlign: 'right', padding: 10, fontSize: 14, fontWeight: '200'}}>الرياض - مخرج 11 شارع عبدالرحمن الغافقي</Text>
            </View>
         </View>

         <View style={{marginHorizontal: 9, marginVertical: 4, backgroundColor: 'white'}}>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 18, fontWeight: '200'}}>بيانات الدفع</Text>
         </View>

         <View style={{marginHorizontal: 9, marginVertical: 2, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 14, fontWeight: '200'}}>Visa</Text>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 16}}>طريقة الدفع</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 14, fontWeight: '200'}}>BANANTEC AL RIYADH</Text>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 16}}>اسم حامل البطاقة</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 14, fontWeight: '200'}}>2103493200032030202</Text>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 16}}>رقم البطاقة</Text>
            </View>
            <View>
                <Text style={{textAlign: 'right', padding: 10, fontSize: 16}}>ملاحظات الطلب</Text>
                <Text style={{textAlign: 'right', padding: 10, fontSize: 14, fontWeight: '200'}}>الرياض - مخرج 11 شارع عبدالرحمن الغافقي</Text>
            </View>
         </View>

         <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 9, marginVertical: 4, backgroundColor: 'white'}}>
            <View style={{flex: 1}}>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 15}}>Total</Text>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 13, fontWeight: '200'}}>100 SAR</Text>
            </View>
            <TouchableOpacity style={{flex: 1, backgroundColor: '#000', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 16, color: '#fff', fontWeight: '200'}}>إنهاء الطلب</Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
    );
  }
}