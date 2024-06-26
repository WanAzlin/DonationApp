import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../assets/theme';

interface CaptionProps extends TouchableOpacityProps {
  text: string;
  weight?: 'light' | 'regular' | 'medium' | 'bold' | 'extrabold';
  color?: string;
  fontSize?: number;
  pressable?: boolean;
  align?: 'left' | 'right' | 'center';
}

const Caption = ({
  text,
  weight = 'light',
  color = COLORS.typographyDefault,
  fontSize = FONTSIZE.size_12,
  pressable,
  onPress,
  disabled,
  align = 'left',
}: CaptionProps) => {
  let children = (
    <Text
      style={[
        styles.text,
        {
          fontFamily: FONTFAMILY[`PlusJakartaSans_${weight}`],
          color: disabled ? COLORS.link.disabled : color,
          fontSize,
          textAlign: align,
        },
      ]}>
      {text}
    </Text>
  );

  if (pressable) {
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        {children}
      </TouchableOpacity>
    );
  }

  return children;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FONTSIZE.size_12,
  },
});

export default Caption;
