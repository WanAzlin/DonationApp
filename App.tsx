import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MainPage from './src/screens/MainPage';
import MainNavigation from './src/navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import DetailScreen from './src/screens/DetailScreen';
import DonateScreen from './src/screens/DonateScreen';
// import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
      {/* <LoginScreen /> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
