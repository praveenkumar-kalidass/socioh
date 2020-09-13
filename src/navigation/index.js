import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE } from '../constant';
import Login from '../screen/Login';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName={ROUTE.LOGIN} headerMode="none">
    <Stack.Screen name={ROUTE.LOGIN} component={Login} />
  </Stack.Navigator>
);
