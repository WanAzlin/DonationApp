import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../assets/theme';

interface ParagraphProps {
  text: string;
  weight?: 'light' | 'regular' | 'medium' | 'bold' | 'extrabold';
  color?: string;
  fontSize?: number;
  variant?: '01' | '02' | '03';
  align?: 'left' | 'right' | 'center';
}

const Paragraph = ({
  text,
  weight = 'light',
  color = '#2979F2',
  variant = '01',
  align = 'left',
}: ParagraphProps) => {
  return (
    <Text
      style={[
        styles[`text-${variant}`],
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
  'text-01': {
    fontSize: FONTSIZE.size_14,
  },
  'text-02': {
    fontSize: FONTSIZE.size_16,
  },
  'text-03': {
    fontSize: FONTSIZE.size_18,
  },
  'text-undefined': {},
});

export default Paragraph;
