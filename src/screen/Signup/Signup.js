import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardItem, Input, Text } from 'native-base';

import { COLOR, TRANSLATION, CONSTANT, ROUTE } from '../../constant';
import wrapPattern from '../../helper/wrapPattern';
import validateFields from '../../helper/validateFields';
import useService from '../../hook/useService';
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

const Signup = ({ navigation }) => {
  const [fields, setFields] = useState(INITIAL_STATE);
  const [errorMessages, setErrorMessages] = useState(INITIAL_STATE);
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const [isTermsError, setIsTermsError] = useState(false);

  const { signUp } = useService();

  const handleFieldChange = (label, value) => {
    setFields({
      ...fields,
      [label]: value,
    });
  };

  const handleValidation = () => {
    setErrorMessages(validateFields(SCHEMA, fields, INITIAL_STATE));
  };

  const handleSubmit = () => {
    setErrorMessages(validateFields(SCHEMA, fields, INITIAL_STATE, true));
    setIsTermsError(!isTermsAgreed);
    if (
      isTermsAgreed &&
      Object.values(errorMessages).every((value) => !value)
    ) {
      handleSignup();
    }
  };

  const handleSignup = async () => {
    try {
      await signUp(fields);
      navigation.navigate(ROUTE.HOME);
    } catch (error) {
      console.warn('Error:', error);
    }
  };

  return (
    <SignupContainer>
      <Card>
        <For each="field" index="index" of={FIELDS}>
          <CardItem key={`signup_item_${index}`}>
            <InputContainer>
              <InputLabel>{field.label}</InputLabel>
              <InputGrid regular>
                <Input
                  placeholder={field.placeholder}
                  value={fields[field.key]}
                  onChangeText={(value) => handleFieldChange(field.key, value)}
                  onBlur={() => handleValidation()}
                  secureTextEntry={field.key === CONSTANT.PASSWORD}
                  testID={`signup_input_${field.key}`}
                />
              </InputGrid>
              <If condition={errorMessages[field.key]}>
                <InputErrorText testID={`signup_error_${field.key}`}>
                  {errorMessages[field.key]}
                </InputErrorText>
              </If>
            </InputContainer>
          </CardItem>
        </For>
        <CardItem>
          <AgreementContainer>
            <StyledCheckbox
              testID="signup_terms"
              checked={isTermsAgreed}
              onPress={() => setIsTermsAgreed(!isTermsAgreed)}
              color={
                isTermsError && !isTermsAgreed ? COLOR.RED : COLOR.SECONDARY
              }
            />
            <Text>{TRANSLATION.TERMS_AND_CONDITIONS}</Text>
          </AgreementContainer>
        </CardItem>
        <CardItem footer>
          <SignupButton
            testID="signup_submit"
            rounded
            large
            onPress={handleSubmit}>
            <SignupButtonText>{TRANSLATION.SIGN_UP}</SignupButtonText>
          </SignupButton>
        </CardItem>
      </Card>
    </SignupContainer>
  );
};

Signup.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default wrapPattern({ Component: Signup });
