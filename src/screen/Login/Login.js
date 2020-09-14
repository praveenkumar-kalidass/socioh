import React from 'react';
import PropTypes from 'prop-types';

import { CONSTANT, ICON, ROUTE, TRANSLATION } from '../../constant';
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

const Login = ({ navigation }) => {
  const navigateToSignup = () => {
    navigation.navigate(ROUTE.SIGNUP);
  };

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
          <SignUpLink
            transparent
            full
            onPress={navigateToSignup}
            testID="sign-up">
            <SignUpText>{TRANSLATION.SIGN_UP_HERE}</SignUpText>
          </SignUpLink>
        </SignUpContainer>
      </ButtonContainer>
    </LoginContainer>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

export default Login;
