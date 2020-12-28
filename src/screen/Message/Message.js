import React, { useEffect, useState } from 'react';
import { Input, Item, Icon } from 'native-base';

import { ICON, TRANSLATION } from '../../constant';
import MessageTile from '../../component/MessageTile';
import useService from '../../hook/useService';
import {
  InputContainer,
  MessageContainer,
  MessageGrid,
  SendButton,
} from './Message.style';

const Message = () => {
  const [chat, setChat] = useState([]);

  const { getMessages } = useService();

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const messages = await getMessages();
        setChat(messages.map((message) => ({ text: message, received: true })));
      } catch (error) {
        console.warn('Error:', error);
      }
    };

    loadMessages();
  }, []);

  return (
    <MessageContainer>
      <MessageGrid>
        <For each="message" index="index" of={chat}>
          <MessageTile
            key={`message_${index}`}
            testID={`message_${index}`}
            message={message.text}
            isReceived={message.received}
          />
        </For>
      </MessageGrid>
      <InputContainer>
        <Item regular>
          <Input placeholder={TRANSLATION.WRITE_YOUR_MESSAGE} />
          <SendButton>
            <Icon type={ICON.FONT_AWESOME_FAMILY} name={ICON.SEND} />
          </SendButton>
        </Item>
      </InputContainer>
    </MessageContainer>
  );
};

export default Message;
