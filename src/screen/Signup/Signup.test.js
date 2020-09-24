import React from 'react';
import { render, act, fireEvent } from '@testing-library/react-native';

import validateFields from '../../helper/validateFields';
import useService from '../../hook/useService';
import Signup from './index';

jest.mock('../../helper/validateFields');

jest.mock('../../hook/useService');

describe('Signup', () => {
  const mockNavigation = { navigate: jest.fn() };
  const mockSignupService = jest.fn();

  beforeEach(() => {
    mockSignupService.mockResolvedValue();
    useService.mockImplementation(() => ({ signUp: mockSignupService }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const container = render(<Signup />);

    expect(container).toMatchSnapshot();
  });

  it('should not show validation error when signup name is valid', () => {
    validateFields.mockImplementation(() => ({
      name: '',
      email: '',
      password: '',
    }));

    const { getByTestId, queryByTestId } = render(<Signup />);

    act(() => {
      fireEvent.changeText(getByTestId('signup_input_name'), 'Praveen');
    });
    act(() => {
      fireEvent(getByTestId('signup_input_name'), 'onBlur');
    });

    expect(getByTestId('signup_input_name').props.value).toStrictEqual(
      'Praveen',
    );
    expect(queryByTestId('signup_error_name')).toBeNull();
  });

  it('should show validation error when signup name is not valid', () => {
    validateFields.mockImplementation(() => ({
      name: 'name should have minimum 3 characters',
      email: '',
      password: '',
    }));

    const { getByTestId } = render(<Signup />);

    act(() => {
      fireEvent.changeText(getByTestId('signup_input_name'), 'Pr');
    });
    act(() => {
      fireEvent(getByTestId('signup_input_name'), 'onBlur');
    });

    expect(getByTestId('signup_input_name').props.value).toStrictEqual('Pr');
    expect(getByTestId('signup_error_name').props.children).toStrictEqual(
      'name should have minimum 3 characters',
    );
  });

  it('should not complete signup and show error status when terms & conditions is not agreed', () => {
    validateFields.mockImplementation(() => ({
      name: '',
      email: '',
      password: '',
    }));

    const { getByTestId } = render(<Signup />);

    act(() => {
      fireEvent.changeText(getByTestId('signup_input_name'), 'Praveen');
      fireEvent(getByTestId('signup_input_name'), 'onBlur');
      fireEvent.changeText(
        getByTestId('signup_input_email'),
        'praveen@github.com',
      );
      fireEvent(getByTestId('signup_input_email'), 'onBlur');
      fireEvent.changeText(getByTestId('signup_input_password'), '1234567890');
      fireEvent(getByTestId('signup_input_password'), 'onBlur');
    });
    act(() => {
      fireEvent.press(getByTestId('signup_submit'));
    });

    expect(mockSignupService).toHaveBeenCalledTimes(0);
    expect(getByTestId('signup_terms').props.style.borderColor).toStrictEqual(
      '#ff0000',
    );
  });

  it('should complete signup when all field validations are passed', async () => {
    validateFields.mockImplementation(() => ({
      name: '',
      email: '',
      password: '',
    }));

    const { getByTestId } = render(<Signup navigation={mockNavigation} />);

    await act(async () => {
      await fireEvent.changeText(getByTestId('signup_input_name'), 'Praveen');
      await fireEvent(getByTestId('signup_input_name'), 'onBlur');
      await fireEvent.changeText(
        getByTestId('signup_input_email'),
        'praveen@github.com',
      );
      await fireEvent(getByTestId('signup_input_email'), 'onBlur');
      await fireEvent.changeText(
        getByTestId('signup_input_password'),
        '1234567890',
      );
      await fireEvent(getByTestId('signup_input_password'), 'onBlur');
      await fireEvent(getByTestId('signup_terms'), 'onPress');
    });
    await act(async () => {
      await fireEvent.press(getByTestId('signup_submit'));
    });

    expect(mockSignupService).toHaveBeenCalledTimes(1);
    expect(mockSignupService).toHaveBeenCalledWith({
      name: 'Praveen',
      email: 'praveen@github.com',
      password: '1234567890',
    });
    expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('HOME');
  });
});
