import { renderHook, act } from '@testing-library/react-hooks';

import UserProvider from './User.provider';
import useUser from './index';

describe('useUser', () => {
  it('should have user value as null by default', () => {
    const { result } = renderHook(() => useUser(), {
      wrapper: UserProvider,
    });

    expect(result.current.user).toBeNull();
  });

  it('should save user details', () => {
    const { result } = renderHook(() => useUser(), {
      wrapper: UserProvider,
    });

    act(() => {
      result.current.saveUserDetails({ name: 'Praveen' });
    });

    expect(result.current.user).toStrictEqual({ name: 'Praveen' });
  });
});
