import styled from 'styled-components/native';
import { Badge, Text } from 'native-base';

import { COLOR, FONT, SPACING } from 'constant';

export const ProfileContainer = styled.View`
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

export const AvatarDescription = styled(Text)`
  color: ${COLOR.BLACK};
  font-size: ${FONT.SIZE_16};
  margin-top: ${SPACING.SPACE_10};
`;

export const InterestsContainer = styled.View`
  border-top-width: 1px;
  border-top-color: ${COLOR.PRIMARY};
  flex: 1;
  padding-top: ${SPACING.SPACE_20};
`;

export const InterestsTitleContainer = styled.View`
  align-items: center;
  margin-bottom: ${SPACING.SPACE_20};
`;

export const InterestsTitle = styled(Text)`
  color: ${COLOR.BLACK};
  font-size: ${FONT.SIZE_16};
  font-weight: bold;
`;

export const BadgeContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const InterestChip = styled(Badge)`
  background-color: ${COLOR.WHITE};
  border: 1px solid ${COLOR.SECONDARY};
  margin-bottom: ${SPACING.SPACE_10};
  margin-left: ${SPACING.SPACE_5};
  margin-right: ${SPACING.SPACE_5};
`;

export const Interest = styled(Text)`
  color: ${COLOR.BLACK};
  font-style: italic;
`;
