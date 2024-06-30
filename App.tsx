import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MainPage from './src/screens/MainPage';
import MainNavigation from './src/navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
// import 'react-native-gesture-handler';
const App = () => {
  return (
    <SafeAreaView>
      <View>
        <MainPage />
        <LoginScreen />
        {/* <RegisterScreen /> */}
      </View>
    </SafeAreaView>
    // <NavigationContainer>
    //   <MainNavigation />
    // </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
