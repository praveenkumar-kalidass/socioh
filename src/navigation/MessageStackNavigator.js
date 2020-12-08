import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE, COLOR, TRANSLATION } from '../constant';
import Header from '../component/Header';
import Messages from '../screen/Messages';
import Message from '../screen/Message';

const MessageStack = createStackNavigator();

export default () => (
  <MessageStack.Navigator
    initialRouteName={ROUTE.MESSAGES}
    screenOptions={{
      cardStyle: { backgroundColor: COLOR.BACKGROUND },
    }}>
    <MessageStack.Screen
      name={ROUTE.MESSAGES}
      component={Messages}
      options={{
        title: TRANSLATION.SCREENS.MESSAGES,
        header: (props) => <Header {...props} />,
      }}
    />
    <MessageStack.Screen
      name={ROUTE.MESSAGE}
      component={Message}
      options={{
        header: (props) => <Header {...props} />,
      }}
    />
  </MessageStack.Navigator>
);
