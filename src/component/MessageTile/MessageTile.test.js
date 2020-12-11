import React from 'react';
import { render } from '@testing-library/react-native';

import MessageTile from './index';

describe('MessageTile', () => {
  it('should match snapshot', () => {
    const container = render(<MessageTile message="Hi" />);

    expect(container).toMatchSnapshot();
  });

  it('should render styles for received message, when the message is received one', () => {
    const container = render(
      <MessageTile isReceived message="Good morning!" />,
    );

    expect(container).toMatchSnapshot();
  });
});
