import React from 'react';
import PropTypes from 'prop-types';
import { Thumbnail } from 'native-base';

import User from '../../asset/image/user.png';
import useUser from '../../hook/useUser';
import { ICON, ROUTE } from '../../constant';
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

const Home = ({ navigation }) => {
  const { user } = useUser();

  const navigateToProfile = () => {
    navigation.navigate(ROUTE.PROFILE);
  };

  return (
    <HomeContainer>
      <HomeLayout>
        <AvatarContainer testID="home_avatar" onPress={navigateToProfile}>
          <Thumbnail large source={User} />
          <AvatarLabel bold>{user.name}</AvatarLabel>
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

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Home;
