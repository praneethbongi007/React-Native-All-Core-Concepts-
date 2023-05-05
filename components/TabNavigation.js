import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function TabNavigation() {
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

export default TabNavigation;
