import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ROUTE, ICON } from '../constant';
import HomeStackNavigator from './HomeStackNavigator';
import FeedbackStackNavigator from './FeedbackStackNavigator';
import { TabIcon } from './HomeBottomTabNavigator.style';

const HomeBottomTab = createBottomTabNavigator();

export default () => (
  <HomeBottomTab.Navigator tabBarOptions={{ showLabel: false }}>
    <HomeBottomTab.Screen
      name={ROUTE.HOME}
      component={HomeStackNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon
            active={focused}
            type={ICON.MATERIAL_FAMILY}
            name={ICON.HOME}
          />
        ),
      }}
    />
    <HomeBottomTab.Screen
      name={ROUTE.FEEDBACK}
      component={FeedbackStackNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon
            active={focused}
            type={ICON.MATERIAL_FAMILY}
            name={ICON.STAR}
          />
        ),
      }}
    />
  </HomeBottomTab.Navigator>
);
