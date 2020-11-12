import styled from 'styled-components/native';
import { Icon, Text } from 'native-base';

import { COLOR, FONT, SPACING } from '../../constant';

export const ContactContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: ${SPACING.SPACE_20};
`;

export const AvatarContainer = styled.View`
  align-items: center;
  flex: 1;
  padding-vertical: ${SPACING.SPACE_20};
`;

export const AvatarLabel = styled(Text)`
  color: ${COLOR.BLACK};
  font-size: ${FONT.SIZE_24};
  margin-top: ${SPACING.SPACE_10};
`;

export const ContactListContainer = styled.View`
  flex: 1;
`;

export const CallIcon = styled(Icon)`
  color: ${COLOR.PRIMARY};
`;
