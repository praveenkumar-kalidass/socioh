import React from 'react';
import PropTypes from 'prop-types';
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
import RNPhoneCall from 'react-native-phone-call';

import UserAvatar from 'asset/image/user.png';
import { CONSTANT, ICON } from 'constant';
import wrapPattern from 'helper/wrapPattern';
import {
  ContactContainer,
  AvatarContainer,
  AvatarLabel,
  ContactListContainer,
  CallIcon,
} from './Contact.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Contact = ({ route }) => {
  const { contact } = route.params;

  const handlePhoneCall = async (number) => {
    try {
      await RNPhoneCall({
        number,
        prompt: true,
      });
    } catch (error) {
      console.warn('Error:', error);
    }
  };

  return (
    <ContactContainer>
      <Card>
        <CardItem>
          <AvatarContainer>
            <Thumbnail large source={UserAvatar} />
            <AvatarLabel bold testID="contact_name">
              {`${contact.givenName} ${contact.familyName}`}
            </AvatarLabel>
          </AvatarContainer>
        </CardItem>
        <CardItem>
          <ContactListContainer>
            <List>
              <For each="phone" index="index" of={contact.phoneNumbers}>
                <ListItem noBorder noIndent key={`contact_phone_${index}`}>
                  <Left>
                    <Text testID={`contact_phone_${index}`}>
                      {phone.number}
                    </Text>
                  </Left>
                  <Right>
                    <TouchableOpacity>
                      <CallIcon
                        testID={`contact_call_${phone.number}`}
                        type={ICON.FONT_AWESOME_FAMILY}
                        name={ICON.PHONE}
                        onPress={() => handlePhoneCall(phone.number)}
                      />
                    </TouchableOpacity>
                  </Right>
                </ListItem>
              </For>
            </List>
          </ContactListContainer>
        </CardItem>
      </Card>
    </ContactContainer>
  );
};

Contact.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      contact: PropTypes.shape({
        givenName: PropTypes.string,
        familyName: PropTypes.string,
        phoneNumbers: PropTypes.array,
      }),
    }),
  }).isRequired,
};

export default wrapPattern({
  Component: Contact,
  pattern: CONSTANT.SCREEN_BACKGROUND.BACKGROUND_2,
});
