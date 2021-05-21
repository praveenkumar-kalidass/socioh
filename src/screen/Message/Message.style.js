import styled from 'styled-components/native';
import { Button } from 'native-base';

import { COLOR, SPACING } from 'constant';

export const MessageContainer = styled.View`
  flex: 1;
`;

export const MessageGrid = styled.ScrollView`
  flex: 1;
  padding-horizontal: ${SPACING.SPACE_20};
`;

export const InputContainer = styled.View`
  background-color: ${COLOR.WHITE};
`;

export const SendButton = styled(Button)`
  background-color: ${COLOR.PRIMARY};
  margin-vertical: ${SPACING.SPACE_5};
`;
