import { useEffect, useState } from 'react';

/** Returns `true` if a user is currently signed in, otherwise `false` */
export const useIsSignedIn = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean | undefined>(undefined);

  const tokenInStorage =
    typeof window !== 'undefined' && localStorage.getItem('userIdToken');

  useEffect(() => {
    if (!tokenInStorage) {
      setIsSignedIn(false);
      console.error('No token in storage');
    } else {
      setIsSignedIn(true);
      console.error('Token in storage');
    }
  }, [tokenInStorage]);

  return isSignedIn;
};

export default useIsSignedIn;
