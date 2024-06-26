import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Spacer from '../atoms/Divider/Spacer';
import {useNavigation} from '@react-navigation/native';

import {COLORS, FONTFAMILY} from '../../assets/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons';
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
interface HeaderProps {
  allowBack?: boolean;
}

const Header = ({allowBack}: HeaderProps) => {
  //   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {allowBack ? (
        <TouchableOpacity
          //   onPress={() => navigation.goBack()}
          style={styles.leftContainer}>
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </TouchableOpacity>
      ) : null}
      <Spacer width={16} />
      <View style={styles.centerContainer}></View>
      <Spacer width={16} />
      <View style={styles.rightContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  leftContainer: {},
  rightContainer: {},
  centerContainer: {},
});

export default Header;
