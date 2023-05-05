import React from 'react';
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

const SectionListData = () => {
  const Users = [
    {
      id: 1,
      name: 'Praneeth',
      data: ['reactjs', 'javaScript', 'React Native'],
    },
    {
      id: 2,
      name: 'Shyamala',
      data: ['html', 'bootstap', 'webFlow'],
    },
    {
      id: 3,
      name: 'Kishore',
      data: ['celeliuim', 'css', 'music'],
    },
    {
      id: 4,
      name: 'Divya',
      data: ['Gateby', 'c++', 'angular'],
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>SectionList React Native</Text>
      <ScrollView>
        <SectionList
          sections={Users}
          renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
          renderSectionHeader={({section: {name}}) => (
            <Text style={styles.text2}>{name}</Text>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#f9ca24',
    backgroundColor: '#686de0',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  text2: {
    fontSize: 25,
    color: 'white',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});

export default SectionListData;
