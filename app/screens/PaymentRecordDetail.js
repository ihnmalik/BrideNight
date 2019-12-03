import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import Counter from "react-native-counters";

export default class PaymentRecordDetail extends Component {
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
         <View style={{marginHorizontal: 9, marginVertical: 4, backgroundColor: 'white'}}>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 18, fontWeight: '200'}}>بيانات الدفعة</Text>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 15, fontWeight: '600', color: 'orange'}}>رقم العملية #12100</Text>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 15, fontWeight: '500', color: 'gray'}}>10-05-2019 12:00 PM</Text>
            <Text style={{fontSize: 18, color: '#DC143C', textAlign: 'center', fontWeight: '600', padding: 20}}>100 SAR الإجمالي</Text>
         </View>

         <View style={{marginHorizontal: 9, marginVertical: 2, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 14, fontWeight: '200'}}>Visa</Text>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 16}}>طريقة الدفع</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 14, fontWeight: '200', color: 'green'}}>Successful</Text>
                <Text style={{textAlign: 'center', padding: 10, fontSize: 16}}>حالة الدفعة</Text>
            </View>
         </View>
      </ScrollView>
    );
  }
}