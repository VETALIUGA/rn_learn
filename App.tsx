/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StatusBar} from 'react-native';

import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import NavigationBar from './src/components/NavigationBar/NavigationBar';
import Navigate from './src/navigation/Routes';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      {/* <StatusBar backgroundColor="#FFF" barStyle="dark-content" /> */}
      <Navigate />
    </SafeAreaProvider>
  );
};

export default App;
