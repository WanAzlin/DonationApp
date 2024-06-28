import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import HeadingHomepage from '../components/organism/HeadingHomepage';
import Container from '../components/organism/Container';
import Heading from '../components/Headers/Heading';
import Spacer from '../components/atoms/Divider/Spacer';
import {SPACING} from '../assets/theme';

const MainPage = () => {
  return (
    <Container>
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
      </View>
    </Container>
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
