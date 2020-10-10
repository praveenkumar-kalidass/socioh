import styled from 'styled-components/native';
import { Text } from 'native-base';

import { COLOR, FONT, SPACING } from '../../constant';

export const HeaderContainer = styled.SafeAreaView`
  background-color: ${COLOR.BACKGROUND};
`;

export const HeaderContentContainer = styled.View`
  position: absolute;
  padding-vertical: ${SPACING.SPACE_50};
  left: ${SPACING.SPACE_0};
  right: ${SPACING.SPACE_0};
`;

export const HeaderContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  padding-top: ${SPACING.SPACE_20};
`;

export const Title = styled(Text)`
  color: ${COLOR.WHITE};
  font-size: ${FONT.SIZE_24};
  font-weight: bold;
`;
