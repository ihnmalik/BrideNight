import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import Counter from "react-native-counters";

export default class MyOrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      lang: 'en',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    };
  } // end of constructor

  

  componentDidMount() {

  } // componentDidMount()

  render() {
      const {navigation} = this.props;

    return (
      <ScrollView style={{flex: 1, backgroundColor: '#eee'}}>
         <View style={{marginHorizontal: 9, marginVertical: 6, backgroundColor: 'white'}}>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 18, fontWeight: '200'}}>بيانات الطلب</Text>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 15, fontWeight: '600', color: 'orange'}}>Order #1203</Text>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 15, fontWeight: '500', color: 'gray'}}>10-05-2019 12:00 PM</Text>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 15, fontWeight: '500', color: 'gray'}}>Total: 200 SAR</Text>
         </View>
            {
                [1].map((i) => {
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
                              <Image source={{uri: 'https://girab7wa.com/wp-content/uploads/2018/11/%D8%B5%D9%88%D8%B1-%D8%A3%D8%AD%D8%AF%D8%AB-%D9%85%D9%83%D9%8A%D8%A7%D8%AC-%D9%84%D9%84%D8%B9%D9%8A%D9%88%D9%86-2019-%D9%86%D8%B5%D8%A7%D8%A6%D8%AD-%D9%84%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D9%85%D9%83%D9%8A%D8%A7%D8%AC-%D8%A7%D9%84%D8%B9%D9%8A%D9%88%D9%86-10-780x405.jpg'}} style={{width: 120, height: 120}} />
                           </View>
                        </View>
                      </View>              
                    )
                })
            }

         <View style={{marginHorizontal: 9, marginVertical: 4, backgroundColor: 'white'}}>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 18, fontWeight: '200'}}>بيانات الشحن</Text>
         </View>

         <View style={{marginHorizontal: 9, marginVertical: 2, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 14, fontWeight: '200'}}>BananTec</Text>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 18}}>اسم المستلم</Text>
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
                <Text style={{textAlign: 'center', padding: 10, fontSize: 14, fontWeight: '200'}}>BrideNIGHT</Text>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 16}}>كود الخصم</Text>
            </View>

            <View>
                <Text style={{textAlign: 'right', padding: 10, fontSize: 16}}>ملاحظات الطلب</Text>
                <Text style={{textAlign: 'right', padding: 10, fontSize: 14, fontWeight: '200'}}>No notes were recorded</Text>
            </View>
         </View>

         <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 9, marginVertical: 4, backgroundColor: 'white'}}>
            <TouchableOpacity style={{flex: 1, backgroundColor: '#000', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 16, color: '#fff', fontWeight: '200'}}>تواصل مع الإدارة</Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
    );
  }
}