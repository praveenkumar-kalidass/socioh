import React from 'react';
import { Modal } from 'react-native';
import PropTypes from 'prop-types';
import RNWebView from 'react-native-webview';

import { ICON } from '../../constant';
import {
  ModalContainer,
  ModalHeader,
  HeaderIcon,
  SearchInput,
} from './WebView.style';

const WebView = ({ uri, onClose }) => {
  return (
    <Modal>
      <ModalContainer>
        <ModalHeader>
          <SearchInput testID="webview_uri" disabled value={uri} />
          <HeaderIcon
            testID="webview_close"
            type={ICON.MATERIAL_FAMILY}
            name={ICON.CLOSE}
            onPress={onClose}
          />
        </ModalHeader>
        <RNWebView source={{ uri }} />
      </ModalContainer>
    </Modal>
  );
};

WebView.propTypes = {
  uri: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WebView;
