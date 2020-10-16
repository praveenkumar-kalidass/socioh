import React from 'react';
import { render, act, fireEvent } from '@testing-library/react-native';

import WebView from './index';

describe('WebView', () => {
  const mockClose = jest.fn();
  const mockUri = 'https://github.com/praveenkumar-kalidass';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const container = render(<WebView uri={mockUri} onClose={mockClose} />);

    expect(container).toMatchSnapshot();
  });

  it('should render uri', () => {
    const { getByTestId } = render(
      <WebView uri={mockUri} onClose={mockClose} />,
    );

    expect(getByTestId('webview_uri').props.value).toStrictEqual(mockUri);
  });

  it('should call close callback, when close icon is clicked', () => {
    const { getByTestId } = render(
      <WebView uri={mockUri} onClose={mockClose} />,
    );

    act(() => {
      fireEvent.press(getByTestId('webview_close'));
    });

    expect(mockClose).toHaveBeenCalledTimes(1);
  });
});
