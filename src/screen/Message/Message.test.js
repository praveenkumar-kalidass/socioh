import React from 'react';
import { render } from '@testing-library/react-native';

import Message from './index';

describe('Message', () => {
  it('should match snapshot', () => {
    const container = render(<Message />);

    expect(container).toMatchSnapshot();
  });
});
