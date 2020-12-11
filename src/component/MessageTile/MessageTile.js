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

const MessageTile = ({ isReceived, message }) => {
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
      <Message received={isReceived}>{message}</Message>
    </TileContainer>
  );
};

MessageTile.propTypes = {
  isReceived: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

MessageTile.defaultProps = {
  isReceived: false,
};

export default MessageTile;
