import React from 'react';
import { fireEvent, act, render, waitFor } from '@testing-library/react-native';

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

  it('should load contacts, when get contacts based on search returns success response', async () => {
    mockContactsService.mockResolvedValueOnce([
      {
        givenName: 'Praveen',
        familyName: 'K',
        phoneNumbers: [{ number: '9876543210' }],
      },
      {
        givenName: 'Socioh',
        familyName: 'User',
        phoneNumbers: [{ number: '9876512345' }],
      },
    ]);
    mockContactsService.mockResolvedValueOnce([
      {
        givenName: 'Socioh',
        familyName: 'User',
        phoneNumbers: [{ number: '9876512345' }],
      },
    ]);

    const { getByTestId } = render(<Contacts />);

    await waitFor(() => getByTestId('contact_name_0'));

    expect(getByTestId('contact_name_0').props.children).toStrictEqual(
      'Praveen K',
    );

    await act(async () => {
      await fireEvent.changeText(getByTestId('contact_search_input'), 'Soc');
    });

    expect(getByTestId('contact_name_0').props.children).toStrictEqual(
      'Socioh User',
    );
  });
});
