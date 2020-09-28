import React from 'react';
import { Thumbnail } from 'native-base';

import User from '../../asset/image/user.png';
import {
  AvatarContainer,
  AvatarLabel,
  HomeContainer,
  HomeLayout,
  UserNavigationItem,
  UserNavigationList,
  NavigationLabel,
  NavigationIcon,
} from './Home.style';
import { ICON } from '../../constant';

const Home = () => {
  return (
    <HomeContainer>
      <HomeLayout>
        <AvatarContainer>
          <Thumbnail large source={User} />
          <AvatarLabel bold>Sample Text</AvatarLabel>
        </AvatarContainer>
        <UserNavigationList>
          <UserNavigationItem>
            <NavigationIcon type={ICON.MATERIAL_FAMILY} name={ICON.HOME} />
            <NavigationLabel>Home</NavigationLabel>
          </UserNavigationItem>
        </UserNavigationList>
      </HomeLayout>
    </HomeContainer>
  );
};

export default Home;
