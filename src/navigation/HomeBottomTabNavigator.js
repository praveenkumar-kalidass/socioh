import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ROUTE, ICON } from '../constant';
import TabIcon from '../component/TabIcon';
import ContactStackNavigator from './ContactStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import FeedbackStackNavigator from './FeedbackStackNavigator';
import MessageStackNavigator from './MessageStackNavigator';

const HomeBottomTab = createBottomTabNavigator();

export default () => (
  <HomeBottomTab.Navigator
    initialRouteName={ROUTE.HOME}
    tabBarOptions={{ showLabel: false }}>
    <HomeBottomTab.Screen
      name={ROUTE.CONTACTS}
      component={ContactStackNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon
            active={focused}
            type={ICON.MATERIAL_FAMILY}
            name={ICON.CONTACTS}
          />
        ),
      }}
    />
    <HomeBottomTab.Screen
      name={ROUTE.MESSAGES}
      component={MessageStackNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon
            active={focused}
            type={ICON.MATERIAL_FAMILY}
            name={ICON.CHAT}
          />
        ),
      }}
    />
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
