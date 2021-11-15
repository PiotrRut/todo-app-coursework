import { useLocalStorage } from '@lib/hooks/useStorage';
import React, { createContext, useContext } from 'react';

interface AppContextValues {
  /** Currently logged in user's ID token, user for authentication */
  userIdToken?: string;
  /** Setter for the currently logged in user's ID token */
  setUserIdToken: (newValue: string) => void;
}

const AppContext = createContext<AppContextValues>({
  userIdToken: undefined,
  setUserIdToken: () => {
    // Do nothing
  },
});

/** Used to access values stored in AppContext in any part of the app */
export const useAppContext = () => useContext(AppContext);
const NewProvider = AppContext.Provider;

/**
 * The AppContextProvider exposes values necessary for correct functioning of the app to the whole component tree.
 *
 * It also provides a `useAppContext` hook for accessing those values.
 */
export const AppContextProvider: React.FunctionComponent = ({ children }) => {
  const [userIdToken, setUserIdToken] = useLocalStorage<string | undefined>(
    'userIdToken',
    undefined
  );

  const values = { userIdToken, setUserIdToken };

  return <NewProvider value={values}>{children}</NewProvider>;
};
