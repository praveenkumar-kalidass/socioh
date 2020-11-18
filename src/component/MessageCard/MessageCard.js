import React from 'react';
import PropTypes from 'prop-types';
import { Body, Card, CardItem, Left, Text, Thumbnail } from 'native-base';

import {
  PrimaryText,
  NotificationContainer,
  Notification,
  Count,
} from './MessageCard.style';

const MessageCard = ({
  image,
  primaryText,
  secondaryText,
  notificationText,
}) => {
  return (
    <>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail large source={image} />
            <Body>
              <PrimaryText testID="card_primary_text">
                {primaryText}
              </PrimaryText>
              <If condition={Boolean(secondaryText)}>
                <Text note testID="card_secondary_text">
                  {secondaryText}
                </Text>
              </If>
            </Body>
            <If condition={Boolean(notificationText)}>
              <NotificationContainer>
                <Notification>
                  <Count testID="card_notification">{notificationText}</Count>
                </Notification>
              </NotificationContainer>
            </If>
          </Left>
        </CardItem>
      </Card>
    </>
  );
};

MessageCard.propTypes = {
  image: PropTypes.any.isRequired,
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  notificationText: PropTypes.string,
};

MessageCard.defaultProps = {
  secondaryText: null,
  notificationText: null,
};

export default MessageCard;
