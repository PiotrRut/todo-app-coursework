import { AppRoutes } from '@lib/constants';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import useIsSignedIn from './useIsSignedIn';

/**
 * Use this hook on pages you want only to be accessible by not logged in users.
 *
 * If someone tries to access the page, and are logged in, they will be redirected back to the logged in dashboard.
 */
export const useRestrictedRoute = () => {
  const isSignedIn = useIsSignedIn();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn !== undefined && isSignedIn)
      router.push(AppRoutes.Dashboard);
    return;
  }, [isSignedIn]);
};

export default useRestrictedRoute;
