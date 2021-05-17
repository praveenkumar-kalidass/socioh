import { useContext, useState } from 'react';

import TranslationContext from './Translation.context';
import en from '../../translation/en.json';
import ta from '../../translation/ta.json';

const useTranslation = () => {
  const [translations] = useState({ en, ta });
  const { translation, setTranslation } = useContext(TranslationContext);

  const changeTranslation = (language) => {
    const foundTranslation = translations[language];
    if (foundTranslation) {
      setTranslation(foundTranslation);
      return;
    }
    setTranslation(en);
  };

  const translate = (key) => {
    const result = key.split('.').reduce((final, value) => {
      if (final[value]) {
        return final[value];
      }
      return '';
    }, translation);

    return result || key;
  };

  return {
    translate,
    changeTranslation,
  };
};

export default useTranslation;
