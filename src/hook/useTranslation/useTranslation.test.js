import { renderHook, act } from '@testing-library/react-hooks';

import TranslationProvider from './Translation.provider';
import useTranslation from './index';

jest.mock('translation/en.json', () => ({
  TEST_TRANSLATE: 'Test english translation',
}));

jest.mock('translation/ta.json', () => ({
  TEST_TRANSLATE: 'Test tamil translation',
}));

describe('useTranslation', () => {
  it('should have english translation by default', () => {
    const { result } = renderHook(() => useTranslation(), {
      wrapper: TranslationProvider,
    });

    expect(result.current.translate('TEST_TRANSLATE')).toStrictEqual(
      'Test english translation',
    );
  });

  it('should change translation', () => {
    const { result } = renderHook(() => useTranslation(), {
      wrapper: TranslationProvider,
    });

    expect(result.current.translate('TEST_TRANSLATE')).toStrictEqual(
      'Test english translation',
    );

    act(() => {
      result.current.changeTranslation('ta');
    });

    expect(result.current.translate('TEST_TRANSLATE')).toStrictEqual(
      'Test tamil translation',
    );
  });

  it('should fallback to english translation if translation not found', () => {
    const { result } = renderHook(() => useTranslation(), {
      wrapper: TranslationProvider,
    });

    expect(result.current.translate('TEST_TRANSLATE')).toStrictEqual(
      'Test english translation',
    );

    act(() => {
      result.current.changeTranslation('hi');
    });

    expect(result.current.translate('TEST_TRANSLATE')).toStrictEqual(
      'Test english translation',
    );
  });

  it('should return key if translation is not found', () => {
    const { result } = renderHook(() => useTranslation(), {
      wrapper: TranslationProvider,
    });

    expect(result.current.translate('NOT_FOUND')).toStrictEqual('NOT_FOUND');
  });
});
