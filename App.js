import React from 'react';
import {Text, View, Button, Linking, StyleSheet, TextInput} from 'react-native';
import Form from './components/Form';
import FlatListData from './components/FlatList';
import CreateList from './components/CreateList';
import DynamicGrid from './components/DynamicGrid';
import FlatListLoopData from './components/FlatList_Loop';
import SectionListData from './components/SectionList';
import ClassComp from './components/ClassComp';
import LifeCycleUseEffect from './components/LifeCycleUseEffect';
import ComponentDidMount from './components/ComponentDidMount';
import Toggle from './components/Show&Hide';
import Responsive from './components/ResponsiveUi';
import ButtonStyle from './components/ButtonStyles';
import Radio from './components/Radio';
import DynamicRadio from './components/DynamicRadio';
import Loader from './components/Loader';
import DialogBox from './components/DilogBox';
import PressableBtn from './components/Pressable';
import StatusbarRN from './components/Statusbar';
import PlatForm from './components/PlatForm';
import WebView from 'react-native-webview';
import StackNavigation from './components/StackNavigation';
import TabNavigation from './components/TabNavigation';
import TopNavTab from './components/TopNavTab';
import Api from './components/Apicall';
import ListApi from './components/ListApi';
import FlatListApi from './components/FlatListApi';
import PostApiCall from './components/PostApiCall';
import FormApiData from './components/PostDynamicApi';
import ListApiData from './components/ListApiData';
import SearchApi from './components/SearchApi';
import UseRefHook from './components/Useref';
import AsyncStorageComp from './components/AsyncStorage';
const App = () => {
  return (
    <>
      {/* <Form /> 
       <FlatListData /> 
       <CreateList/>
      
      <DynamicGrid />
      <FlatListLoopData />
      <SectionListData/>
       <ClassComp/>
      <LifeCycleUseEffect />
       <ComponentDidMount/>
      <Toggle />
      <Responsive />
      <ButtonStyle/>
       <Radio/>
      <DynamicRadio />
      <Loader />
       <DialogBox/>
      <PressableBtn />
      <StatusbarRN />
      <PlatForm />
      <WebView />
      <WebView source={{uri: 'https://reactnative.dev/'}} />
       <StackNavigation/>
       <TabNavigation />
      <TopNavTab />
      <Api />
      <ListApi/>
      <FlatListApi />
      <PostApiCall/>
      <FormApiData />
      <ListApiData />
    <SearchApi/>
    <UseRefHook/>
    */}
    <AsyncStorageComp/>
    </>
  );
};

export default App;
