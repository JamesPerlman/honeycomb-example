import { FlatList, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { ItemView } from './item-view';

export class SelectionView extends Component {

  render() {
    const { data, onSelect, selectedIndex, style, ...props } = this.props;

    return (
      <FlatList
        data={data}
        style={[styles.flatList, style]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `item_${index}`}
        renderItem={({ item, index }) => (
          <ItemView
            item={item}
            onPress={onSelect && (() => onSelect(index))}
            style={styles.item}
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
    height: 60,
  },
  item: {
    marginTop: 8,
    height: 44,
    width: 100,
    marginRight: 10,
  }
});