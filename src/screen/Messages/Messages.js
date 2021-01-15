import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MessageCard from '../../component/MessageCard';
import SociohBot from '../../asset/image/socioh_bot.jpg';
import User from '../../asset/image/user.png';
import { CONSTANT, ROUTE, TRANSLATION } from '../../constant';
import { FriendsTitle, MessagesContainer } from './Messages.style';
import useService from '../../hook/useService';

const Messages = ({ navigation }) => {
  const [messageList, setMessageList] = useState([]);
  const { getMessageList } = useService();

  const navigateToMessage = (data) => {
    navigation.navigate(ROUTE.MESSAGE, { ...data, title: data.name });
  };

  useEffect(() => {
    const loadMessageList = async () => {
      try {
        const list = await getMessageList();
        setMessageList(list);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    loadMessageList();
  }, []);

  return (
    <MessagesContainer>
      <MessageCard
        highlight
        image={SociohBot}
        primaryText={CONSTANT.APP_BOT}
        onPress={() =>
          navigateToMessage({ image: SociohBot, name: CONSTANT.APP_BOT })
        }
        testID="socioh_bot"
      />
      <If condition={Boolean(messageList.length)}>
        <FriendsTitle>{TRANSLATION.MY_FRIENDS}</FriendsTitle>
      </If>
      <For each="message" index="index" of={messageList}>
        <MessageCard
          key={`message_${index}`}
          image={User}
          primaryText={message.name}
          onPress={() => navigateToMessage({ image: User, name: message.name })}
          testID={`message_${index}`}
          notificationText={message.count}
        />
      </For>
    </MessagesContainer>
  );
};

Messages.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Messages;
