import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

LoaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoaderProvider;
