import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE, COLOR } from '../constant';
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
    <Stack.Screen name={ROUTE.SIGNIN} component={Signin} />
    <Stack.Screen name={ROUTE.SIGNUP} component={Signup} />
    <Stack.Screen name={ROUTE.HOME} component={HomeBottomTabNavigator} />
  </Stack.Navigator>
);
