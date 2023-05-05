import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

function TopNavTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Login = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login React Native</Text>
    </View>
  );
};

const SignUp = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Signup React Native</Text>
    </View>
  );
};

export default TopNavTab;
