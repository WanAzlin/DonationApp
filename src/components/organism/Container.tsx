import React from 'react';
import {
  ColorValue,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';
import Header from '../Headers/Header';
import {SPACING} from '../../assets/theme';

const {height} = Dimensions.get('screen');

/**
 * Container prop
 *
 * @interface ContainerProps
 * @typedef {ContainerProps}
 * @extends {SafeAreaViewProps}
 */
interface ContainerProps extends SafeAreaViewProps {
  barStyle?: StatusBarStyle;
  barBackgroundColor?: ColorValue;
  allowBack?: boolean;
  backgroundColor?: ColorValue;
}

/**
 * Container
 *
 * @param {ContainerProps} param0
 * @param {*} param0.children
 * @param {*} param0.style
 * @param {StatusBarStyle} [param0.barStyle="default"]
 * @param {ColorValue} [param0.barBackgroundColor="transparent"]
 * @returns {*}
 */
const Container = ({
  children,
  style,
  barStyle = 'dark-content',
  barBackgroundColor = 'transparent',
  allowBack = false,
  backgroundColor = '#FFFFFF',
}: ContainerProps) => {
  return (
    <SafeAreaView style={[style, styles.container, {backgroundColor}]}>
      <StatusBar
        translucent
        backgroundColor={barBackgroundColor}
        barStyle={barStyle}
      />
      <Header allowBack={allowBack} />
      <View style={styles.wrapper}>{children}</View>
    </SafeAreaView>
  );
};

/**
 * Stylesheet
 *
 * @type {*}
 */
const styles = StyleSheet.create({
  container: {
    minHeight: height,
  },
  wrapper: {
    padding: 16,
    flex: 1,
    paddingTop: SPACING.space_16,
    paddingLeft: SPACING.space_16,
    paddingRight: SPACING.space_16,
  },
});

/**
 * Export container
 */
export default Container;
