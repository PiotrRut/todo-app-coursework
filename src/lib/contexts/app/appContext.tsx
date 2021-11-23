import { AppRoutes } from '@lib/constants';
import { useLocalStorage } from '@lib/hooks/useStorage';
import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect } from 'react';

import { AppContextValues, User } from './appContext.models';

const AppContext = createContext<AppContextValues>({
  userIdToken: undefined,
  setUserIdToken: () => {
    // Do nothing
  },
  user: undefined,
  setUser: () => {
    // Do nothing
  },
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
  const [user, setUser] = useLocalStorage<User | undefined>('user', undefined);

  const isAppReady = !!userIdToken && !!user;

  useEffect(() => {
    if (router.route !== '/') return;

    if (!userIdToken) router.push(AppRoutes.Login);

    if (userIdToken && isAppReady) router.push(AppRoutes.Dashboard);

    return;
  }, [userIdToken, isAppReady, router.route]);

  const values = { userIdToken, setUserIdToken, user, isAppReady, setUser };

  return <AppProvider value={values}>{children}</AppProvider>;
};
