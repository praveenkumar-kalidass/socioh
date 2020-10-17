import React from 'react';
import { render } from '@testing-library/react-native';

import Contacts from './index';

describe('Contacts', () => {
  it('should match snapshot', () => {
    const container = render(<Contacts />);

    expect(container).toMatchSnapshot();
  });
});
