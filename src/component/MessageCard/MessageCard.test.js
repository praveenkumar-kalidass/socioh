import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import UserAvatar from '../../asset/image/user.png';
import MessageCard from './index';
import { act } from 'react-test-renderer';

describe('MessageCard', () => {
  it('should match snapshot', () => {
    const container = render(
      <MessageCard
        image={UserAvatar}
        primaryText="Praveenkumar"
        secondaryText="Hello World!"
        notificationText="10"
        highlight
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with required params', () => {
    const container = render(
      <MessageCard image={UserAvatar} primaryText="Praveenkumar" />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should call onPress function prop when card is pressed', () => {
    const mockonPress = jest.fn();

    const { getByTestId } = render(
      <MessageCard
        image={UserAvatar}
        primaryText="Praveenkumar"
        onPress={mockonPress}
      />,
    );

    act(() => {
      fireEvent.press(getByTestId('message_card'));
    });

    expect(mockonPress).toHaveBeenCalledTimes(1);
  });
});
