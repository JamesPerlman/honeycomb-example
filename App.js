import { FormScreen, MainScreen, store } from './src';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="main" component={MainScreen} />
            <Stack.Screen name="form" component={FormScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;