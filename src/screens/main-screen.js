import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Container, SelectionView, SubmitButton } from '../components';
import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { data } from '../data';

@connect(
  (state) => ({
    initialValues: {
      selection: 4,
    },
    items: data.items,
  })
)
@reduxForm({
  form: 'the-form',
  onSubmit: ({ selection }) => {
    Alert.alert("Success!", `The form submitted successfully with ${data.items[selection].title}.`);
  }
})
export class MainScreen extends Component {
  renderSelectionField = ({ input, meta }) => {
    const { items } = this.props;
    return (
      <SelectionView
        data={items}
        initialIndex={meta.initial}
        selectedIndex={input.value || meta.initial}
        onSelect={input.onChange}
      />
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.headerText}>Check this cool form out!</Text>
            
            <Field name="selection" style={styles.field} component={this.renderSelectionField} />

            <SubmitButton style={styles.submitButton} onPress={handleSubmit} />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },

  content: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '100%',
  },

  headerText: {
    fontSize: 24,
    textAlign: 'center',
  },

  submitButton: {
    marginTop: 'auto',
    margin: 16,
  },
});