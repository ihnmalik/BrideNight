import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native';


// #7bbe50 green
// #188ee1 blue
export default class AddArticleComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      comment: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.formContainer}>
            {/* <TextInput
                keyboardType="email-address"
                onChangeText={(email) => this.setState({email})}
                autoCapitalize="none"
                value={this.state.email}
                placeholder="Type in Your Email..."
                style={styles.emailInput}
              /> */}
            <TextInput
              editable={true}
              multiline={true}
              keyboardType="twitter"
              numberOfLines={15}
              maxLength={300}
              autoFocus={true}
              onChangeText={(comment) => this.setState({comment})}
              value={this.state.comment}
              placeholder="أضف نص التعليق"
              style={styles.commentInput}
            />
            <TouchableOpacity onPress={() => Keyboard.dismiss()} activeOpacity={.8} style={styles.submitBtn}>
              <Text style={styles.submitBtnText}>إضافة تعليق</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  formContainer: {
    padding: 15
  },
  emailInput: {
    padding: 16,
    borderWidth: 1, 
    borderColor: '#7bbe50',
    borderRadius: 15
  },
  commentInput: {
    marginTop: 5,
    padding: 10,
    height: 120,
    color: 'gray',
    borderWidth: 1,
    fontSize: 14,
    textAlign: 'right',
    borderColor: '#7bbe50',
    borderRadius: 15
  },
  submitBtn: {
    marginTop: 8,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: '#7bbe50',
    borderRadius: 25
  },
  submitBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  }
});