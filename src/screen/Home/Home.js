import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Thumbnail } from 'native-base';

import UserAvatar from '../../asset/image/user.png';
import useService from '../../hook/useService';
import { ICON, ROUTE, TRANSLATION } from '../../constant';
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
  const [user, setUser] = useState(null);
  const { logout, getUserDetails } = useService();

  const navigateTo = (route) => {
    navigation.navigate(route);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate(ROUTE.LOGIN);
    } catch (error) {
      console.warn('Error:', error);
    }
  };

  useEffect(() => {
    const loadUserDetails = async () => {
      try {
        const data = await getUserDetails();
        setUser(data);
      } catch (error) {
        console.warn('Error:', error);
      }
    };
    loadUserDetails();
  }, []);

  return (
    <HomeContainer>
      <HomeLayout>
        <AvatarContainer
          testID="home_avatar"
          onPress={() => navigateTo(ROUTE.PROFILE)}>
          <Thumbnail large source={UserAvatar} />
          <If condition={Boolean(user)}>
            <AvatarLabel testID="home_user_name" bold>
              {user.name}
            </AvatarLabel>
          </If>
        </AvatarContainer>
        <UserNavigationList>
          <UserNavigationItem selected>
            <NavigationIcon
              selected
              type={ICON.MATERIAL_FAMILY}
              name={ICON.HOME}
            />
            <NavigationLabel selected>{TRANSLATION.HOME}</NavigationLabel>
          </UserNavigationItem>
          <UserNavigationItem
            testID="home_messages"
            onPress={() => navigateTo(ROUTE.MESSAGES)}>
            <NavigationIcon type={ICON.MATERIAL_FAMILY} name={ICON.HOME} />
            <NavigationLabel>{TRANSLATION.SCREENS.MESSAGES}</NavigationLabel>
          </UserNavigationItem>
          <UserNavigationItem
            onPress={handleLogout}
            testID="home_logout"
            button>
            <NavigationIcon type={ICON.MATERIAL_FAMILY} name={ICON.LOCK} />
            <NavigationLabel>{TRANSLATION.LOGOUT}</NavigationLabel>
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
