import React from 'react';
import { render } from '@testing-library/react-native';

import UserAvatar from '../../asset/image/user.png';
import MessageCard from './index';

describe('MessageCard', () => {
  it('should match snapshot', () => {
    const container = render(
      <MessageCard
        image={UserAvatar}
        primaryText="Praveenkumar"
        secondaryText="Hello World!"
        notificationText="10"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
