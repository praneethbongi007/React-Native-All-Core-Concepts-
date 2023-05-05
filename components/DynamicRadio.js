import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const DynamicRadio = () => {
  const [radio, setRadio] = useState(1);
  const Skills = [
    {
      id: 1,
      name: 'React',
    },
    {
      id: 2,
      name: 'java',
    },
    {
      id: 3,
      name: 'Node',
    },
    {
      id: 4,
      name: 'Php',
    },
    {
      id: 5,
      name: 'Sql',
    },
  ];
  return (
    <View style={styles.container}>
      {Skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setRadio(item.id)}>
          <View style={styles.radiowraper}>
            <View style={styles.radio}>
              {radio === item.id ? <View style={styles.radioBg}></View> : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
  marginBottom: 10,
},

  radioBg: {
    backgroundColor: '#10ac84',
    width: 28,
    height: 28,
    borderRadius: 20,
    margin: 4,
  },
});

export default DynamicRadio;
