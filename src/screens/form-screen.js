import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SelectionView, SubmitButton } from '../components';
import { addItem, optionsSelector } from '../store';

import { connect } from 'react-redux';

@connect(
  (state) => ({
    initialValues: {
      selection: 0,
    },
    options: optionsSelector(state),
  })
)
@reduxForm({
  form: 'the-form',
  onSubmit: ({ selection }, dispatch, { options, navigation }) => {
    dispatch(addItem(options[selection]));
    navigation.goBack();
  }
})
export class FormScreen extends Component {
  constructor(props) {
    super(props);
    this.renderSelectionField.bind(this);
  }

  renderSelectionField = ({ input, meta }) => {
    const { options } = this.props;
    return (
      <SelectionView
        style={styles.selectionView}
        data={options}
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
            
            <Field name="selection" component={this.renderSelectionField} />

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
    height: '100%',
  },

  headerText: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
  },

  selectionView: {
    marginTop: 40,
  },

  submitButton: {
    marginTop: 'auto',
    margin: 16,
  },
});