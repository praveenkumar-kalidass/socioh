import React from 'react';

import { CONSTANT } from 'constant';
import { Background1, Background2 } from 'component/Background';

const wrapPattern = ({
  Component,
  pattern = CONSTANT.SCREEN_BACKGROUND.BACKGROUND_1,
}) => (props) => (
  <>
    <If condition={pattern === CONSTANT.SCREEN_BACKGROUND.BACKGROUND_1}>
      <Background1 />
    </If>
    <If condition={pattern === CONSTANT.SCREEN_BACKGROUND.BACKGROUND_2}>
      <Background2 />
    </If>
    <Component {...props} />
  </>
);

export default wrapPattern;
