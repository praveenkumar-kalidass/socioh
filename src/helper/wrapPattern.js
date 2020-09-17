import React from 'react';

import { Background1 } from '../component/Background';

const wrapPattern = ({ Component }) => () => (
  <>
    <Background1 />
    <Component />
  </>
);

export default wrapPattern;
