import React from 'react';
import { Alert } from 'react-native';
import { render, act, fireEvent } from '@testing-library/react-native';

import validateFields from '../../helper/validateFields';
import Signup from './index';

jest.mock('../../helper/validateFields');

describe('Signup', () => {
  beforeEach(() => {
    Alert.alert = jest.fn();
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

    expect(Alert.alert).toHaveBeenCalledTimes(0);
    expect(getByTestId('signup_terms').props.style.borderColor).toStrictEqual(
      '#ff0000',
    );
  });

  it('should complete signup when all field validations are passed', () => {
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
      fireEvent(getByTestId('signup_terms'), 'onPress');
    });
    act(() => {
      fireEvent.press(getByTestId('signup_submit'));
    });

    expect(Alert.alert).toHaveBeenCalledTimes(1);
  });
});
