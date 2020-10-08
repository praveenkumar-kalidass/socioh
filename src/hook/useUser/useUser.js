import { useContext } from 'react';

import UserContext from './User.context';

const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  const saveUserDetails = (details) => setUser(details);

  return {
    user,
    saveUserDetails,
  };
};

export default useUser;
