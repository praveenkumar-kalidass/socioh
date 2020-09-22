import { renderHook, act } from '@testing-library/react-hooks';

import LoaderProvider from './Loader.provider';
import useLoader from './index';

describe('useLoader', () => {
  it('should have loading as false by default', () => {
    const { result } = renderHook(() => useLoader(), {
      wrapper: LoaderProvider,
    });

    expect(result.current.loading).toStrictEqual(false);
  });

  it('should set loading as true, when start loading is called', () => {
    const { result } = renderHook(() => useLoader(), {
      wrapper: LoaderProvider,
    });

    act(() => {
      result.current.startLoading();
    });

    expect(result.current.loading).toStrictEqual(true);
  });

  it('should set loading as false, when stop loading is called', () => {
    const { result } = renderHook(() => useLoader(), {
      wrapper: LoaderProvider,
    });

    act(() => {
      result.current.startLoading();
    });

    expect(result.current.loading).toStrictEqual(true);

    act(() => {
      result.current.stopLoading();
    });

    expect(result.current.loading).toStrictEqual(false);
  });
});
