import React from 'react';
import { Input, Item, Icon } from 'native-base';

import { ICON, TRANSLATION } from '../../constant';
import MessageTile from '../../component/MessageTile';
import {
  InputContainer,
  MessageContainer,
  MessageGrid,
  SendButton,
} from './Message.style';

const Message = () => {
  return (
    <MessageContainer>
      <MessageGrid>
        <MessageTile isReceived message="Hi, How are you?" />
        <MessageTile message="Hi, How are you?" />
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
