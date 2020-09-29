import React from 'react';
import { render } from '@testing-library/react-native';

import { Background1, Background2 } from './index';

describe('Background', () => {
  describe('Background1', () => {
    it('should match snapshot', () => {
      const container = render(<Background1 />);

      expect(container).toMatchSnapshot();
    });
  });

  describe('Background2', () => {
    it('should match snapshot', () => {
      const container = render(<Background2 />);

      expect(container).toMatchSnapshot();
    });
  });
});
