import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';

import validateFields from '../../helper/validateFields';
import useService from '../../hook/useService';
import Signin from './index';

jest.mock('../../helper/validateFields');

jest.mock('../../hook/useService');

describe('Signin', () => {
  const mockNavigation = { navigate: jest.fn() };
  const mockSigninService = jest.fn();

  beforeEach(() => {
    mockSigninService.mockResolvedValue();
    useService.mockImplementation(() => ({ signIn: mockSigninService }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const container = render(<Signin />);

    expect(container).toMatchSnapshot();
  });

  it('should not show validation error when signin email is valid', () => {
    validateFields.mockImplementation(() => ({
      email: '',
      password: '',
    }));

    const { getByTestId, queryByTestId } = render(<Signin />);

    act(() => {
      fireEvent.changeText(
        getByTestId('signin_input_email'),
        'praveen@github.com',
      );
    });
    act(() => {
      fireEvent(getByTestId('signin_input_email'), 'onBlur');
    });

    expect(getByTestId('signin_input_email').props.value).toStrictEqual(
      'praveen@github.com',
    );
    expect(queryByTestId('signin_error_email')).toBeNull();
  });

  it('should show validation error when signin email is not valid', () => {
    validateFields.mockImplementation(() => ({
      email: 'email is not valid',
      password: '',
    }));

    const { getByTestId } = render(<Signin />);

    act(() => {
      fireEvent.changeText(getByTestId('signin_input_email'), 'praveen');
    });
    act(() => {
      fireEvent(getByTestId('signin_input_email'), 'onBlur');
    });

    expect(getByTestId('signin_input_email').props.value).toStrictEqual(
      'praveen',
    );
    expect(getByTestId('signin_error_email').props.children).toStrictEqual(
      'email is not valid',
    );
  });

  it('should complete signup when all field validations are passed', async () => {
    validateFields.mockImplementation(() => ({
      email: '',
      password: '',
    }));

    const { getByTestId } = render(<Signin navigation={mockNavigation} />);

    await act(async () => {
      await fireEvent.changeText(
        getByTestId('signin_input_email'),
        'praveen@github.com',
      );
      await fireEvent(getByTestId('signin_input_email'), 'onBlur');
      await fireEvent.changeText(
        getByTestId('signin_input_password'),
        '1234567890',
      );
      await fireEvent(getByTestId('signin_input_password'), 'onBlur');
    });
    await act(async () => {
      await fireEvent.press(getByTestId('signin_submit'));
    });

    expect(mockSigninService).toHaveBeenCalledTimes(1);
    expect(mockSigninService).toHaveBeenCalledWith({
      email: 'praveen@github.com',
      password: '1234567890',
    });

    expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('HOME');
  });
});
