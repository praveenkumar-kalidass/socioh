import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Background1 } from '../component/Background';
import { ROUTE, COLOR, CONSTANT } from '../constant';
import Login from '../screen/Login';
import Signin from '../screen/Signin';
import Signup from '../screen/Signup';
import HomeBottomTabNavigator from './HomeBottomTabNavigator';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName={ROUTE.LOGIN}
    headerMode="none"
    screenOptions={{
      cardStyle: { backgroundColor: COLOR.BACKGROUND },
    }}>
    <Stack.Screen name={ROUTE.LOGIN} component={Login} />
    <Stack.Screen
      name={ROUTE.SIGNIN}
      component={Signin}
      options={{
        cardOverlayEnabled: true,
        cardOverlay: () =>
          Platform.OS === CONSTANT.OS.ANDROID && <Background1 />,
      }}
    />
    <Stack.Screen
      name={ROUTE.SIGNUP}
      component={Signup}
      options={{
        cardOverlayEnabled: true,
        cardOverlay: () =>
          Platform.OS === CONSTANT.OS.ANDROID && <Background1 />,
      }}
    />
    <Stack.Screen name={ROUTE.HOME} component={HomeBottomTabNavigator} />
  </Stack.Navigator>
);
