import 'react-native-gesture-handler';
import 'text-encoding-polyfill';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from '../navigation';

export default () => (
  <NavigationContainer>
    <Navigation />
  </NavigationContainer>
);
