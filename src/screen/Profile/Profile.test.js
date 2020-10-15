import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

import useService from '../../hook/useService';
import Profile from './index';

const serviceMock = {
  getUserDetails: jest.fn(),
};

jest.mock('../../hook/useService');

describe('Profile', () => {
  const mockNavigation = { navigate: jest.fn() };

  beforeEach(() => {
    serviceMock.getUserDetails.mockResolvedValueOnce({
      name: 'Praveen',
      interests: ['music', 'food', 'sports'],
    });
    useService.mockImplementation(() => serviceMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const container = render(<Profile />);

    expect(container).toMatchSnapshot();
  });

  it('should load user details and interests', async () => {
    const { getByTestId } = render(<Profile navigation={mockNavigation} />);

    await waitFor(() => getByTestId('profile_user_name'));

    expect(getByTestId('profile_user_name').props.children).toStrictEqual(
      'Praveen',
    );
    expect(getByTestId('profile_interest_food').props.children).toStrictEqual(
      'food',
    );
  });
});
