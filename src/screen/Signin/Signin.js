import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardItem, Input } from 'native-base';

import { TRANSLATION, CONSTANT, ROUTE } from '../../constant';
import wrapPattern from '../../helper/wrapPattern';
import validateFields from '../../helper/validateFields';
import { SCHEMA, INITIAL_STATE, FIELDS } from './Signin.schema';
import {
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

  useEffect(() => {
    if (isSubmit && Object.values(errorMessages).every((value) => !value)) {
      navigation.navigate(ROUTE.HOME);
    } else {
      setIsSubmit(false);
    }
  }, [navigation, isSubmit, errorMessages]);

  return (
    <SigninContainer>
      <Card>
        <For each="field" index="index" of={FIELDS}>
          <CardItem key={`signin_item_${index}`}>
            <InputContainer>
              <InputLabel>{field.label}</InputLabel>
              <InputGrid regular>
                <Input
                  placeholder={field.placeholder}
                  value={fields[field.key]}
                  onChangeText={(value) => handleFieldChange(field.key, value)}
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
  );
};

Signin.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default wrapPattern({ Component: Signin });
