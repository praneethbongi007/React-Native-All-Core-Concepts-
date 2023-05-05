import React, {useState} from 'react';
import {Text, View, Button, Linking, StyleSheet, TextInput} from 'react-native';
const fruit = val => {
  console.warn(val);
};
const App = () => {
  const [name1, setName1] = useState('');

;
  return (
    <View>
      <Text style={{fontSize: 30}}>Button & TextInput React Native</Text>
   
      <View style={styles.buttonContainer}>
        <Button
          color={'#1abc9c'}
          onPress={() => Linking.openURL('https://reactnative.dev/')}
          title="Sign in"
        />
      </View>
      <Button
        color={'#2c3e50'}
        onPress={() => fruit('hello Developers')}
        title="Sign in"
      />
      <Text style={{fontSize: 30}}>{name1}</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Name"
        value={name1}
        onChangeText={Text => setName1(Text)}
      />
      <Button color={'#1e3799'} onPress={() => setName1('')} title="Clear" />

    </View>
  );
};



const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 20,
    color: 'red',
    height: 50,
  },
  TextInput: {
    fontSize: 18,
    color: 'blue',
    borderColor: 'blue',
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    marginEnd: 10,
    marginLeft: 10,
  },
});
export default App;
