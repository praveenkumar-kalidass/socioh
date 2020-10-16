import 'react-native-gesture-handler';
import 'text-encoding-polyfill';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Navigation from '../navigation';
import { LoaderProvider } from '../hook/useLoader';
import { UserProvider } from '../hook/useUser';

export default () => (
  // eslint-disable-next-line react-native/no-inline-styles
  <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <UserProvider>
        <LoaderProvider>
          <Navigation />
        </LoaderProvider>
      </UserProvider>
    </NavigationContainer>
  </SafeAreaView>
);
