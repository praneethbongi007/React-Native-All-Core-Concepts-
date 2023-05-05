import React from 'react';
import {View, Text, Platform} from 'react-native';

function PlatForm() {
  return (
    <View>
      <Text style={{fontSize: 30}}>PlatForm : {Platform.OS}</Text>
      {Platform.OS == 'android' ? <View style={{backgroundColor:"green",width:100,height:100}}></View> :<View style={{backgroundColor:"Red",width:100,height:100}}></View>}
      <Text style={{fontSize: 30}}>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>

    </View>
  );
}

export default PlatForm;
