import React, { useState } from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const stack = createNativeStackNavigator();

function StackNavigation() {
  const BtnAction = () => {
    console.warn('Right Nav');
  };
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#00d2d3',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}>
        <stack.Screen
          options={{
            headerTitle: () => <Button title="Nav" onPress={BtnAction} />,
            headerRight: () => <Header />,

            headerStyle: {
              backgroundColor: '#00d2d3',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
          name="home"
          component={Home}
        />
        <stack.Screen name="Login" component={Login} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const Home = props => {
    const [name,setName] = useState("")

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home React Native</Text>
      <TextInput
        style={{fontSize: 25, borderColor: 'black', borderWidth: 2}}
        placeholder="Enter your Name"
        onChangeText={(text)=>setName(text)}
      />
      <Button
        title="go to login"
        onPress={() =>
          props.navigation.navigate('Login', {name: name, age: 22})
        }
      />
    </View>
  );
};

const Login = props => {
  console.warn(props.route.params);
  const {name, age} = props.route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login React Native</Text>
      <Text style={{fontSize: 30}}>Name:{name}</Text>
      <Text style={{fontSize: 30}}>Age:{age}</Text>

    </View>
  );
};

const Header = () => {
  return <TextInput placeholder="Search" title="Btn" />;
};

export default StackNavigation;
