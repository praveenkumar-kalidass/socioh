import React from 'react';
import { View } from 'react-native';

import wrapPattern from './wrapPattern';

describe('wrapPattern', () => {
  const mockComponent = () => <View />;

  it('should wrap with default pattern, when no pattern is specified', () => {
    const container = wrapPattern({
      Component: mockComponent,
    });

    expect(container).toMatchSnapshot();
  });

  it('should wrap with specific pattern, when pattern is specified', () => {
    const container = wrapPattern({
      Component: mockComponent,
      pattern: 'BACKGROUND_2',
    });

    expect(container).toMatchSnapshot();
  });
});
