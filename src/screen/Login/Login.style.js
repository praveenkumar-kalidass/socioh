import styled from 'styled-components/native';
import { Text } from 'native-base';

import { COLOR, FONT, SPACING } from '../../constant';

export const LoginView = styled.ScrollView`
  background-color: ${COLOR.PRIMARY};
  padding-vertical: ${SPACING.SPACE_40};
`;

export const Title = styled(Text)`
  color: ${COLOR.WHITE};
  font-size: ${FONT.SIZE_80};
  text-transform: uppercase;
`;

export const TitleView = styled.View`
  align-items: center;
  margin-top: ${SPACING.SPACE_40};
`;
