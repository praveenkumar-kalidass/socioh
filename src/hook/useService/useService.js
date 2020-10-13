import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-community/async-storage';

import { CONSTANT, ERROR } from '../../constant';
import useAjax from '../useAjax';
import useUser from '../useUser';

const useService = () => {
  const { ajax } = useAjax();
  const { user, saveUserDetails, clearUserDetails } = useUser();

  const signUp = async ({ name, email, password }) => {
    await Keychain.resetGenericPassword();
    await Keychain.setGenericPassword(email, password);
    await AsyncStorage.setItem(
      CONSTANT.ASYNC_STORAGE_KEY.SOCIOH_USER,
      JSON.stringify({
        name,
        email,
      }),
    );
    saveUserDetails({
      name,
      email,
    });
    return ajax();
  };

  const signIn = async ({ email, password }) => {
    const credentials = await Keychain.getGenericPassword();
    if (credentials.username === email && credentials.password === password) {
      const userDetails = await AsyncStorage.getItem(
        CONSTANT.ASYNC_STORAGE_KEY.SOCIOH_USER,
      );
      saveUserDetails(JSON.parse(userDetails));
      return ajax();
    }
    throw Error(ERROR.INVALID_CREDENTIALS);
  };

  const logout = async () => {
    clearUserDetails();
    return ajax();
  };

  const getUserDetails = async () => {
    if (user) {
      await ajax();
      return user;
    }
    throw Error(ERROR.NO_USER_FOUND);
  };

  return { signUp, signIn, logout, getUserDetails };
};

export default useService;
