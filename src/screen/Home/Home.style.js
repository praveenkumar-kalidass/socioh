import styled from 'styled-components/native';
import { Text, List, ListItem, Icon } from 'native-base';

import { COLOR, FONT, SPACING } from '../../constant';

export const HomeContainer = styled.View`
  background-color: ${COLOR.PALE_GREEN};
  flex: 1;
`;

export const HomeLayout = styled.View`
  background-color: ${COLOR.PRIMARY};
  border-top-left-radius: ${SPACING.SPACE_20};
  border-top-right-radius: ${SPACING.SPACE_20};
  flex: 1;
  margin-top: 30%;
`;

export const AvatarContainer = styled.View`
  align-items: center;
  padding-vertical: ${SPACING.SPACE_20};
`;

export const AvatarLabel = styled(Text)`
  color: ${COLOR.WHITE};
  font-size: ${FONT.SIZE_24};
  margin-top: ${SPACING.SPACE_10};
`;

export const UserNavigationList = styled(List)``;

export const UserNavigationItem = styled(ListItem)`
  margin-left: ${SPACING.SPACE_0};
  padding-left: ${SPACING.SPACE_20};
`;

export const NavigationIcon = styled(Icon)`
  color: ${COLOR.WHITE};
`;

export const NavigationLabel = styled(Text)`
  color: ${COLOR.WHITE};
  font-size: ${FONT.SIZE_16};
  font-weight: bold;
  margin-left: ${SPACING.SPACE_20};
  text-transform: uppercase;
`;
