import styled from 'styled-components/native';
import { Icon, Input } from 'native-base';

import { COLOR, SPACING } from '../../constant';

export const ModalContainer = styled.View`
  flex: 1;
`;

export const ModalHeader = styled.View`
  background-color: ${COLOR.PRIMARY};
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${SPACING.SPACE_10};
`;

export const HeaderIcon = styled(Icon)`
  color: ${COLOR.WHITE};
`;

export const SearchInput = styled(Input)`
  color: ${COLOR.WHITE};
`;
