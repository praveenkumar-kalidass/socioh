import React from 'react';

import { CONSTANT } from '../../constant';
import { LoginView, Title, TitleView } from './Login.style';

const Login = () => {
  return (
    <LoginView>
      <TitleView>
        <Title>{CONSTANT.APP_NAME}</Title>
      </TitleView>
    </LoginView>
  );
};

export default Login;
