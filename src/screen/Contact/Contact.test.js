import React from 'react';
import { render } from '@testing-library/react-native';

import Contact from './Contact';

describe('Contact', () => {
  const mockRoute = {
    params: {
      contact: {
        givenName: 'Praveenkumar',
        familyName: 'K',
        phoneNumbers: [
          {
            label: 'mobile',
            number: '+919876543210',
          },
        ],
      },
    },
  };

  it('should match snapshot', () => {
    const container = render(<Contact route={mockRoute} />);

    expect(container).toMatchSnapshot();
  });

  it('should render contact details when route params are present', () => {
    const { getByTestId } = render(<Contact route={mockRoute} />);

    expect(getByTestId('contact_name').props.children).toStrictEqual(
      'Praveenkumar K',
    );
    expect(getByTestId('contact_phone_0').props.children).toStrictEqual(
      '+919876543210',
    );
  });
});
