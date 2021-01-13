import React from 'react';
import { render } from '@testing-library/react-native';

import App from './App';

jest.useFakeTimers();

describe('App', () => {
  it('should be defined', () => {
    const container = render(<App />);

    expect(container).toBeDefined();
  });
});
