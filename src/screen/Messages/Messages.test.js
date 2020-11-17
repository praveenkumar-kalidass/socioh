import React from 'react';
import { render } from '@testing-library/react-native';

import Messages from './index';

describe('Messages', () => {
  it('should match snapshot', () => {
    const container = render(<Messages />);

    expect(container).toMatchSnapshot();
  });
});
