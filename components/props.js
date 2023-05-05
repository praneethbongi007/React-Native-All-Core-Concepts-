import React, {useState} from 'react';
import {Text, View, Button, Linking, StyleSheet, TextInput} from 'react-native';

const Props = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Props React Native</Text>
      <UserData name={'Praneeth007'} age={22} />
    </View>
  );
};

const UserData = props => {
  return (
    <View>
      <Text style={{fontSize: 20}}>{props.name}</Text>
      <Text style={{fontSize: 20}}>{props.age}</Text>
      <Text style={{fontSize: 20, color: 'red'}}>
        email:praneethbongi@gmail.com
      </Text>
    </View>
  );
};


export default Props