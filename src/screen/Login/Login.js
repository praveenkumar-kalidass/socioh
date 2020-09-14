import React from 'react';

import { CONSTANT, ICON, TRANSLATION } from '../../constant';
import {
  LoginContainer,
  Title,
  TitleContainer,
  Description,
  IconContainer,
  LargeIcon,
  SmallIcon,
  ButtonContainer,
  SignInContainer,
  SignInButton,
  SignInButtonText,
  SignUpContainer,
  SignUpLink,
  SignUpText,
  SignUpDescription,
} from './Login.style';

const Login = () => {
  return (
    <LoginContainer>
      <TitleContainer>
        <Title>{CONSTANT.APP_NAME}</Title>
        <Description>{CONSTANT.APP_DESCRIPTION}</Description>
      </TitleContainer>
      <IconContainer>
        <LargeIcon type={ICON.MATERIAL_FAMILY} name={ICON.CHAT} />
        <SmallIcon type={ICON.MATERIAL_FAMILY} name={ICON.CHAT} />
      </IconContainer>
      <ButtonContainer>
        <SignInContainer>
          <SignInButton rounded large>
            <SignInButtonText>{TRANSLATION.LETS_GO}</SignInButtonText>
          </SignInButton>
        </SignInContainer>
        <SignUpContainer>
          <SignUpDescription small>
            {TRANSLATION.DONT_HAVE_ACCOUNT}
          </SignUpDescription>
          <SignUpLink transparent full>
            <SignUpText>{TRANSLATION.SIGN_IN_HERE}</SignUpText>
          </SignUpLink>
        </SignUpContainer>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default Login;
