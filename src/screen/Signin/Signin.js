import React, { useCallback, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardItem, Input } from 'native-base';

import { TRANSLATION, CONSTANT, ROUTE } from '../../constant';
import wrapPattern from '../../helper/wrapPattern';
import validateFields from '../../helper/validateFields';
import useService from '../../hook/useService';
import { SCHEMA, INITIAL_STATE, FIELDS } from './Signin.schema';
import {
  SigninGrid,
  SigninContainer,
  SigninButton,
  SigninButtonText,
  InputGrid,
  InputLabel,
  InputErrorText,
  InputContainer,
} from './Signin.style';

const Signin = ({ navigation }) => {
  const [fields, setFields] = useState(INITIAL_STATE);
  const [errorMessages, setErrorMessages] = useState(INITIAL_STATE);
  const [isSubmit, setIsSubmit] = useState(false);

  const { signIn } = useService();

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
    setIsSubmit(true);
  };

  const handleSignin = useCallback(async () => {
    try {
      await signIn(fields);
      navigation.navigate(ROUTE.HOME);
    } catch (error) {
      console.warn('Error:', error);
    }
  }, [fields]);

  useEffect(() => {
    if (isSubmit && Object.values(errorMessages).every((value) => !value)) {
      handleSignin();
    } else {
      setIsSubmit(false);
    }
  }, [navigation, isSubmit, errorMessages]);

  return (
    <SigninGrid
      behavior={Platform.OS === CONSTANT.OS.IOS ? 'padding' : 'height'}>
      <SigninContainer>
        <Card>
          <For each="field" index="index" of={FIELDS}>
            <CardItem key={`signin_item_${index}`}>
              <InputContainer>
                <InputLabel>{field.label}</InputLabel>
                <InputGrid regular>
                  <Input
                    autoFocus={index === 0}
                    placeholder={field.placeholder}
                    value={fields[field.key]}
                    onChangeText={(value) =>
                      handleFieldChange(field.key, value)
                    }
                    onBlur={() => handleValidation()}
                    secureTextEntry={field.key === CONSTANT.PASSWORD}
                    testID={`signin_input_${field.key}`}
                  />
                </InputGrid>
                <If condition={errorMessages[field.key]}>
                  <InputErrorText testID={`signin_error_${field.key}`}>
                    {errorMessages[field.key]}
                  </InputErrorText>
                </If>
              </InputContainer>
            </CardItem>
          </For>
          <CardItem footer>
            <SigninButton
              testID="signin_submit"
              rounded
              large
              onPress={handleSubmit}>
              <SigninButtonText>{TRANSLATION.SIGN_IN}</SigninButtonText>
            </SigninButton>
          </CardItem>
        </Card>
      </SigninContainer>
    </SigninGrid>
  );
};

Signin.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default wrapPattern({ Component: Signin });
