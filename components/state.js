import React, {useState} from 'react';
import {Text, View, Button, Linking, StyleSheet, TextInput} from 'react-native';

const State = () => {
  const [name, setName] = useState('Praneeth');

  const ChangeName = () => {
    setName('Shyamala');
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>State React Native</Text>
      
      <Text style={{fontSize: 30}}>{name}</Text>

      <Button
        color={'#1e3799'}
        onPress={() => ChangeName()}
        title="Change Name"
      />
    </View>
  );
};




export default State;
