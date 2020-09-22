import React from 'react';
import { render } from '@testing-library/react-native';

import ScreenLoader from './index';

describe('ScreenLoader', () => {
  it('should match snapshot', () => {
    const container = render(<ScreenLoader />);

    expect(container).toMatchSnapshot();
  });

  it('should render loader when isVisible prop is true', () => {
    const { getByTestId } = render(<ScreenLoader isVisible />);

    expect(getByTestId('screen_loader_modal').props.visible).toStrictEqual(
      true,
    );
  });

  it('should not render loader when isVisible prop is undefined or false', () => {
    const { getByTestId } = render(<ScreenLoader />);

    expect(getByTestId('screen_loader_modal').props.visible).toStrictEqual(
      false,
    );
  });
});
