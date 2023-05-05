import React, {useState} from 'react';
import {Text, View, Button, StatusBar, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
const StatusbarRN = () => {
  return (<WebView source={{uri: 'https://reactnative.dev/'}} />)
};

export default StatusbarRN;
