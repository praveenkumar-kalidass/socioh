import React from 'react';
import { render } from '@testing-library/react-native';

import TabIcon from './index';

describe('TabIcon', () => {
  it('should match snapshot', () => {
    const container = render(<TabIcon />);

    expect(container).toMatchSnapshot();
  });
});
