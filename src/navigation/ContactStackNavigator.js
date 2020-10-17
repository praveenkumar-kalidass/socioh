import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE, COLOR, TRANSLATION } from '../constant';
import Header from '../component/Header';
import Feedback from '../screen/Feedback';

const ContactStack = createStackNavigator();

export default () => (
  <ContactStack.Navigator
    initialRouteName={ROUTE.CONTACTS}
    screenOptions={{
      cardStyle: { backgroundColor: COLOR.BACKGROUND },
    }}>
    <ContactStack.Screen
      name={ROUTE.CONTACTS}
      component={Feedback}
      options={{
        title: TRANSLATION.SCREENS.CONTACTS,
        header: (props) => <Header {...props} />,
      }}
    />
  </ContactStack.Navigator>
);
