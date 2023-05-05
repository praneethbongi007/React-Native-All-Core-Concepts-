import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Responsive = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.innerbox1}></View>
        <View style={styles.innerbox2}></View>
        <View style={styles.innerbox3}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    backgroundColor: 'red',
    flex: 2,
    flexDirection: 'row',
  },
  box2: {
    backgroundColor: 'blue',
    flex: 1,
  },
  box3: {
    backgroundColor: 'green',
    flex: 1,
  },
  innerbox1: {
    backgroundColor: 'black',
    flex: 1,
    margin:10,

  },
  innerbox2: {
    backgroundColor: 'yellow',
    flex: 1,
    margin:10,

  },
  innerbox3: {
    backgroundColor: 'lightgreen',
    flex: 1,
    margin:10,
  },
});

export default Responsive;
