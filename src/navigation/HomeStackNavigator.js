import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE, COLOR } from '../constant';
import Home from '../screen/Home';

const HomeStack = createStackNavigator();

export default () => (
  <HomeStack.Navigator
    initialRouteName={ROUTE.HOME}
    headerMode="none"
    screenOptions={{
      cardStyle: { backgroundColor: COLOR.BACKGROUND },
    }}>
    <HomeStack.Screen name={ROUTE.HOME} component={Home} />
  </HomeStack.Navigator>
);
