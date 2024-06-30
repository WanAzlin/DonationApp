import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import ContainerMainPage from '../components/organism/ContainerMainPage';
import Heading from '../components/Headers/Heading';
import PrimaryInput from '../components/molecules/button';
import Spacer from '../components/atoms/Divider/Spacer';
import PrimaryButton from '../components/molecules/PrimaryButton';

const DonateScreen = () => {
  return (
    <ContainerMainPage>
      <ScrollView>
        <Image
          source={require('../assets/img/back.png')}
          style={styles.iconBP}
        />
        <Heading text={'My Card Payment'} variant="h5" weight="extrabold" />
        <PrimaryInput label={'Card Holder Name'} />
        <Spacer height={8} />
        <PrimaryInput label={'Card Number'} />
        <PrimaryInput label={'Expired Date'} />
        <Spacer height={8} />
        <PrimaryInput label={'CVV'} />
        <Spacer height={32} />
        <PrimaryButton title={'Confirm Payment'} />
      </ScrollView>
    </ContainerMainPage>
  );
};

export default DonateScreen;

const styles = StyleSheet.create({
  iconBP: {
    width: 44,
    height: 44,
  },
});
