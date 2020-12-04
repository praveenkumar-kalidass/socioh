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
    route: {},
  };

  it('should match snapshot', () => {
    const container = render(<Header scene={mockScene} />);

    expect(container).toMatchSnapshot();
  });

  it('should render title from params, if present', () => {
    const mockSceneWithRoute = {
      route: {
        params: {
          title: 'Praveen',
        },
      },
    };

    const { getByText } = render(<Header scene={mockSceneWithRoute} />);

    expect(getByText('Praveen')).toBeDefined();
  });
});
