import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export class AddItemButton extends Component {
  render() {
    const { style, ...props } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, style]}
        {...props}
      >
        <Text style={styles.plus}>
          +
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F28300',
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  plus: {
    fontSize: 48,
    color: 'white',
  },
});
