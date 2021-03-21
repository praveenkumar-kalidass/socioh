import { PermissionsAndroid, Platform } from 'react-native';
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-community/async-storage';
import RNContacts from 'react-native-contacts';
import CameraRoll from '@react-native-community/cameraroll';

import { CONSTANT, ERROR, TRANSLATION } from '../../constant';
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
      return {
        ...user,
        interests: Object.values(TRANSLATION.INTERESTS),
      };
    }
    throw Error(ERROR.NO_USER_FOUND);
  };

  const getContacts = async (search) => {
    const permission = await RNContacts.requestPermission();
    if (permission === CONSTANT.PERMISSION.AUTHORIZED) {
      let contacts;
      if (search) {
        contacts = await RNContacts.getContactsMatchingString(search);
      } else {
        contacts = await RNContacts.getAll();
      }
      await ajax();
      return contacts;
    }
    throw Error(ERROR.UNAUTHORIZED_TO_READ_CONTACTS);
  };

  const getMessages = async () => {
    await ajax();
    return CONSTANT.MESSAGES.GREETINGS;
  };

  const getMessageList = async () => {
    await ajax();
    return CONSTANT.MESSAGES.LIST;
  };

  const getPhotos = async () => {
    if (Platform.OS === CONSTANT.OS.ANDROID) {
      const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      const hasPermission = await PermissionsAndroid.check(permission);
      if (!hasPermission) {
        await PermissionsAndroid.request(permission);
      }
    }
    const gallery = await CameraRoll.getPhotos({
      first: 20,
      assetType: CONSTANT.CAMERA_ROLL.PHOTOS,
    });
    await ajax();
    return gallery.edges.map((image) => image.node.image);
  };

  return {
    signUp,
    signIn,
    logout,
    getUserDetails,
    getContacts,
    getMessages,
    getMessageList,
    getPhotos,
  };
};

export default useService;
