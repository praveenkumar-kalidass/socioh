import styled from 'styled-components/native';
import { Badge, Card, Text } from 'native-base';

import { COLOR, FONT, SPACING } from '../../constant';

export const HighlightCard = styled(Card)`
  ${({ highlight }) => (highlight ? `border-color: ${COLOR.PRIMARY};` : '')}
`;

export const PrimaryText = styled(Text)`
  font-size: ${FONT.SIZE_20};
  ${({ isMargin }) => (isMargin ? `margin-bottom: ${SPACING.SPACE_10};` : '')}
`;

export const NotificationContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-content: flex-start;
  align-self: stretch;
`;

export const Notification = styled(Badge)`
  background-color: ${COLOR.SECONDARY};
`;

export const Count = styled(Text)`
  color: ${COLOR.BLACK};
`;
