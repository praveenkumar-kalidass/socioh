import React from 'react';
import { render, act, fireEvent } from '@testing-library/react-native';

import Login from './index';

describe('Login', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const container = render(<Login />);

    expect(container).toMatchSnapshot();
  });

  it('should navigate on press of signup link', () => {
    const { getByTestId } = render(<Login navigation={mockNavigation} />);

    act(() => fireEvent(getByTestId('sign_up'), 'onPress'));

    expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('SIGNUP');
  });
});
