import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import HeadingHomepage from '../components/organism/HeadingHomepage';
import Container from '../components/organism/Container';
import Heading from '../components/Headers/Heading';
import Spacer from '../components/atoms/Divider/Spacer';
import {SPACING} from '../assets/theme';
import HorizontalCategory from '../components/molecules/HorizontalCategory';
import ContainerMainPage from '../components/organism/ContainerMainPage';
import MainPageContent from '../components/organism/MainPageContent';

const MainPage = () => {
  return (
    <ContainerMainPage>
      <ScrollView>
        <View style={styles.wrapper}>
          <Heading text={'Hello,'} variant="h6" weight="regular" />
          <Spacer height={8} />
          <View style={{flexDirection: 'row'}}>
            <Heading text={'Wan Azlin'} variant="h5" weight="extrabold" />
          </View>
          <Spacer height={16} />
          <Image
            source={require('../assets/img/bigpic.png')}
            style={styles.iconBP}
          />
          <Spacer height={16} />
          <Heading text={'Select Category'} variant="h5" weight="extrabold" />
          <Spacer height={8} />
          <HorizontalCategory />
          <MainPageContent />
          <MainPageContent />
        </View>
      </ScrollView>
    </ContainerMainPage>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  wrapper: {},

  iconBP: {
    width: 327,
    height: 160,
  },
});
