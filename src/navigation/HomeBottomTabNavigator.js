import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ROUTE, ICON } from '../constant';
import Home from '../screen/Home';
import { TabIcon } from './HomeBottomTabNavigator.style';

const HomeBottomTab = createBottomTabNavigator();

export default () => (
  <HomeBottomTab.Navigator tabBarOptions={{ showLabel: false }}>
    <HomeBottomTab.Screen
      name={ROUTE.HOME}
      component={Home}
      options={{
        tabBarIcon: () => (
          <TabIcon type={ICON.MATERIAL_FAMILY} name={ICON.HOME} />
        ),
      }}
    />
  </HomeBottomTab.Navigator>
);
