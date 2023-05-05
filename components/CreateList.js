import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

const CreateList = () => {
  const Users = [
    {
      id: 1,
      name: 'Praneeth',
    },
    {
      id: 2,
      name: 'Shyamala',
    },
    {
      id: 3,
      name: 'Kishore',
    },
    {
      id: 4,
      name: 'Divya',
    },
    {
      id: 5,
      name: 'uday',
    },
    {
      id: 6,
      name: 'anil',
    },
    {
      id: 7,
      name: 'swathi',
    },
    {
      id: 8,
      name: 'akhila',
    },
    {
      id: 9,
      name: 'Tabu',
    },
    {
      id: 10,
      name: 'Ajay',
    },
    {
      id: 11,
      name: 'Gopi',
    },
    {
      id: 12,
      name: 'Chaitanya',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>FlatList React Native</Text>
      <ScrollView style={{marginBottom:100}}>
        {Users.map(e => (
          <Text style={styles.text}>{e.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#f9ca24',
    backgroundColor: '#686de0',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});

export default CreateList;
