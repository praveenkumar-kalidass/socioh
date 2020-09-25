import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';

import validateFields from '../../helper/validateFields';
import Signin from './index';

jest.mock('../../helper/validateFields');

describe('Signin', () => {
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
});
