import React from 'react';
import { render } from '@testing-library/react-native';

import Feedback from './index';

describe('Feedback', () => {
  it('should match snapshot', () => {
    const container = render(<Feedback />);

    expect(container).toMatchSnapshot();
  });
});
