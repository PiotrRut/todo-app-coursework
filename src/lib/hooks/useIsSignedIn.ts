import { useMemo } from 'react';

/** Returns `true` if a user is currently signed in, otherwise `false` */
export const useIsSignedIn = () => {
  const tokenInStorage =
    typeof window !== 'undefined' && localStorage.getItem('userIdToken');

  const isSignedIn = useMemo(() => {
    if (typeof tokenInStorage === 'undefined') return;

    if (!tokenInStorage) {
      console.error('[STORAGE] No token in storage');
      return false;
    } else {
      return true;
    }
  }, [tokenInStorage]);

  return isSignedIn;
};

export default useIsSignedIn;
