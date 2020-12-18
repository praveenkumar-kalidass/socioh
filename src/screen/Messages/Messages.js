import React from 'react';
import PropTypes from 'prop-types';

import MessageCard from '../../component/MessageCard';
import SociohBot from '../../asset/image/socioh_bot.jpg';
import { CONSTANT, ROUTE } from '../../constant';
import { MessagesContainer } from './Messages.style';

const Messages = ({ navigation }) => {
  const navigateToMessage = (data) => {
    navigation.navigate(ROUTE.MESSAGE, { ...data, title: data.name });
  };

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
    </MessagesContainer>
  );
};

Messages.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Messages;
