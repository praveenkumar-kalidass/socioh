import React from 'react';

import { Background1 } from '../component/Background';

const wrapPattern = ({ Component }) => (props) => (
  <>
    <Background1 />
    <Component {...props} />
  </>
);

export default wrapPattern;
