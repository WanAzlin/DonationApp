import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Container from '../components/organism/Container';
import Heading from '../components/Headers/Heading';
import Spacer from '../components/atoms/Divider/Spacer';
import Caption from '../components/Headers/Caption';
import PrimaryInput from '../components/molecules/button';
import PrimaryButton from '../components/molecules/PrimaryButton';
import Paragraph from '../components/Headers/Parapgraph';

const LoginScreen = () => {
  return (
    <Container>
      <View style={styles.wrapper}>
        <Heading text={'Hello and Welcome!'} variant="h5" weight="extrabold" />
        <Spacer height={8} />
        {/* <Caption text={'Email'} weight="light" /> */}
        <Spacer height={8} />
        <PrimaryInput
          keyboardType={'email-address'}
          label={'First & Last Name'}
        />
        <Spacer height={8} />
        <PrimaryInput keyboardType={'email-address'} label={'Email'} />
        <Spacer height={8} />
        <PrimaryInput secureTextEntry={true} label={'Password'} />
        <Spacer height={32} />
        <PrimaryButton title={'Register'} />
        <Spacer height={16} />
        <Paragraph
          text={'Have an account? Login'}
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
