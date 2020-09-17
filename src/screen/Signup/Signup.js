import React from 'react';
import { Card, CardItem, Input, Text } from 'native-base';

import { COLOR, TRANSLATION } from '../../constant';
import wrapPattern from '../../helper/wrapPattern';
import {
  SignupContainer,
  SignupButton,
  SignupButtonText,
  InputGrid,
  InputLabel,
  InputContainer,
  StyledCheckbox,
  AgreementContainer,
} from './Signup.style';

const Signup = () => {
  return (
    <SignupContainer>
      <Card>
        <CardItem>
          <InputContainer>
            <InputLabel>{TRANSLATION.YOUR_NAME}</InputLabel>
            <InputGrid regular>
              <Input placeholder={TRANSLATION.NAME} />
            </InputGrid>
          </InputContainer>
        </CardItem>
        <CardItem>
          <InputContainer>
            <InputLabel>{TRANSLATION.YOUR_EMAIL}</InputLabel>
            <InputGrid regular>
              <Input placeholder={TRANSLATION.EMAIL} />
            </InputGrid>
          </InputContainer>
        </CardItem>
        <CardItem>
          <InputContainer>
            <InputLabel>{TRANSLATION.CREATE_PASSWORD}</InputLabel>
            <InputGrid regular>
              <Input secureTextEntry placeholder={TRANSLATION.PASSWORD} />
            </InputGrid>
          </InputContainer>
        </CardItem>
        <CardItem>
          <AgreementContainer>
            <StyledCheckbox checked color={COLOR.SECONDARY} />
            <Text>{TRANSLATION.TERMS_AND_CONDITIONS}</Text>
          </AgreementContainer>
        </CardItem>
        <CardItem footer>
          <SignupButton rounded large>
            <SignupButtonText>{TRANSLATION.SIGN_UP}</SignupButtonText>
          </SignupButton>
        </CardItem>
      </Card>
    </SignupContainer>
  );
};

export default wrapPattern({ Component: Signup });
