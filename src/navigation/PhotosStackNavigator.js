import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE, COLOR, TRANSLATION } from '../constant';
import Header from '../component/Header';
import Photos from '../screen/Photos';

const PhotosStack = createStackNavigator();

export default () => (
  <PhotosStack.Navigator
    initialRouteName={ROUTE.PHOTOS}
    screenOptions={{
      cardStyle: { backgroundColor: COLOR.BACKGROUND },
    }}>
    <PhotosStack.Screen
      name={ROUTE.PHOTOS}
      component={Photos}
      options={{
        title: TRANSLATION.SCREENS.PHOTOS,
        header: (props) => <Header {...props} />,
      }}
    />
  </PhotosStack.Navigator>
);
