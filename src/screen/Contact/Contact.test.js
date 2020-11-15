import React from 'react';
import { fireEvent, render, act } from '@testing-library/react-native';
import RNPhoneCall from 'react-native-phone-call';

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

  it('should call when call icon is pressed', () => {
    const { getByTestId } = render(<Contact route={mockRoute} />);

    expect(getByTestId('contact_phone_0').props.children).toStrictEqual(
      '+919876543210',
    );

    act(() => {
      fireEvent.press(getByTestId('contact_call_+919876543210'));
    });

    expect(RNPhoneCall).toHaveBeenCalledTimes(1);
    expect(RNPhoneCall).toHaveBeenCalledWith({
      number: '+919876543210',
      prompt: true,
    });
  });
});
