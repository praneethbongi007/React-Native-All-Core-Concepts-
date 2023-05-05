import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const ClearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setDisplay(false);
  };

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View>
      <Text style={styles.Text}>Simple Form Using React Native</Text>
      <TextInput
        style={styles.TextInput}
        value={name}
        placeholder="Enter User Name"
        onChangeText={(Text) => setName(Text)}
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          value={password}
          placeholder="Enter User Password"
          secureTextEntry={hidePassword}
          onChangeText={(Text) => setPassword(Text)}
        />
        <Icon
          name={hidePassword ? 'eye-slash' : 'eye'}
          size={20}
          color={'grey'}
          onPress={togglePasswordVisibility}
        />
      </View>
      <TextInput
        style={styles.TextInput}
        value={email}
        placeholder="Enter User Email"
        onChangeText={(Text) => setEmail(Text)}
      />
      <View style={styles.buttonContainer}>
        <Button
          color={'#1abc9c'}
          title="Print"
          onPress={() => setDisplay(true)}
        />
        <Button title="Clear" onPress={() => ClearForm('')} />
      </View>
      <View>
        {display ? (
          <View>
            <Text style={styles.Text}>User Name is: {name}</Text>
            <Text style={styles.Text}>User Password is: {password}</Text>
            <Text style={styles.Text}>User Email is: {email}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    color: '#0a3d62',
  },
  TextInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
    marginTop: 20,
    gap: 50,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight:10,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
    paddingLeft: 5,
  },
  passwordInput: {
    flex: 1,
  },
});

export default Form;
