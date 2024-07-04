import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import ContainerMainPage from '../components/organism/ContainerMainPage';
import Heading from '../components/Headers/Heading';
import PrimaryInput from '../components/molecules/button';
import Spacer from '../components/atoms/Divider/Spacer';
import PrimaryButton from '../components/molecules/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
const DonateScreen = () => {
  const navigation = useNavigation();
  function navigateToScreen(screen: string) {
    navigation.navigate(screen as never);
  }
  return (
    <ContainerMainPage>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Spacer height={8} />

          <Heading
            text={'My Card Payment'}
            variant="h5"
            weight="extrabold"
            style={{marginLeft: 16}}
          />
          <PrimaryInput label={'Card Holder Name'} />
          <Spacer height={8} />
          <PrimaryInput label={'Card Number'} />
          <PrimaryInput label={'Expired Date'} />
          <Spacer height={8} />
          <PrimaryInput label={'CVV'} />
          <Spacer height={32} />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={'Confirm Payment'}
            onPress={() => navigateToScreen('LoginScreen')}
          />
        </View>
      </View>
    </ContainerMainPage>
  );
};

export default DonateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // Adjust as needed to prevent content from being hidden by the button
  },
  iconBP: {
    width: 44,
    height: 44,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 8,
    width: '100%',
    padding: 16,
    backgroundColor: '#fff', // Ensure the button doesn't overlap with the content
  },
});
