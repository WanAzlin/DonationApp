import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import RegisterScreen from './src/screens/RegisterScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        {/* <LoginScreen /> */}
        <RegisterScreen />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
