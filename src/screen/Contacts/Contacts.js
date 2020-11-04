import React, { useEffect, useState } from 'react';
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
import useService from '../../hook/useService';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const { getContacts } = useService();

  const loadContacts = async () => {
    try {
      const contactList = await getContacts();
      setContacts(contactList);
    } catch (error) {
      console.warn('Error:', error);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <ContactsContainer>
      <Card>
        <CardItem header>
          <Item regular rounded style={{ borderColor: COLOR.PRIMARY }}>
            <Input placeholder="Input" />
          </Item>
        </CardItem>
        <If condition={Boolean(contacts.length)}>
          <List>
            <For each="contact" index="index" of={contacts}>
              <ListItem avatar key={`contact_${index}`}>
                <Left>
                  <Thumbnail small source={UserAvatar} />
                </Left>
                <ContactDetails>
                  <Text testID={`contact_name_${index}`}>
                    {`${contact.givenName} ${contact.familyName}`}
                  </Text>
                  <For
                    each="number"
                    index="numberIndex"
                    of={contact.phoneNumbers}>
                    <Text
                      note
                      testID={`phone_number_${index}_${numberIndex}`}
                      key={`phone_number_${index}_${numberIndex}`}>
                      {number.number}
                    </Text>
                  </For>
                </ContactDetails>
              </ListItem>
            </For>
          </List>
        </If>
      </Card>
    </ContactsContainer>
  );
};

export default Contacts;
