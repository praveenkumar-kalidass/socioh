import React from 'react';
import { Card, CardItem, Thumbnail } from 'native-base';

import User from '../../asset/image/user.png';
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
  return (
    <ProfileContainer>
      <Card>
        <CardItem>
          <AvatarContainer>
            <Thumbnail large source={User} />
            <AvatarLabel bold>Sample Text</AvatarLabel>
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
            <BadgeContainer>
              <InterestChip>
                <Interest>music</Interest>
              </InterestChip>
            </BadgeContainer>
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
