import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

const DynamicGrid = () => {
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
      <Text style={{fontSize: 30}}>Dynamic Grid React Native</Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {/* <Text style={styles.item}>1</Text>
        <Text style={styles.item}>2</Text>
        <Text style={styles.item}>3</Text>
        <Text style={styles.item}>4</Text>
        <Text style={styles.item}>5</Text>
        <Text style={styles.item}>6</Text>
        <Text style={styles.item}>7</Text>
        <Text style={styles.item}>8</Text>
        <Text style={styles.item}>9</Text>
        <Text style={styles.item}>10</Text>
        <Text style={styles.item}>11</Text>
        <Text style={styles.item}>12</Text> */}
        <ScrollView>
          {Users.map(e => (
            <Text style={styles.item}>{e.name}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default DynamicGrid;
