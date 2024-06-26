import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {COLORS, FONTFAMILY} from '../../assets/theme';

interface HeadingProps extends TextProps {
  text: string;
  variant?:
    | 'h1'
    | 'h1-small'
    | 'h2'
    | 'h2-small'
    | 'h3'
    | 'h3-small'
    | 'h4'
    | 'h4-small'
    | 'h5'
    | 'h5-small'
    | 'h6'
    | 'h6-small';
  weight?: 'light' | 'regular' | 'medium' | 'bold' | 'extrabold';
  color?: string;
  align?: 'left' | 'right' | 'center';
}

const Heading = ({
  variant = 'h1',
  weight = 'light',
  text,
  color = COLORS.typographyDefault,
  align = 'left',
}: HeadingProps) => {
  return (
    <Text
      style={[
        styles[variant],
        {
          fontFamily: FONTFAMILY[`PlusJakartaSans_${weight}`],
          color,
          textAlign: align,
        },
      ]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  /**
   * Variants
   */
  h1: {
    fontSize: 48,
    lineHeight: 56,
  },
  'h1-small': {
    fontSize: 34,
    lineHeight: 40,
  },
  h2: {
    fontSize: 40,
    lineHeight: 48,
  },
  'h2-small': {
    fontSize: 32,
    lineHeight: 40,
  },
  h3: {
    fontSize: 32,
    lineHeight: 40,
  },
  'h3-small': {
    fontSize: 28,
    lineHeight: 34,
  },
  h4: {
    fontSize: 28,
    lineHeight: 34,
  },
  'h4-small': {
    fontSize: 23,
    lineHeight: 28,
  },
  h5: {
    fontSize: 23,
    lineHeight: 28,
  },
  'h5-small': {
    fontSize: 19,
    lineHeight: 23,
  },
  h6: {
    fontSize: 19,
    lineHeight: 23,
  },
  'h6-small': {
    fontSize: 16,
    lineHeight: 20,
  },
});

export default Heading;
