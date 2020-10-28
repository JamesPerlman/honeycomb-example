import { AddItemButton, ItemList } from '../components';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { fetchData, itemsSelector } from '../store';

import { connect } from 'react-redux';

@connect(
  (state) => ({
    items: itemsSelector(state),
  }),
  { fetchData }
)
export class MainScreen extends Component {

  componentDidMount() {
    this.props.fetchData();
  }
  
  render() {
    const { items, navigation, } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ItemList style={styles.list} items={items} />
        <AddItemButton style={styles.addButton} onPress={() => navigation.navigate('form')} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    alignSelf: 'center',
    marginBottom: 20,
    bottom: 0,
  },
  container: {
    width: '100%',
    height: '100%',
  },
  list: {
    width: '100%',
    height: '100%',
  },
});
