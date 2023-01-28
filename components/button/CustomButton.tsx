/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
} from 'react-native';
import {color} from '../../assets';
import styles from './styles';

interface buttonInterFace {
  title?: string;
  loading?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  primary?: boolean;
  danger?: boolean;
  onPress?:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;
}

export const CustomButton: React.FC<buttonInterFace> = ({
  title,
  loading,
  disabled,
  secondary,
  primary,
  danger,
  onPress,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return color.grey;
    }
    if (primary) {
      return color.primary;
    }
    if (secondary) {
      return color.secondary;
    }
    if (danger) {
      return color.danger;
    }
  };
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: getBgColor()}]}
      disabled={disabled}
      onPress={onPress}>
      {!loading ? (
        title && (
          <Text
            style={[styles.textContainer, {color: disabled ? '#000' : '#fff'}]}>
            {title}
          </Text>
        )
      ) : (
        <ActivityIndicator />
      )}
    </TouchableOpacity>
  );
};
