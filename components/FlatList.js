import React from 'react';
import {Text, View, Button, Linking, StyleSheet, TextInput,FlatList} from 'react-native';

const FlatListData = () => {
    const Users = [
        {
            id:1,
            name:"Praneeth"
        },
        {
            id:2,
            name:"Shyamala"
        },
        {
            id:3,
            name:"Kishore"
        },
        {
            id:4,
            name:"Divya"
        },
    ]
  return (
    <View>
      <Text style={{fontSize: 30}}>FlatList React Native</Text>
      <FlatList data={Users} renderItem={({item})=><Text style={styles.text}>{item.name}</Text>} keyExtractor={item=>item.id}/>
      
    </View>
  );
};


const styles= StyleSheet.create({
text:{fontSize: 20,color:"#f9ca24",backgroundColor:"#686de0",borderColor:"black",borderWidth:1,padding:10,margin:10}

})







export default FlatListData;
