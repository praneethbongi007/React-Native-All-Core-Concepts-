import React, {useState, useRef} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const UseRefHook = () => {
  const input = useRef();
  const UpdatInput = () => {
    input.current.focus();
    input.current.setNativeProps({
      fontSize: 24,
      color: 'green',
    });
  };
  return (
    <View>
      <TextInput
        style={{
          borderColor: 'skyblue',
          borderWidth: 2,
          fontSize: 20,
          margin: 10,
        }}
        placeholder="Enter Name"
        ref={input}
      />
      <TextInput
        style={{
          borderColor: 'skyblue',
          borderWidth: 2,
          fontSize: 20,
          margin: 10,
        }}
        placeholder="Enter Password"
      />
      <Button title="Update User" onPress={UpdatInput} />
    </View>
  );
};

export default UseRefHook;
