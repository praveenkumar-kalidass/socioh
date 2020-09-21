import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { ROUTE } from '../constant';
import Home from '../screen/Home';

const HomeBottomTab = createMaterialBottomTabNavigator();

export default () => (
  <HomeBottomTab.Navigator>
    <HomeBottomTab.Screen name={ROUTE.HOME} component={Home} />
  </HomeBottomTab.Navigator>
);
