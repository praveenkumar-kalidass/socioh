import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-community/async-storage';

import { CONSTANT } from '../../constant';
import useAjax from '../useAjax';

const useService = () => {
  const { ajax } = useAjax();

  const signUp = async ({ name, email, password }) => {
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

  return { signUp };
};

export default useService;
