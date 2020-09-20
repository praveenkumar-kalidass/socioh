import React, { useState } from 'react';
import { Card, CardItem, Input, Text } from 'native-base';

import { COLOR, TRANSLATION, CONSTANT } from '../../constant';
import wrapPattern from '../../helper/wrapPattern';
import validateFields from '../../helper/validateFields';
import { SCHEMA, INITIAL_STATE, FIELDS } from './Signup.schema';
import {
  SignupContainer,
  SignupButton,
  SignupButtonText,
  InputGrid,
  InputLabel,
  InputErrorText,
  InputContainer,
  StyledCheckbox,
  AgreementContainer,
} from './Signup.style';

const Signup = () => {
  const [fields, setFields] = useState(INITIAL_STATE);
  const [errorMessages, setErrorMessages] = useState(INITIAL_STATE);

  const handleFieldChange = (label, value) => {
    setFields({
      ...fields,
      [label]: value,
    });
  };

  const handleValidation = () => {
    setErrorMessages(validateFields(SCHEMA, fields, INITIAL_STATE));
  };

  return (
    <SignupContainer>
      <Card>
        <For each="field" index="index" of={FIELDS}>
          <CardItem key={`signup_input_${index}`}>
            <InputContainer>
              <InputLabel>{field.label}</InputLabel>
              <InputGrid regular>
                <Input
                  placeholder={field.placeholder}
                  value={fields[field.key]}
                  onChangeText={(value) => handleFieldChange(field.key, value)}
                  onBlur={() => handleValidation()}
                  secureTextEntry={field === CONSTANT.PASSWORD}
                />
              </InputGrid>
              <If condition={errorMessages[field.key]}>
                <InputErrorText>{errorMessages[field.key]}</InputErrorText>
              </If>
            </InputContainer>
          </CardItem>
        </For>
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
