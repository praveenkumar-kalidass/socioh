import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Messages from './index';

describe('Messages', () => {
  const mockNavigation = { navigate: jest.fn() };

  it('should match snapshot', () => {
    const container = render(<Messages navigation={mockNavigation} />);

    expect(container).toMatchSnapshot();
  });

  it('should navigate to Message screen with data in route params', () => {
    const { getByTestId } = render(<Messages navigation={mockNavigation} />);

    fireEvent.press(getByTestId('socioh_bot'));

    expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      'MESSAGE',
      expect.objectContaining({
        name: 'Socioh Bot',
        title: 'Socioh Bot',
      }),
    );
  });
});
