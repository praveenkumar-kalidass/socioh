import React from 'react';
import { render } from '@testing-library/react-native';

import Photos from './index';

describe('Photos', () => {
  it('should match snapshot', () => {
    const container = render(<Photos />);

    expect(container).toMatchSnapshot();
  });
});
