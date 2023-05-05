import React, {useState} from 'react';
import {Text, View, Button, TouchableHighlight, StyleSheet} from 'react-native';

const ButtonStyle = () => {
  return (
    <View style={styles.main}>
      <Text style={{fontSize: 30}}>Touchable High Light</Text>
      <TouchableHighlight>
        <Text style={styles.btn}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.btn,styles.primary]}>primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.btn,styles.success]}>success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.btn,styles.warning]}>warning</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  btn: {
    color: 'black',
    backgroundColor: '#718093',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
    shadowOpacity: 1,
  },
  primary:{
backgroundColor:"#2e86de"
  },
  success:{
    backgroundColor:"#4cd137"

  },
  warning:{
    backgroundColor:"#e1b12c"

  }

});

export default ButtonStyle;
