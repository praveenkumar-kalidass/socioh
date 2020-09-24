import React from 'react';
import { render } from '@testing-library/react-native';

import Signin from './index';

describe('Signin', () => {
  it('should match snapshot', () => {
    const container = render(<Signin />);

    expect(container).toMatchSnapshot();
  });
});
