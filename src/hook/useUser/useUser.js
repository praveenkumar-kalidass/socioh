import { useContext } from 'react';

import UserContext from './User.context';

const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const saveUserDetails = (details) => setUser(details);

  const clearUserDetails = () => setUser(null);

  return {
    user,
    clearUserDetails,
    saveUserDetails,
  };
};

export default useUser;
