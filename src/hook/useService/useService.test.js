import { Platform, PermissionsAndroid } from 'react-native';
import { act, renderHook } from '@testing-library/react-hooks';
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-community/async-storage';
import RNContacts from 'react-native-contacts';
import CameraRoll from '@react-native-community/cameraroll';

import useAjax from '../useAjax';
import useUser from '../useUser';
import useService from './index';

const ajaxMock = {
  ajax: jest.fn(),
};
const userMock = {
  user: { name: 'Praveen' },
  saveUserDetails: jest.fn(),
  clearUserDetails: jest.fn(),
};

jest.mock('../useAjax');
jest.mock('../useUser');

describe('useService', () => {
  beforeEach(() => {
    useAjax.mockImplementation(() => ajaxMock);
    useUser.mockImplementation(() => userMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('signUp', () => {
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

      expect(Keychain.resetGenericPassword).toHaveBeenCalledTimes(1);
      expect(Keychain.setGenericPassword).toHaveBeenCalledTimes(1);
      expect(Keychain.setGenericPassword).toHaveBeenCalledWith(
        'praveen@github.com',
        '1234567890',
      );
    });

    it('should store user info in local storage and user context, when signup is called', async () => {
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
      expect(userMock.saveUserDetails).toHaveBeenCalledTimes(1);
      expect(userMock.saveUserDetails).toHaveBeenCalledWith({
        name: 'Praveen',
        email: 'praveen@github.com',
      });
    });
  });

  describe('signIn', () => {
    it('should get credentials, when signin is called', async () => {
      Keychain.getGenericPassword.mockResolvedValueOnce({
        username: 'praveen@github.com',
        password: '1234567890',
      });

      const { result } = renderHook(() => useService());

      await act(async () => {
        await result.current.signIn({
          email: 'praveen@github.com',
          password: '1234567890',
        });
      });

      expect(Keychain.getGenericPassword).toHaveBeenCalledTimes(1);
    });

    it('should get user details and save in user context, when credentials match', async () => {
      Keychain.getGenericPassword.mockResolvedValueOnce({
        username: 'praveen@github.com',
        password: '1234567890',
      });
      AsyncStorage.getItem.mockResolvedValueOnce(
        JSON.stringify({
          email: 'praveen@github.com',
          name: 'Praveen',
        }),
      );

      const { result } = renderHook(() => useService());

      await act(async () => {
        await result.current.signIn({
          email: 'praveen@github.com',
          password: '1234567890',
        });
      });

      expect(userMock.saveUserDetails).toHaveBeenCalledTimes(1);
      expect(userMock.saveUserDetails).toHaveBeenCalledWith({
        name: 'Praveen',
        email: 'praveen@github.com',
      });
    });

    it('should make a call to ajax, when credentials match', async () => {
      Keychain.getGenericPassword.mockResolvedValueOnce({
        username: 'praveen@github.com',
        password: '1234567890',
      });

      const { result } = renderHook(() => useService());

      await act(async () => {
        await result.current.signIn({
          email: 'praveen@github.com',
          password: '1234567890',
        });
      });

      expect(ajaxMock.ajax).toHaveBeenCalledTimes(1);
    });

    it('should throw error, when credentials do not match', async () => {
      Keychain.getGenericPassword.mockResolvedValueOnce({
        username: 'praveen@github.com',
        password: '123456',
      });

      const { result } = renderHook(() => useService());

      await expect(
        result.current.signIn({
          email: 'praveen@github.com',
          password: '1234567890',
        }),
      ).rejects.toEqual(Error('INVALID_CREDENTIALS'));
    });
  });

  describe('logout', () => {
    it('should clear user credential, when logout is called', async () => {
      const { result } = renderHook(() => useService());

      await act(async () => {
        await result.current.logout();
      });

      expect(userMock.clearUserDetails).toHaveBeenCalledTimes(1);
      expect(ajaxMock.ajax).toHaveBeenCalledTimes(1);
    });
  });

  describe('getUserDetails', () => {
    it('should return the user details, when called', async () => {
      const { result } = renderHook(() => useService());
      let userDetails;

      await act(async () => {
        userDetails = await result.current.getUserDetails();
      });

      expect(userDetails).toStrictEqual({
        name: 'Praveen',
        interests: [
          'music',
          'food',
          'culture',
          'drinks',
          'sport',
          'travel',
          'fun',
          'business',
          'art',
        ],
      });
      expect(ajaxMock.ajax).toHaveBeenCalledTimes(1);
    });
  });

  describe('getContacts', () => {
    it('should get contacts successfully', async () => {
      RNContacts.requestPermission.mockResolvedValueOnce('authorized');
      RNContacts.getAll.mockResolvedValueOnce([{ name: 'Praveen' }]);

      const { result } = renderHook(() => useService());
      let contacts;

      await act(async () => {
        contacts = await result.current.getContacts();
      });

      expect(ajaxMock.ajax).toHaveBeenCalledTimes(1);
      expect(contacts).toStrictEqual([{ name: 'Praveen' }]);
    });

    it('should get contacts by matching string, when search text is not empty', async () => {
      RNContacts.requestPermission.mockResolvedValueOnce('authorized');
      RNContacts.getContactsMatchingString.mockResolvedValueOnce([
        { name: 'Praveen' },
      ]);

      const { result } = renderHook(() => useService());
      let contacts;

      await act(async () => {
        contacts = await result.current.getContacts('Prav');
      });

      expect(RNContacts.getContactsMatchingString).toHaveBeenCalledWith('Prav');
      expect(ajaxMock.ajax).toHaveBeenCalledTimes(1);
      expect(contacts).toStrictEqual([{ name: 'Praveen' }]);
    });

    it('should throw unauthorized error, when request permission returns denied', async () => {
      RNContacts.requestPermission.mockResolvedValueOnce('denied');

      const { result } = renderHook(() => useService());

      await expect(result.current.getContacts()).rejects.toEqual(
        Error('UNAUTHORIZED_TO_READ_CONTACTS'),
      );
    });
  });

  describe('getMessages', () => {
    it('should get messages successfully', async () => {
      const { result } = renderHook(() => useService());
      let messages;

      await act(async () => {
        messages = await result.current.getMessages();
      });

      expect(ajaxMock.ajax).toHaveBeenCalledTimes(1);
      expect(messages).toStrictEqual(['Hi, Good morning', 'How are you?']);
    });
  });

  describe('getMessageList', () => {
    it('should get message list successfully', async () => {
      const { result } = renderHook(() => useService());
      let messages;

      await act(async () => {
        messages = await result.current.getMessageList();
      });

      expect(ajaxMock.ajax).toHaveBeenCalledTimes(1);
      expect(messages).toStrictEqual([
        { name: 'Tony Stark', count: '2' },
        { name: 'Captain America', count: '5' },
      ]);
    });
  });

  describe('getPhotos', () => {
    describe('ios', () => {
      beforeEach(() => {
        Platform.OS = 'ios';
      });

      it('should return photos successfully', async () => {
        CameraRoll.getPhotos.mockResolvedValueOnce({
          edges: [{ node: { image: { uri: 'ph://123' } } }],
        });

        const { result } = renderHook(() => useService());
        let photos;

        await act(async () => {
          photos = await result.current.getPhotos();
        });

        expect(ajaxMock.ajax).toHaveBeenCalledTimes(1);
        expect(photos).toStrictEqual([{ uri: 'ph://123' }]);
      });

      it('should throw error when get photos fails', async () => {
        CameraRoll.getPhotos.mockRejectedValueOnce('ERROR');

        const { result } = renderHook(() => useService());

        await expect(result.current.getPhotos()).rejects.toStrictEqual('ERROR');
      });
    });

    describe('android', () => {
      beforeEach(() => {
        Platform.OS = 'android';
      });

      it('should get photos when check permission returns true', async () => {
        jest.spyOn(PermissionsAndroid, 'check').mockResolvedValueOnce(true);
        CameraRoll.getPhotos.mockResolvedValueOnce({
          edges: [{ node: { image: { uri: 'file://123' } } }],
        });

        const { result } = renderHook(() => useService());

        let photos;
        await act(async () => {
          photos = await result.current.getPhotos();
        });

        expect(ajaxMock.ajax).toHaveBeenCalledTimes(1);
        expect(photos).toStrictEqual([{ uri: 'file://123' }]);
      });

      it('should request for permission when check permission returns false', async () => {
        jest.spyOn(PermissionsAndroid, 'check').mockResolvedValueOnce(false);
        jest.spyOn(PermissionsAndroid, 'request').mockResolvedValueOnce();
        CameraRoll.getPhotos.mockResolvedValueOnce({
          edges: [{ node: { image: { uri: 'file://123' } } }],
        });

        const { result } = renderHook(() => useService());

        let photos;
        await act(async () => {
          photos = await result.current.getPhotos();
        });

        expect(ajaxMock.ajax).toHaveBeenCalledTimes(1);
        expect(photos).toStrictEqual([{ uri: 'file://123' }]);
      });
    });
  });
});
