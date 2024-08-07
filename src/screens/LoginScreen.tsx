import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Container from '../components/organism/Container';
import Heading from '../components/Headers/Heading';
import Spacer from '../components/atoms/Divider/Spacer';
import Caption from '../components/Headers/Caption';
import PrimaryInput from '../components/molecules/button';
import PrimaryButton from '../components/molecules/PrimaryButton';
import Paragraph from '../components/Headers/Parapgraph';
import {useNavigation} from '@react-navigation/native';
import RegisterScreen from './RegisterScreen';
const LoginScreen = () => {
  const navigation = useNavigation();
  function navigateToScreen(screen: string) {
    navigation.navigate(screen as never);
  }
  return (
    <Container>
      <View style={styles.wrapper}>
        <Heading text={'Welcome Back'} variant="h5" weight="extrabold" />
        <Spacer height={8} />
        <PrimaryInput keyboardType={'email-address'} label={'Email'} />
        <Spacer height={8} />
        <PrimaryInput secureTextEntry={true} label={'Password'} />
        <Spacer height={32} />
        <PrimaryButton
          title={'Login'}
          onPress={() => navigateToScreen('MainPage')}
        />
        <Spacer height={16} />
        <Paragraph
          text={'Do not have an account? Register'}
          weight={'bold'}
          align={'center'}
        />
      </View>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {},
});
