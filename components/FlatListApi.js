import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';

const FlatListApi = () => {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    //api call
    const url = 'http://192.168.29.185:3000/data'; // api by praneeth
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <View>
      <Text style={{fontSize: 30}}>FlatList API</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{padding: 10, borderBottomColor: '#ccc', borderWidth: 2}}>
              <Text style={{fontSize: 20, backgroundColor: '#ddd'}}>
                {item.id}
              </Text>
              <Text style={{fontSize: 20}}> Tittle: {item.title}</Text>
              <Text style={{fontSize: 20}}> Body: {item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default FlatListApi;
