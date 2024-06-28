import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MainPage from './src/screens/MainPage';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <LoginScreen />
        {/* <RegisterScreen /> */}
        {/* <MainPage /> */}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
