import React from 'react';
import { render, act, fireEvent, waitFor } from '@testing-library/react-native';

import useService from '../../hook/useService';
import Home from './index';

const serviceMock = {
  getUserDetails: jest.fn(),
  logout: jest.fn(),
};

jest.mock('../../hook/useService');

describe('Home', () => {
  const mockNavigation = { navigate: jest.fn() };

  beforeEach(() => {
    serviceMock.getUserDetails.mockResolvedValueOnce({ name: 'Praveen' });
    useService.mockImplementation(() => serviceMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const container = render(<Home />);

    expect(container).toMatchSnapshot();
  });

  it('should load user details', async () => {
    const { getByTestId } = render(<Home navigation={mockNavigation} />);

    await waitFor(() => getByTestId('home_user_name'));

    expect(getByTestId('home_user_name').props.children).toStrictEqual(
      'Praveen',
    );
  });

  it('should not show user details, when service throws error', async () => {
    serviceMock.getUserDetails.mockRejectedValueOnce(Error('NO_USER_FOUND'));

    const { queryByTestId } = render(<Home navigation={mockNavigation} />);

    expect(queryByTestId('home_user_name')).toBeNull();
  });

  it('should navigate to profile screen when avatar is pressed', () => {
    const { getByTestId } = render(<Home navigation={mockNavigation} />);

    act(() => {
      fireEvent.press(getByTestId('home_avatar'));
    });

    expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('PROFILE');
  });

  it('should call logout from service, when logout link is pressed', async () => {
    serviceMock.logout.mockResolvedValueOnce();

    const { getByTestId } = render(<Home navigation={mockNavigation} />);

    await waitFor(() => getByTestId('home_user_name'));

    await act(async () => {
      await fireEvent.press(getByTestId('home_logout'));
    });

    expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('LOGIN');
  });

  it('should navigate to messages screen when messages link is pressed', () => {
    const { getByTestId } = render(<Home navigation={mockNavigation} />);

    act(() => {
      fireEvent.press(getByTestId('home_messages'));
    });

    expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('MESSAGES');
  });
});
