import { Text } from 'native-base';
import styled from 'styled-components/native';

import { COLOR, SPACING } from 'constant';

export const MessagesContainer = styled.View`
  flex: 1;
  padding-horizontal: ${SPACING.SPACE_20};
`;

export const FriendsTitle = styled(Text)`
  color: ${COLOR.GRAY};
  margin-bottom: ${SPACING.SPACE_10};
  margin-top: ${SPACING.SPACE_20};
`;
