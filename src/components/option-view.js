import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import React from 'react';

export const OptionView = ({ option, selected, style, ...props}) => {
  return (
    <TouchableOpacity style={[styles.container, selected ? styles.selected : styles.deselected, style]} {...props}>
      <Text style={styles.title}>{option.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: '#F28300',
  },
  deselected: {
    backgroundColor: '#FFC684',
  },
  title: {
    color: 'white',
  },
});
