import React from 'react';

import { Background1 } from '../component/Background';

const wrapPattern = ({ Component }) => () => (
  <>
    <Component />
    <Background1 />
  </>
);

export default wrapPattern;
