import { useMemo } from 'react';

/** Returns `true` if a user is currently signed in, otherwise `false` */
export const useIsSignedIn = () => {
  const tokenInStorage =
    typeof window !== 'undefined' && localStorage.getItem('userIdToken');

  const isSignedIn = useMemo(() => {
    if (!tokenInStorage) {
      console.error('No token in storage');
      return false;
    } else {
      console.error('Token in storage');
      return true;
    }
  }, [tokenInStorage]);

  return isSignedIn;
};

export default useIsSignedIn;
