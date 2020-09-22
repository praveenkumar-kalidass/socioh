import { act, renderHook } from '@testing-library/react-hooks';

import useLoader from '../useLoader';
import useAjax from './index';

const useLoaderMock = {
  startLoading: jest.fn(),
  stopLoading: jest.fn(),
};

jest.mock('../useLoader');

describe('useAjax', () => {
  beforeEach(() => {
    useLoader.mockImplementation(() => useLoaderMock);
  });

  it('should start and stop loading, when ajax is called', async () => {
    const { result } = renderHook(() => useAjax());

    await act(async () => {
      await result.current.ajax();
    });

    expect(useLoaderMock.startLoading).toHaveBeenCalledTimes(1);
    expect(useLoaderMock.stopLoading).toHaveBeenCalledTimes(1);
  });
});
