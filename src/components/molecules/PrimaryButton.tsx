import React, {useState} from 'react';
import {ButtonProps, Pressable, StyleSheet, Text} from 'react-native';
import {COLORS, FONTFAMILY} from '../../assets/theme';
// import { useTranslation } from 'react-i18next';

interface PrimaryButtonProps extends ButtonProps {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingMessage?: string;
  variant?: 'large' | 'medium' | 'small';
  disabled?: boolean;
}

const PrimaryButton = ({
  title,
  variant = 'medium',
  disabled = false,
  isLoading = false,
  loadingMessage,
  trailingIcon,
  onPress,
}: PrimaryButtonProps) => {
  // const { t } = useTranslation();
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.btn,
        styles[`btn-medium`],
        isPressed ? styles.btnPressed : null,
        disabled ? styles.btnDisabled : null,
        isLoading ? styles.btnLoading : null,
      ]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      disabled={isLoading || disabled}>
      <Text style={[styles.btnText, styles[`btn-text-${variant}`]]}>
        {isLoading
          ? loadingMessage
            ? loadingMessage
            : t('verbs.loading')
          : title}
      </Text>
      {trailingIcon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  /**
   * Base
   */
  btn: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#2979F2',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btnText: {
    color: '#fff',
    fontFamily: FONTFAMILY.PlusJakartaSans_bold,
  },

  /**
   * Button Variants
   */
  'btn-large': {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  'btn-medium': {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  'btn-small': {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  /**
   * Button text variant
   */
  'btn-text-large': {
    fontSize: 18,
  },
  'btn-text-medium': {
    fontSize: 16,
  },
  'btn-text-small': {
    fontSize: 14,
  },

  /**
   * Button state
   */
  btnPressed: {
    backgroundColor: COLORS.button.pressed,
  },
  btnLoading: {
    backgroundColor: COLORS.button.hover,
  },
  btnDisabled: {
    backgroundColor: COLORS.button.disabled,
  },
});

export default PrimaryButton;
