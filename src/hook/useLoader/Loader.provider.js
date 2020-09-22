import React, { useState } from 'react';

import ScreenLoader from '../../component/ScreenLoader/ScreenLoader';
import LoaderContext from './Loader.context';

const LoaderProvider = ({ children }) => {
  const [isLoader, setIsLoader] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoader, setIsLoader }}>
      <ScreenLoader isVisible={isLoader} />
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
