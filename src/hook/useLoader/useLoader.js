import { useContext } from 'react';

import LoaderContext from './Loader.context';

const useLoader = () => {
  const { isLoader, setIsLoader } = useContext(LoaderContext);

  const startLoading = () => setIsLoader(true);

  const stopLoading = () => setIsLoader(false);

  return {
    loading: isLoader,
    startLoading,
    stopLoading,
  };
};

export default useLoader;
