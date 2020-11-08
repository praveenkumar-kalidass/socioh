import React from 'react';
import { render } from '@testing-library/react-native';

import Contact from './Contact';

describe('Contact', () => {
  it('should match snapshot', () => {
    const container = render(<Contact />);

    expect(container).toMatchSnapshot();
  });
});
