import useLoader from '../useLoader';

const useAjax = () => {
  const { startLoading, stopLoading } = useLoader();

  const ajax = () => {
    return new Promise((resolve) => {
      startLoading();
      setTimeout(() => {
        stopLoading();
        resolve();
      }, 1000);
    });
  };

  return { ajax };
};

export default useAjax;
