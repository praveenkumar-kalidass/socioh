import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

import useService from '../../hook/useService';
import Message from './index';

jest.mock('../../hook/useService');

describe('Message', () => {
  const mockMessagesService = jest.fn();

  beforeEach(() => {
    mockMessagesService.mockResolvedValue(['Hi']);
    useService.mockImplementation(() => ({ getMessages: mockMessagesService }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const container = render(<Message />);

    expect(container).toMatchSnapshot();
  });

  it('should load messages when screen is loaded', async () => {
    const { getByTestId } = render(<Message />);

    await waitFor(() => getByTestId('message_0'));

    expect(getByTestId('message_0').props.children).toStrictEqual('Hi');
  });
});
