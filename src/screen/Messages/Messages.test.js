import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import useService from 'hook/useService';
import Messages from './index';

jest.mock('hook/useService');

describe('Messages', () => {
  const mockNavigation = { navigate: jest.fn() };
  const mockMessagesService = jest.fn();

  beforeEach(() => {
    mockMessagesService.mockResolvedValue([{ name: 'Praveen', count: '1' }]);
    useService.mockImplementation(() => ({
      getMessageList: mockMessagesService,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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

  it('should load message list successfully', async () => {
    const { getByTestId, getByText } = render(
      <Messages navigation={mockNavigation} />,
    );

    await waitFor(() => getByTestId('message_0'));

    expect(getByText('Praveen')).toBeDefined();
    expect(getByText('1')).toBeDefined();

    fireEvent.press(getByTestId('message_0'));

    expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      'MESSAGE',
      expect.objectContaining({
        name: 'Praveen',
        title: 'Praveen',
      }),
    );
  });
});
