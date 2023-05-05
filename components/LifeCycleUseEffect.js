import React,{useEffect, useState} from 'react'
import { View,Text, Button } from 'react-native'
function LifeCycleUseEffect() {
  const[count,setcount]=useState(0)
  useEffect(()=>{
    console.warn("hello")
  },[])
  return (
    <View>
        <Text style={{fontSize:30}}>Life Cycle by UseEffect {count}</Text>
        <Button title='Update'onPress={()=>setcount(count+1)}/>
    </View>
  )
}

export default LifeCycleUseEffect