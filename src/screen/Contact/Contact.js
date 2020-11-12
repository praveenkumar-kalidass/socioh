import React from 'react';
import {
  Card,
  CardItem,
  Left,
  List,
  ListItem,
  Right,
  Thumbnail,
  Text,
} from 'native-base';

import UserAvatar from '../../asset/image/user.png';
import { CONSTANT, ICON } from '../../constant';
import wrapPattern from '../../helper/wrapPattern';
import {
  ContactContainer,
  AvatarContainer,
  AvatarLabel,
  ContactListContainer,
  CallIcon,
} from './Contact.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Contact = () => {
  return (
    <ContactContainer>
      <Card>
        <CardItem>
          <AvatarContainer>
            <Thumbnail large source={UserAvatar} />
            <AvatarLabel bold>Praveen</AvatarLabel>
          </AvatarContainer>
        </CardItem>
        <CardItem>
          <ContactListContainer>
            <List>
              <ListItem noBorder noIndent>
                <Left>
                  <Text>+919876543210</Text>
                </Left>
                <Right>
                  <TouchableOpacity>
                    <CallIcon
                      type={ICON.FONT_AWESOME_FAMILY}
                      name={ICON.PHONE}
                    />
                  </TouchableOpacity>
                </Right>
              </ListItem>
            </List>
          </ContactListContainer>
        </CardItem>
      </Card>
    </ContactContainer>
  );
};

export default wrapPattern({
  Component: Contact,
  pattern: CONSTANT.SCREEN_BACKGROUND.BACKGROUND_2,
});
