import React, {useState} from 'react';
import {Text, View, Button, Pressable, StyleSheet} from 'react-native';

const PressableBtn = () => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => console.warn('on press')}
        onLongPress={() => console.warn('on Long press')}
        onPressIn={() => console.warn('on press In')}
        onPressOut={() => console.warn('on press Out')}>
        <Text style={styles.pressableBtn}>Hello world</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  pressableBtn: {
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

});

export default PressableBtn;
