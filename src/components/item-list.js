import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

export class ItemList extends Component {
  render() {
    const { items, style } = this.props;

    return (
      <FlatList
        data={items}
        style={style}
        keyExtractor={(item, index) => `item_${index}`}
        renderItem={({ item }, index) => (
          <View style={styles.item}>
            <Text style={styles.text}>
              {(item || {}).title}
            </Text>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    height: 44,
    width: '100%',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});
