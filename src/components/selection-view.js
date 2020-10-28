import { FlatList, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { OptionView } from './option-view';

export class SelectionView extends Component {

  render() {
    const { data, initialIndex, onSelect, selectedIndex, style, ...props } = this.props;

    return (
      <FlatList
        initialScrollIndex={initialIndex}
        data={data}
        style={[styles.flatList, style]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(option, index) => `option_${index}`}
        renderItem={({ item, index }) => (
          <OptionView
            option={item}
            onPress={onSelect && (() => onSelect(index))}
            style={styles.option}
            selected={index === selectedIndex}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
    height: 88,
  },
  option: {
    marginTop: 8,
    height: 88,
    width: 100,
    marginRight: 4,
    marginLeft: 4,
  }
});