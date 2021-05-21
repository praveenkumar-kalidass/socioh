import React, { useEffect, useState } from 'react';
import { Input, Item, Icon } from 'native-base';

import { CONSTANT, ICON, TRANSLATION } from 'constant';
import MessageTile from 'component/MessageTile';
import useService from 'hook/useService';
import {
  InputContainer,
  MessageContainer,
  MessageGrid,
  SendButton,
} from './Message.style';

const Message = () => {
  const [chat, setChat] = useState([]);
  const [text, setText] = useState('');

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

  const sendMessage = () => {
    if (text) {
      setChat([
        ...chat,
        { text, received: false },
        { text: CONSTANT.MESSAGES.PARDON, received: true },
      ]);
      setText('');
    }
  };

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
          <Input
            value={text}
            onChangeText={(value) => setText(value)}
            placeholder={TRANSLATION.WRITE_YOUR_MESSAGE}
            testID="message_input"
          />
          <SendButton onPress={sendMessage} testID="message_send">
            <Icon type={ICON.FONT_AWESOME_FAMILY} name={ICON.SEND} />
          </SendButton>
        </Item>
      </InputContainer>
    </MessageContainer>
  );
};

export default Message;
