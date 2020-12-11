import styled from 'styled-components/native';
import { Icon, Text } from 'native-base';
import { COLOR, SPACING } from '../../constant';

export const TileContainer = styled.View`
  align-self: ${({ received }) => (received ? 'flex-start' : 'flex-end')};
  background-color: ${({ received }) =>
    received ? COLOR.PRIMARY : COLOR.SECONDARY};
  border-top-left-radius: ${SPACING.SPACE_5};
  border-top-right-radius: ${SPACING.SPACE_5};
  ${({ received }) =>
    received
      ? 'border-bottom-right-radius'
      : 'border-bottom-left-radius'}: ${SPACING.SPACE_5};
  margin-bottom: ${SPACING.SPACE_10};
  max-width: ${({ maxWidth }) => maxWidth}px;
  padding: ${SPACING.SPACE_10};
`;

export const IconContainer = styled.View`
  bottom: ${SPACING.SPACE_0};
  position: absolute;
  ${({ received }) => (received ? 'left' : 'right')}: -${SPACING.SPACE_10};
`;

export const PointerIcon = styled(Icon)`
  color: ${({ received }) => (received ? COLOR.PRIMARY : COLOR.SECONDARY)};
`;

export const Message = styled(Text)`
  color: ${({ received }) => (received ? COLOR.WHITE : COLOR.BLACK)};
`;
