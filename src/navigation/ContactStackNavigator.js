import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE, COLOR, TRANSLATION } from 'constant';
import Header from 'component/Header';
import Contacts from 'screen/Contacts';
import Contact from 'screen/Contact';

const ContactStack = createStackNavigator();

export default () => (
  <ContactStack.Navigator
    initialRouteName={ROUTE.CONTACTS}
    screenOptions={{
      cardStyle: { backgroundColor: COLOR.BACKGROUND },
    }}>
    <ContactStack.Screen
      name={ROUTE.CONTACTS}
      component={Contacts}
      options={{
        title: TRANSLATION.SCREENS.CONTACTS,
        header: (props) => <Header {...props} />,
      }}
    />
    <ContactStack.Screen
      name={ROUTE.CONTACT}
      component={Contact}
      options={{
        title: TRANSLATION.SCREENS.CONTACT,
        header: (props) => <Header {...props} />,
      }}
    />
  </ContactStack.Navigator>
);
