import React from 'react';

import MessageCard from '../../component/MessageCard';
import SociohBot from '../../asset/image/socioh_bot.jpg';
import { CONSTANT } from '../../constant';
import { MessagesContainer } from './Messages.style';

const Messages = () => {
  return (
    <MessagesContainer>
      <MessageCard highlight image={SociohBot} primaryText={CONSTANT.APP_BOT} />
    </MessagesContainer>
  );
};

export default Messages;
