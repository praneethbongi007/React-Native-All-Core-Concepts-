import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

class ClassComp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Praneeth',
    };
  }

  fruit = () => {
    console.warn('Apple');
  };
  UpdateName(val){
 this.setState({name:val})

  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>{this.state.name}</Text>
        <TextInput placeholder="Enter Your Name" onChangeText={(text)=>this.UpdateName(text)} />
        <Button title="Press Me" onPress={this.fruit} />
      </View>
    );
  }
}

export default ClassComp;
