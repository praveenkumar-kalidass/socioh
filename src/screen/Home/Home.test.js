import React from 'react';
import { render } from '@testing-library/react-native';

import Home from './index';

describe('Home', () => {
  it('should match snapshot', () => {
    const container = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
