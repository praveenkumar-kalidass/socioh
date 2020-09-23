import 'react-native-gesture-handler';
import 'text-encoding-polyfill';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from '../navigation';
import { LoaderProvider } from '../hook/useLoader';

export default () => (
  <NavigationContainer>
    <LoaderProvider>
      <Navigation />
    </LoaderProvider>
  </NavigationContainer>
);
