import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Animated,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import {COLORS, FONTFAMILY, SPACING} from '../../assets/theme';
import Spacer from '../atoms/Divider/Spacer';
import Caption from '../../components/Headers/Caption';

/**
 * Component prop
 *
 * @interface FloatingLabelInputProps
 * @typedef {FloatingLabelInputProps}
 * @extends {TextInputProps}
 */
interface FloatingLabelInputProps extends TextInputProps {
  label: string;
  value?: string;
  errorText?: string;
  helperText?: string;
  verified?: boolean;
  disabled?: boolean;
}

/**
 * Component
 * @param param0
 * @returns
 */
const PrimaryInput = ({
  keyboardType = 'default',
  label,
  defaultValue,
  onChangeText,
  style,
  errorText,
  helperText,
  verified,
  disabled = false,
  ...props
}: FloatingLabelInputProps) => {
  /**
   * States
   */
  const [isFocused, setIsFocused] = useState(false);
  const [animatedIsFocused] = useState(
    new Animated.Value(defaultValue ? 1 : 0),
  );
  const [text, setText] = useState<string>('');

  /**
   * useEffects
   */
  useEffect(() => {
    if (defaultValue) {
      setText(defaultValue);
    }
  }, []);

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || text ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, text]);

  /**
   * Handle text change
   */
  const handleTextChange = (text: string) => {
    setText(text);
    onChangeText ? onChangeText(text) : null;
  };

  /**
   * Label style with animated
   */
  const labelStyle = {
    position: 'absolute' as 'absolute',
    left: 16,
    right: 16,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 8],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
    }),
  };

  /**
   * Return
   */
  return (
    <>
      <View
        style={[
          styles.container,
          errorText
            ? styles.errorContainer
            : disabled
            ? styles.disabledContainer
            : styles.defaultContainer,
          style,
        ]}>
        <Animated.Text style={[styles.label, labelStyle]}>
          {label}
        </Animated.Text>
        <View style={styles.innerInputContainer}>
          <View style={styles.innerInput}>
            <Spacer height={17} />
            <TextInput
              editable={!disabled}
              keyboardType={keyboardType}
              defaultValue={defaultValue}
              style={[
                styles.input,
                {color: errorText ? COLORS.danger : COLORS.typographyDefault},
              ]}
              onChangeText={handleTextChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />
          </View>
          {/* <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {verified && (
              <Icon
                name="checkmark-circle"
                size={20}
                color={COLORS.success._700}
              />
            )}
          </View> */}
        </View>
      </View>
      {errorText || helperText ? (
        <View style={styles.helperContainer}>
          {/* <View style={styles.helperIcon}>
            {errorText ? (
              <Icon name="alert-circle" size={16} color={COLORS.error._700} />
            ) : null}
          </View> */}
          <View style={styles.helperMessage}>
            <Caption
              weight="regular"
              text={errorText ? errorText : helperText ?? ''}
              fontSize={12}
              color={errorText ? COLORS.error._500 : COLORS.grayscale._500}
            />
          </View>
        </View>
      ) : null}
    </>
  );
};

/**
 * Stylesheet
 *
 * @type {*}
 */
const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 57,
  },
  defaultContainer: {
    borderBottomWidth: 1,
    borderColor: '#C2C2C2',
    borderRadius: 8,
  },
  disabledContainer: {
    borderWidth: 1,
    borderColor: '#C2C2C2',
    borderRadius: 8,
    backgroundColor: COLORS.grayscale._50,
  },
  errorContainer: {
    borderWidth: 1,
    borderColor: COLORS.error._700,
    borderRadius: 8,
    backgroundColor: COLORS.error._200,
  },
  label: {
    position: 'absolute',
    left: 0,
    top: 32,
    fontSize: 14,
    color: '#8C8C8C',
    fontFamily: FONTFAMILY.PlusJakartaSans_medium,
  },
  input: {
    padding: 0,
    height: 18,
    lineHeight: 18,
    fontSize: 14,
    color: '#000',
    fontFamily: FONTFAMILY.PlusJakartaSans_medium,
  },
  innerInputContainer: {flexDirection: 'row'},
  innerInput: {height: 38, flex: 9},
  helperContainer: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.space_8,
    paddingVertical: SPACING.space_8,
  },
  helperIcon: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: SPACING.space_8,
  },
  helperMessage: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

/**
 * Export
 */
export default PrimaryInput;
