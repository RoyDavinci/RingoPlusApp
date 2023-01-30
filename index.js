/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
// import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import {AuthProvider} from './contexts/AuthProvider';

AppRegistry.registerComponent(
  appName,
  () => props =>
    (
      <AuthProvider>
        <App {...props} />
      </AuthProvider>
    ),
  () => App,
);
