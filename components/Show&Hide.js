import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Button,
  Linking,
  StyleSheet,
  TextInput,
  SectionList,
  ScrollView,
} from 'react-native';

const Toggle = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 30}}>Show Hide Toggle</Text>
      {show ? <User /> : null}

      <Button title="Toggle" onPress={() => setShow(!show)} />
    </View>
  );
};

const User = () => {
  let timer = setInterval(() => {
    console.warn('Timer Called');
  }, 2000);

  useEffect(() => {
    return () => clearInterval(timer);
  });
  return (
    <View>
      <Text style={{fontSize: 30}}>User Component</Text>
    </View>
  );
};

export default Toggle;
