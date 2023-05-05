import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList, Button} from 'react-native';

const PostApiCall = () => {
  const getApiData = async () => {
    //api call
    const user = {
      userId: 101,
      id: 101,
      title: 'Praneeth21',
      body: 'Praneeth007',
    };
    const url = 'http://10.0.2.2:3000/data'; // api by praneeth
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user),
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>FlatList API</Text>
      <Button title="update Api" onPress={getApiData} />
    </View>
  );
};

export default PostApiCall;
