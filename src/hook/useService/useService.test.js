import { act, renderHook } from '@testing-library/react-hooks';
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-community/async-storage';

import useAjax from '../useAjax';
import useService from './index';

const ajaxMock = {
  ajax: jest.fn(),
};

jest.mock('../useAjax');

describe('useService', () => {
  beforeEach(() => {
    useAjax.mockImplementation(() => ajaxMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should make a call to ajax, when signup is called', async () => {
    const { result } = renderHook(() => useService());

    await act(async () => {
      await result.current.signUp({
        name: 'Praveen',
        email: 'praveen@github.com',
        password: '1234567890',
      });
    });

    expect(ajaxMock.ajax).toHaveBeenCalledTimes(1);
  });

  it('should store credentials in keychain, when signup is called', async () => {
    const { result } = renderHook(() => useService());

    await act(async () => {
      await result.current.signUp({
        name: 'Praveen',
        email: 'praveen@github.com',
        password: '1234567890',
      });
    });

    expect(Keychain.setGenericPassword).toHaveBeenCalledTimes(1);
    expect(Keychain.setGenericPassword).toHaveBeenCalledWith(
      'praveen@github.com',
      '1234567890',
    );
  });

  it('should store user info in local storage, when signup is called', async () => {
    const { result } = renderHook(() => useService());

    await act(async () => {
      await result.current.signUp({
        name: 'Praveen',
        email: 'praveen@github.com',
        password: '1234567890',
      });
    });

    const expectedValue = JSON.stringify({
      name: 'Praveen',
      email: 'praveen@github.com',
    });

    expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      'SOCIOH_USER',
      expectedValue,
    );
  });
});
