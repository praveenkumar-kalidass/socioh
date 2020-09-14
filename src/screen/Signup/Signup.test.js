import React from 'react';
import { render } from '@testing-library/react-native';

import Signup from './index';

describe('Signup', () => {
  it('should match snapshot', () => {
    const container = render(<Signup />);

    expect(container).toMatchSnapshot();
  });
});
