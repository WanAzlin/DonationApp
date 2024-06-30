import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import ContainerMainPage from '../components/organism/ContainerMainPage';
import PrimaryButton from '../components/molecules/PrimaryButton';
import Spacer from '../components/atoms/Divider/Spacer';

const DetailScreen = () => {
  return (
    <ContainerMainPage>
      <ScrollView>
        <Image
          source={require('../assets/img/back.png')}
          style={styles.iconBP}
        />
        <View style={styles.greyBox} />
        <Text style={styles.category}>Environment</Text>
        <Text style={styles.boxText}>Tree Cactus Limitation</Text>
        <Text>
          Donating to a cause you care about can make a positive impact on the
          world. Whether it's a monetary gift, time or resources, every donation
          can help make a difference. Charitable organizations rely on the
          generosity of people like you to support their mission and provide
          assistance to those in need. So why not consider giving a gift today
          and feel the satisfaction of knowing you've made a difference in
          someone's life. Your donation, no matter how small, can help change
          lives for the better.
        </Text>
        <Spacer height={24} />
        <PrimaryButton title={'Donate'} />
      </ScrollView>
    </ContainerMainPage>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  iconBP: {
    width: 44,
    height: 44,
  },
  greyBox: {
    width: '100%',
    height: 200,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  boxText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 24,
    padding: 12,
  },
  category: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 12,
    paddingLeft: 12,
    backgroundColor: '#145855',
    width: 110,
    padding: 12,
    borderRadius: 100,
    alignItems: 'center',
  },
});
