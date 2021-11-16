import { AppRoutes } from '@lib/constants';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import useIsSignedIn from './useIsSignedIn';

/**
 * Use this hook on pages you want to hide behind login.
 *
 * If someone tries to access the page, and are not logged in, they will be redirected back to `login`.
 */
export const useAuthenticatedRoute = () => {
  const isSignedIn = useIsSignedIn();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn !== undefined && !isSignedIn) router.push(AppRoutes.Home);
    return;
  }, [isSignedIn]);
};

export default useAuthenticatedRoute;
