import styled from 'styled-components/native';
import { Text, Icon, Button } from 'native-base';

import { COLOR, FONT, SPACING } from '../../constant';

export const LoginContainer = styled.View`
  background-color: ${COLOR.PRIMARY};
  flex: 1;
  justify-content: space-around;
  padding-horizontal: ${SPACING.SPACE_20};
  padding-vertical: ${SPACING.SPACE_20};
`;

export const Title = styled(Text)`
  color: ${COLOR.WHITE};
  font-family: Roboto;
  font-size: ${FONT.SIZE_60};
  font-weight: bold;
  text-transform: uppercase;
`;

export const TitleContainer = styled.View`
  align-items: center;
`;

export const Description = styled(Text)`
  color: ${COLOR.WHITE};
  font-family: Roboto;
  font-size: ${FONT.SIZE_24};
  text-align: center;
`;

export const IconContainer = styled.View`
  margin-horizontal: ${SPACING.SPACE_40};
`;

export const LargeIcon = styled(Icon)`
  color: ${COLOR.WHITE};
  font-size: ${SPACING.SPACE_200};
`;

export const SmallIcon = styled(Icon)`
  color: ${COLOR.WHITE};
  font-size: ${SPACING.SPACE_100};
  transform: scaleX(-1);
`;

export const ButtonContainer = styled.View`
  padding-horizontal: ${SPACING.SPACE_20};
`;

export const SignInContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const SignInButton = styled(Button)`
  background-color: ${COLOR.SECONDARY};
  flex: 1;
  justify-content: center;
`;

export const SignInButtonText = styled(Text)`
  color: ${COLOR.BLACK};
  text-align: center;
`;

export const SignUpContainer = styled.View`
  align-items: center;
  margin-top: ${SPACING.SPACE_20};
`;

export const SignUpLink = styled(Button)``;

export const SignUpDescription = styled(Text)`
  color: ${COLOR.WHITE};
  font-family: Roboto;
  font-size: ${FONT.SIZE_16};
`;

export const SignUpText = styled(Text)`
  color: ${COLOR.WHITE};
  text-decoration: underline;
  text-decoration-color: ${COLOR.WHITE};
`;
