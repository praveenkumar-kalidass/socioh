import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE, COLOR, TRANSLATION } from 'constant';
import Header from 'component/Header';
import Feedback from 'screen/Feedback';

const FeedbackStack = createStackNavigator();

export default () => (
  <FeedbackStack.Navigator
    initialRouteName={ROUTE.FEEDBACK}
    screenOptions={{
      cardStyle: { backgroundColor: COLOR.BACKGROUND },
    }}>
    <FeedbackStack.Screen
      name={ROUTE.FEEDBACK}
      component={Feedback}
      options={{
        title: TRANSLATION.FEEDBACK,
        header: (props) => <Header {...props} />,
      }}
    />
  </FeedbackStack.Navigator>
);
