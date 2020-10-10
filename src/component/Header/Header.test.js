import React from 'react';
import { render } from '@testing-library/react-native';

import Header from './index';

describe('Header', () => {
  const mockScene = {
    descriptor: {
      options: {
        title: 'Header',
      },
    },
  };

  it('should match snapshot', () => {
    const container = render(<Header scene={mockScene} />);

    expect(container).toMatchSnapshot();
  });
});
