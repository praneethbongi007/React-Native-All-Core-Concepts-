import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
function ComponentDidMount() {
  const [count, setcount] = useState(0);
  const [Data, setData] = useState(100);

//   useEffect(() => {
//     console.warn(count);
//   }, [count]);
//   useEffect(() => {
//     console.warn(Data);
//   }, [Data]);
  return (
    <View>
      <Text style={{fontSize: 30}}>
        {Data} ComponentDidMount {count}
      </Text>
      <Button title="Update Count" onPress={() => setcount(count + 1)} />
      <Button title="Update Data" onPress={() => setData(Data + 1)} />
      <UserComponentDidMount info={{Data, count}} />
    </View>
  );
}

function UserComponentDidMount(props) {
  useEffect(() => {
    console.warn('run this if data is there');
  }, [props.info.Data]);
  useEffect(() => {
    console.warn('run this if count is there');
  }, [props.info.count]);
  return (
    <View>
      <Text style={{fontSize: 30}}>Data: {props.info.Data}</Text>
      <Text style={{fontSize: 30}}>Count: {props.info.count}</Text>
    </View>
  );
}

export default ComponentDidMount;
