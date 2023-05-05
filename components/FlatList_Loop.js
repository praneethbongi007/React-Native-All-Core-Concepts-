import React from 'react';
import {Text, View, ScrollView, StyleSheet,FlatList} from 'react-native';

const FlatListLoopData = () => {
  const Users = [
    {
      id: 1,
      name: 'Praneeth',
      email: 'abc@gmail.com',
    },
    {
      id: 2,
      name: 'Shyamala',
      email: 'abc@gmail.com',
    },
    {
      id: 3,
      name: 'Kishore',
      email: 'abc@gmail.com',
    },
    {
      id: 4,
      name: 'Divya',
      email: 'abc@gmail.com',
    },
    {
      id: 5,
      name: 'uday',
      email: 'abc@gmail.com',
    },
    {
      id: 6,
      name: 'anil',
      email: 'abc@gmail.com',
    },
    {
      id: 7,
      name: 'swathi',
      email: 'abc@gmail.com',
    },
    {
      id: 8,
      name: 'akhila',
      email: 'abc@gmail.com',
    },
    {
      id: 9,
      name: 'Tabu',
      email: 'abc@gmail.com',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>FlatList Loop React Native</Text>
      <View>
          <FlatList
            data={Users}
            renderItem={({item}) =><UserDate item = {item}/> }
            keyExtractor={item => item.id}
          />
      </View>
    </View>
  );
};


const UserDate = (props)=>{
    const item = props.item
    return(
        <View style={styles.box}>
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.item}>{item.email}</Text>
        </View>
      )
}


const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    color: 'red',
    flex: 1,
    margin: 2,
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default FlatListLoopData;
