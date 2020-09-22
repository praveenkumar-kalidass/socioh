import React from 'react';
import { Modal } from 'react-native';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';

import { COLOR } from '../../constant';
import { OverlayContainer } from './ScreenLoader.style';

const ScreenLoader = ({ isVisible }) => (
  <Modal visible={isVisible} testID="screen_loader_modal" transparent>
    <OverlayContainer>
      <Spinner testID="screen_loader" color={COLOR.PRIMARY} />
    </OverlayContainer>
  </Modal>
);

ScreenLoader.defaultProps = {
  isVisible: false,
};

ScreenLoader.propTypes = {
  isVisible: PropTypes.bool,
};

export default ScreenLoader;
