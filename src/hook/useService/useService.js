import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-community/async-storage';

import { CONSTANT, ERROR } from '../../constant';
import useAjax from '../useAjax';

const useService = () => {
  const { ajax } = useAjax();

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
    return ajax();
  };

  const signIn = async ({ email, password }) => {
    const credentials = await Keychain.getGenericPassword();
    if (credentials.username === email && credentials.password === password) {
      return ajax();
    }
    throw Error(ERROR.INVALID_CREDENTIALS);
  };

  return { signUp, signIn };
};

export default useService;
