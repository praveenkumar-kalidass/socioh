import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE, COLOR } from '../constant';
import Home from '../screen/Home';
import Profile from '../screen/Profile';

const HomeStack = createStackNavigator();

export default () => (
  <HomeStack.Navigator
    initialRouteName={ROUTE.HOME}
    headerMode="none"
    screenOptions={{
      cardStyle: { backgroundColor: COLOR.BACKGROUND },
    }}>
    <HomeStack.Screen name={ROUTE.HOME} component={Home} />
    <HomeStack.Screen name={ROUTE.PROFILE} component={Profile} />
  </HomeStack.Navigator>
);
