import React from 'react';
import { useWindowDimensions } from 'react-native';
import PropTypes from 'prop-types';

import { ICON } from '../../constant';
import {
  TileContainer,
  IconContainer,
  PointerIcon,
  Message,
} from './MessageTile.style';

const MessageTile = ({ isReceived, message, testID }) => {
  const { width } = useWindowDimensions();
  const pointer = isReceived ? ICON.CARET_LET : ICON.CARET_RIGHT;

  return (
    <TileContainer received={isReceived} maxWidth={width / 2}>
      <IconContainer received={isReceived}>
        <PointerIcon
          type={ICON.FONT_AWESOME_FAMILY}
          name={pointer}
          received={isReceived}
        />
      </IconContainer>
      <Message testID={testID} received={isReceived}>
        {message}
      </Message>
    </TileContainer>
  );
};

MessageTile.propTypes = {
  isReceived: PropTypes.bool,
  message: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

MessageTile.defaultProps = {
  isReceived: false,
  testID: 'message',
};

export default MessageTile;
