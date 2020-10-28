import { StyleSheet, View } from 'react-native';

import React from 'react';

export const Container = ({ style, ...props }) => <View style={[StyleSheet.absoluteFill, styles.container, style]} {...props} />

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  }
})