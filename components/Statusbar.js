import React, {useState} from 'react';
import {Text, View, Button, StatusBar, StyleSheet} from 'react-native';

const StatusbarRN = () => {
  const [hide, setHide] = useState(false);
  const [display, setDisplay] = useState('default');

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Statusbar React Native</Text>
      <StatusBar
        backgroundColor="#1dd1a1"
        barStyle={display} //color of icons
        hidden={hide} //remove status bar for true
      />
      <Button
        title="Toggle"
        onPress={() => {
          setHide(!hide);
        }}
      />
      <Button
        title="Update"
        onPress={() => {
          setDisplay('dark-content');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableBtn: {
    color: 'black',
    backgroundColor: '#718093',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
    shadowOpacity: 1,
  },
});
export default StatusbarRN;
