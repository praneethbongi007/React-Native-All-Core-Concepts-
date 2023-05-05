import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Radio = () => {
  const [radio, setRadio] = useState(1);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setRadio(1)}>
        <View style={styles.radiowraper}>
          <View style={styles.radio}>
            {radio === 1 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRadio(2)}>
        <View style={styles.radiowraper}>
          <View style={styles.radio}>
            {radio === 2 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: '#341f97',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radiowraper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: '#10ac84',
    width: 28,
    height: 28,
    borderRadius: 20,
    margin: 4,
  },
});

export default Radio;
