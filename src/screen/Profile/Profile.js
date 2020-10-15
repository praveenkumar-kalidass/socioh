import React, { useState, useEffect } from 'react';
import { Card, CardItem, Thumbnail } from 'native-base';

import UserAvatar from '../../asset/image/user.png';
import useService from '../../hook/useService';
import { CONSTANT, TRANSLATION } from '../../constant';
import wrapPattern from '../../helper/wrapPattern';
import {
  ProfileContainer,
  AvatarContainer,
  AvatarLabel,
  AvatarDescription,
  InterestsContainer,
  InterestsTitleContainer,
  InterestsTitle,
  BadgeContainer,
  InterestChip,
  Interest,
} from './Profile.style';

const Profile = () => {
  const [user, setUser] = useState(null);
  const { getUserDetails } = useService();

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
    <ProfileContainer>
      <Card>
        <CardItem>
          <AvatarContainer>
            <Thumbnail large source={UserAvatar} />
            <If condition={Boolean(user)}>
              <AvatarLabel testID="profile_user_name" bold>
                {user.name}
              </AvatarLabel>
            </If>
            <AvatarDescription>
              {TRANSLATION.I_AM_SOCIOH_USER}
            </AvatarDescription>
          </AvatarContainer>
        </CardItem>
        <CardItem>
          <InterestsContainer>
            <InterestsTitleContainer>
              <InterestsTitle>{TRANSLATION.MY_INTERESTS}</InterestsTitle>
            </InterestsTitleContainer>
            <If condition={Boolean(user)}>
              <BadgeContainer>
                <For each="interest" index="index" of={user.interests}>
                  <InterestChip key={`interest_${index}`}>
                    <Interest testID={`profile_interest_${interest}`}>
                      {interest}
                    </Interest>
                  </InterestChip>
                </For>
              </BadgeContainer>
            </If>
          </InterestsContainer>
        </CardItem>
      </Card>
    </ProfileContainer>
  );
};

export default wrapPattern({
  Component: Profile,
  pattern: CONSTANT.SCREEN_BACKGROUND.BACKGROUND_2,
});
