import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const SearchApi = () => {
  const [data, setData] = useState([]);

  const SearchInput = async text => {
    const url = `http://10.0.2.2:3000/users?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };
  return (
    <View>
      <TextInput
        style={{borderColor: 'skyblue', borderWidth: 2, fontSize: 20,margin:10}}
        placeholder="Search"
        onChangeText={text => SearchInput(text)}
      />
      {data.length
        ? data.map(item => (
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
              key={item.id}>
              <Text style={{fontSize: 20}}>{item.name}</Text>
              <Text style={{fontSize: 20}}>{item.age}</Text>
              <Text style={{fontSize: 20}}>{item.email}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default SearchApi;
