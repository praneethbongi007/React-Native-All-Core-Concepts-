import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

const ListApi = () => {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    //api call
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <ScrollView>
      <Text style={{fontSize: 30}}>API React Native</Text>
      {data.length
        ? data.map(item => (
            <View
              style={{padding: 10, borderBottomColor: '#ccc', borderWidth: 2}}>
              <Text style={{fontSize: 20, backgroundColor: '#ddd'}}>
                ID: {item.id}
              </Text>
              <Text style={{fontSize: 20}}> Tittle: {item.title}</Text>
              <Text style={{fontSize: 20}}> Body: {item.body}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

export default ListApi;
