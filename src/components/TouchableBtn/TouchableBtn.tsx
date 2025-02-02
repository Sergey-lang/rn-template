import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Colors } from '../../tokens';

export type TouchableBtnProps = {
  buttonText: string;
} & TouchableOpacityProps;

export const TouchableBtn: FC<TouchableBtnProps> = ({ buttonText, ...otherProps }) => {
  return (
    <TouchableOpacity style={styles.button} {...otherProps}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
