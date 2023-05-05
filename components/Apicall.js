import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const Api = () => {
  const [data, setData] = useState(undefined);
  const getApiData = async () => {
    //api call
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>API React Native</Text>
      {data ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20}}>{data.id}</Text>
          <Text style={{fontSize: 20, color: 'red'}}>{data.title}</Text>
          <Text style={{fontSize: 20, color: 'green'}}>{data.body}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Api;
