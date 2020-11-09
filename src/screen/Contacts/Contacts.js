import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
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
import { COLOR, ROUTE, TRANSLATION } from '../../constant';
import useService from '../../hook/useService';
import { ContactDetails, ContactsContainer } from './Contacts.style';

const Contacts = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const { getContacts } = useService();

  const loadContacts = async (search) => {
    try {
      const contactList = await getContacts(search);
      setContacts(contactList);
    } catch (error) {
      console.warn('Error:', error);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const navigateToContact = (contact) => {
    navigation.navigate(ROUTE.CONTACT, { contact });
  };

  return (
    <ContactsContainer>
      <If condition={Boolean(contacts.length)}>
        <Card>
          <CardItem header>
            <Item regular rounded style={{ borderColor: COLOR.PRIMARY }}>
              <Input
                testID="contact_search_input"
                placeholder={TRANSLATION.SEARCH}
                onChangeText={loadContacts}
              />
            </Item>
          </CardItem>
          <ScrollView>
            <List>
              <For each="contact" index="index" of={contacts}>
                <ListItem
                  avatar
                  key={`contact_${index}`}
                  onPress={() => navigateToContact(contact)}>
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
          </ScrollView>
        </Card>
      </If>
    </ContactsContainer>
  );
};

Contacts.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Contacts;
