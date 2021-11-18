import { AppRoutes } from '@lib/constants';
import { useLocalStorage } from '@lib/hooks/useStorage';
import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useMemo } from 'react';

import { AppContextValues } from './appContext.models';
import { decodeToken } from './appContext.utils';

const AppContext = createContext<AppContextValues>({
  userIdToken: undefined,
  setUserIdToken: () => {
    // Do nothing
  },
  user: undefined,
  isAppReady: undefined,
});

/** Returns values stored in AppContext in any part of the app */
export const useAppContext = () => useContext(AppContext);
const AppProvider = AppContext.Provider;

/**
 * The AppContextProvider exposes values necessary for correct functioning of the app to the whole component tree.
 *
 * It also provides a `useAppContext` hook for accessing those values.
 */
export const AppContextProvider: React.FunctionComponent = ({ children }) => {
  const router = useRouter();
  const [userIdToken, setUserIdToken] = useLocalStorage<string | undefined>(
    'userIdToken',
    undefined
  );

  const user = useMemo(
    () => (userIdToken ? decodeToken(userIdToken) : undefined),
    [userIdToken]
  );

  // const isAppReady = Boolean(userIdToken && user);
  const isAppReady = true; // for now

  useEffect(() => {
    if (router.route !== '/') return;

    if (!userIdToken) router.push(AppRoutes.Login);

    if (userIdToken && isAppReady) router.push(AppRoutes.Dashboard);

    return;
  }, [userIdToken, isAppReady, router.route]);

  const values = { userIdToken, setUserIdToken, user, isAppReady };

  return <AppProvider value={values}>{children}</AppProvider>;
};
