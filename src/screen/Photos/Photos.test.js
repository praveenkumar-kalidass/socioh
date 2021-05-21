import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

import useService from 'hook/useService';
import Photos from './index';

jest.mock('hook/useService');

describe('Photos', () => {
  const mockPhotosService = jest.fn();

  beforeEach(() => {
    mockPhotosService.mockResolvedValue();
    useService.mockImplementation(() => ({ getPhotos: mockPhotosService }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const container = render(<Photos />);

    expect(container).toMatchSnapshot();
  });

  it('should show no photos text when photo list is empty', async () => {
    mockPhotosService.mockResolvedValueOnce([]);

    const { getByTestId } = render(<Photos />);

    await waitFor(() => getByTestId('photos_empty'));

    expect(getByTestId('photos_empty').props.children).toStrictEqual(
      'No Photos available',
    );
  });

  it('should load photos when get photos returns photo list', async () => {
    mockPhotosService.mockResolvedValueOnce([{ uri: 'file://123' }]);

    const { getByTestId } = render(<Photos />);

    await waitFor(() => getByTestId('photo_0'));

    expect(getByTestId('photo_0').props.source).toStrictEqual({
      uri: 'file://123',
    });
  });
});
