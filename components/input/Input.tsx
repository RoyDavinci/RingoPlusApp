/* eslint-disable react-native/no-inline-styles */
import React, {CSSProperties, useState} from 'react';
import {
  ColorValue,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {color} from '../../assets';
import styles from './styles';

interface inputElement {
  onChange?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
  value?: string;
  icon?: JSX.Element;
  label?: string;
  iconPosition?: string;
  error?: {message: string} | string;
  placeholder?: string;
  secure?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
  style?: CSSProperties;
  placeholderTextColor?: ColorValue | undefined;
}

export const Input: React.FC<inputElement> = ({
  onChange,
  value,
  icon,
  label,
  iconPosition,
  error,
  placeholder,
  secure,
  onChangeText,
  placeholderTextColor,
}) => {
  const [focused, setFocused] = useState(false);
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else {
        return 'row-reverse';
      }
    }
    return;
  };

  const getBorderColor = () => {
    if (focused) {
      return color.primary;
    }
    if (error) {
      return color.danger;
    }
    return color.grey;
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {
            flexDirection: getFlexDirection(),
            borderColor: getBorderColor(),
            alignItems: icon ? 'center' : 'baseline',
          },
        ]}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          onChange={onChange}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secure}
          value={value}
          onFocus={() => setFocused(true)}
          style={styles.textInput}
          placeholderTextColor={placeholderTextColor}
        />
      </View>

      {error && (
        <Text style={styles.error}>
          {typeof error === 'string' ? error : error.message}
        </Text>
      )}
    </View>
  );
};
