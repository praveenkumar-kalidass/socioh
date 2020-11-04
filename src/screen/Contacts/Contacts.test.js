import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

import useService from '../../hook/useService';
import Contacts from './index';

jest.mock('../../hook/useService');

describe('Contacts', () => {
  const mockContactsService = jest.fn();

  beforeEach(() => {
    mockContactsService.mockResolvedValue();
    useService.mockImplementation(() => ({ getContacts: mockContactsService }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const container = render(<Contacts />);

    expect(container).toMatchSnapshot();
  });

  it('should load contacts, when get contacts returns success response', async () => {
    mockContactsService.mockResolvedValueOnce([
      {
        givenName: 'Praveen',
        familyName: 'K',
        phoneNumbers: [{ number: '9876543210' }],
      },
    ]);

    const { getByTestId } = render(<Contacts />);

    await waitFor(() => getByTestId('contact_name_0'));

    expect(getByTestId('contact_name_0').props.children).toStrictEqual(
      'Praveen K',
    );
  });
});
