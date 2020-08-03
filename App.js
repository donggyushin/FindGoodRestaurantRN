/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './store/Store';
import RootScreen from './screens/RootScreen';

const App = () => {
  return (
    <Provider store={store}>
      <RootScreen />
    </Provider>
  );
};

export default App;
