import styled from 'styled-components/native';
import { Text, Thumbnail, Icon, CardItem } from 'native-base';

import { FONT, SPACING } from 'constant';

export const FeedbackContainer = styled.View`
  padding-horizontal: ${SPACING.SPACE_20};
`;

export const CardContent = styled(CardItem)`
  margin: ${SPACING.SPACE_10};
`;

export const Name = styled(Text)`
  font-size: ${FONT.SIZE_24};
  margin-bottom: ${SPACING.SPACE_10};
`;

export const Avatar = styled(Thumbnail)`
  margin-right: ${SPACING.SPACE_10};
`;

export const IconContainer = styled.TouchableOpacity``;

export const SocialIcon = styled(Icon)`
  color: ${({ color }) => color};
`;
