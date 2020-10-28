import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

export const SubmitButton = ({ style, ...props }) => (
  <TouchableOpacity style={[styles.button, style]} {...props}>
    <Text>Submit</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    color: '#FB5555',
    borderRadius: 30,
    height: 48,
    alignSelf: 'stretch',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})