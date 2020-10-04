import React from 'react';
import { render } from '@testing-library/react-native';

import Profile from './index';

describe('Profile', () => {
  it('should match snapshot', () => {
    const container = render(<Profile />);

    expect(container).toMatchSnapshot();
  });
});
