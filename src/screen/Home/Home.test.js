import React from 'react';
import { render, act, fireEvent } from '@testing-library/react-native';

import Home from './index';

describe('Home', () => {
  const mockNavigation = { navigate: jest.fn() };

  it('should match snapshot', () => {
    const container = render(<Home />);

    expect(container).toMatchSnapshot();
  });

  it('should navigate to profile screen when avatar is pressed', () => {
    const { getByTestId } = render(<Home navigation={mockNavigation} />);

    act(() => {
      fireEvent.press(getByTestId('home_avatar'));
    });

    expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('PROFILE');
  });
});
