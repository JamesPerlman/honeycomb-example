import { MainScreen, store } from './src';

import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <MainScreen />
      </Provider>
    </>
  );
};

export default App;