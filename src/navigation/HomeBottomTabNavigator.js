import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ROUTE, ICON } from '../constant';
import HomeStackNavigator from './HomeStackNavigator';
import { TabIcon } from './HomeBottomTabNavigator.style';

const HomeBottomTab = createBottomTabNavigator();

export default () => (
  <HomeBottomTab.Navigator tabBarOptions={{ showLabel: false }}>
    <HomeBottomTab.Screen
      name={ROUTE.HOME}
      component={HomeStackNavigator}
      options={{
        tabBarIcon: () => (
          <TabIcon type={ICON.MATERIAL_FAMILY} name={ICON.HOME} />
        ),
      }}
    />
  </HomeBottomTab.Navigator>
);
