import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const FormApiData = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSaveData = async () => {
    // Validate form fields
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!age) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!name || !age || !email) {
      return false;
    }

    // Convert age to number
    const ageNumber = parseInt(age, 10);

    // Send API request
    const url = 'http://10.0.2.2:3000/data';
    const data = {name, age: ageNumber, email};

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.warn(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>FlatList API</Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Enter Your Name"
        onChangeText={text => {
          setName(text);
          setNameError(false);
        }}
      />
      {nameError ? (
        <Text style={styles.errorText}>Enter a valid name</Text>
      ) : null}
      <TextInput
        style={styles.input}
        value={age}
        placeholder="Enter Your Age"
        keyboardType="numeric"
        onChangeText={text => {
          setAge(text);
          setAgeError(false);
        }}
      />
      {ageError ? (
        <Text style={styles.errorText}>Enter a valid age</Text>
      ) : null}
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Enter Your Email"
        onChangeText={text => {
          setEmail(text);
          setEmailError(false);
        }}
      />
      {emailError ? (
        <Text style={styles.errorText}>Enter a valid email</Text>
      ) : null}
      <Button title="Save Data" onPress={handleSaveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 2,
    margin: 20,
    marginBottom: 5,
    fontSize: 20,
  },
  errorText: {
    color: 'red',
    marginLeft: 20,
  },
});

export default FormApiData;
