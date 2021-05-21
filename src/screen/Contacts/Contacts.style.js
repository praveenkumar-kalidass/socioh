import styled from 'styled-components/native';
import { Body } from 'native-base';

import { SPACING } from 'constant';

export const ContactsContainer = styled.View`
  flex: 1;
  padding-horizontal: ${SPACING.SPACE_20};
`;

export const ContactDetails = styled(Body)`
  border-bottom-width: 0;
`;
