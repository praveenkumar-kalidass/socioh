import styled from 'styled-components/native';
import { Button, CheckBox, Item, Text } from 'native-base';

import { COLOR, FONT, SPACING } from '../../constant';

export const SignupContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: ${SPACING.SPACE_20};
`;

export const InputContainer = styled.View`
  flex: 1;
`;

export const InputLabel = styled(Text)`
  margin-bottom: ${SPACING.SPACE_10};
`;

export const InputGrid = styled(Item)`
  background-color: ${COLOR.BACKGROUND};
  border-radius: ${SPACING.SPACE_5};
`;

export const InputErrorText = styled(Text)`
  color: ${COLOR.RED};
  font-size: ${FONT.SIZE_12};
  margin-top: ${SPACING.SPACE_10};
`;

export const SignupButton = styled(Button)`
  background-color: ${COLOR.SECONDARY};
  flex: 1;
  justify-content: center;
  margin-horizontal: ${SPACING.SPACE_10};
`;

export const SignupButtonText = styled(Text)`
  color: ${COLOR.BLACK};
  text-align: center;
`;

export const StyledCheckbox = styled(CheckBox)`
  margin-right: ${SPACING.SPACE_20};
`;

export const AgreementContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
