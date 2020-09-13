import React from 'react';
import { render } from '@testing-library/react-native';

import Login from './index';

describe('Login', () => {
  it('should match snapshot', () => {
    const container = render(<Login />);

    expect(container).toMatchSnapshot();
  });
});
