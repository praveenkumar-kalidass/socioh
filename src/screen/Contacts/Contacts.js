import React from 'react';
import {
  Card,
  CardItem,
  Thumbnail,
  List,
  ListItem,
  Left,
  Text,
  Input,
  Item,
} from 'native-base';

import UserAvatar from '../../asset/image/user.png';
import { ContactDetails, ContactsContainer } from './Contacts.style';
import { COLOR } from '../../constant';

const Contacts = () => {
  return (
    <ContactsContainer>
      <Card>
        <CardItem header>
          <Item regular rounded style={{ borderColor: COLOR.PRIMARY }}>
            <Input placeholder="Input" />
          </Item>
        </CardItem>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail small source={UserAvatar} />
            </Left>
            <ContactDetails>
              <Text>Praveen</Text>
              <Text note>9876543210</Text>
            </ContactDetails>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail small source={UserAvatar} />
            </Left>
            <ContactDetails>
              <Text>Praveen</Text>
              <Text note>9876543210</Text>
            </ContactDetails>
          </ListItem>
        </List>
      </Card>
    </ContactsContainer>
  );
};

export default Contacts;
