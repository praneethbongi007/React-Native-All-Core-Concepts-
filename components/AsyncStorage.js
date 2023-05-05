import React, {useState, useRef} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AsyncStorageComp = () => {
  const [data, setDataa] = useState('');

  const setData = async () => {
    await AsyncStorage.setItem('name', 'praneeth');
  };
  const getData = async () => {
    const name = await AsyncStorage.getItem('name');
    console.warn(name);
    setDataa(name);
  };
  const removeData = async () => {
    await AsyncStorage.removeItem('name');
    setDataa('');
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>Name:{data}</Text>
      <Button title="set Data" onPress={setData} />
      <Button title="get Data" onPress={getData} />
      <Button title="Remove Data" onPress={removeData} />
    </View>
  );
};

export default AsyncStorageComp;
