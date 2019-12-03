import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, ImageBackground, KeyboardAvoidingView, TextInput } from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Ionicons';
import Counter from "react-native-counters";

export default class AccountRenew extends Component {
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
            <View style={styles.container}>
                    {/* <StatusBar /> */}
                    <TouchableOpacity onPress={this._dismissKeyboard} activeOpacity={1} style={{flex: 1}}>
                    <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#eee'}}>
                        <ScrollView style={{paddingTop: 30}}>
                            <Text style={{textAlign: 'center', fontSize: 19, color: 'gray', padding: 15}}>Account Renewal Request</Text>
                            <View style={{padding: 18,}}>
                                <TextInput placeholder="Number of months." style={{padding: 14, backgroundColor: '#fff', borderRadius: 18, marginTop: 15, fontSize: 14 }} />

                                <View style={{padding: 14, backgroundColor: '#fff', borderRadius: 18, marginTop: 8, height: 200 }}>
                                  <TextInput placeholder="Type In your notes..." multiline style={{ fontSize: 14, }} />
                                </View>
                                

                                <TouchableOpacity activeOpacity={.7} style={{padding: 14, backgroundColor: '#000', borderRadius: 25, marginTop: 15}}>
                                    <Text style={{textAlign: 'center', color: '#fff', fontSize: 14}}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </TouchableOpacity>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#000'
  },
  greenContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  formContainer: {
      flex: 3,
      padding: 10,
      justifyContent: 'flex-start'
  },
  blueContainer: {
      flex: 1,
      alignItems: 'flex-start'
  },
  input: {
      flexDirection: 'row',
      justifyContent: this.lang == 'en' ? 'flex-start' : 'flex-end',
      padding: 10,
      borderBottomWidth: 2,
      borderColor: '#7bbe50',
      marginTop: 12,
      marginHorizontal: 17
  },
  loginBtn: {
      marginTop: 15,
      padding: 15,
      backgroundColor: '#7bbe50',
      alignItems: 'center',
      borderRadius: 25
  },
  loginbtnText: {
      color: '#fff',
  },
  forgotPassContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
  },
  createAccountContainer: {
      flex: 1,
      padding: 8,
      alignItems: 'center'
      
  }
})