import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TranslationContext from './Translation.context';
import en from 'translation/en.json';

const TranslationProvider = ({ children }) => {
  const [translation, setTranslation] = useState({});

  useEffect(() => {
    setTranslation(en);
  }, []);

  return (
    <TranslationContext.Provider value={{ translation, setTranslation }}>
      {children}
    </TranslationContext.Provider>
  );
};

TranslationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TranslationProvider;
