import useAjax from '../useAjax';

const useService = () => {
  const { ajax } = useAjax();

  const signUp = () => {
    return ajax();
  };

  return { signUp };
};

export default useService;
