import React, {useState} from 'react';
import {Text, View, StyleSheet, ActivityIndicator, Button} from 'react-native';

const Loader = () => {
  const [show, setShow] = useState(false);
  const displayLoader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} animating={show} />
      <Button title="Loader" onPress={displayLoader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
