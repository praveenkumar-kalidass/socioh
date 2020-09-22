import { act, renderHook } from '@testing-library/react-hooks';

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

  it('should make a call to ajax, when signup is called', () => {
    const { result } = renderHook(() => useService());

    act(() => {
      result.current.signUp();
    });

    expect(ajaxMock.ajax).toHaveBeenCalledTimes(1);
  });
});
