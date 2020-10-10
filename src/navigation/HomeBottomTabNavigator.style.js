import styled from 'styled-components/native';
import { Icon } from 'native-base';

import { COLOR, FONT } from '../constant';

export const TabIcon = styled(Icon)`
  color: ${({ active }) => (active ? COLOR.PRIMARY : COLOR.PALE_GREEN)};
  font-size: ${FONT.SIZE_50};
`;
