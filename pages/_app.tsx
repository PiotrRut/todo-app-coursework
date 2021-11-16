// eslint-disable-next-line simple-import-sort/sort
import '@theme/globals.css';
import '@lib/axios';

import { AppRoutes } from '@lib/constants';
import { AppContextProvider } from '@lib/contexts/app';
import useIsSignedIn from '@lib/hooks/useIsSignedIn';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';

function App({ Component, pageProps, router }: AppProps) {
  const isSignedIn = useIsSignedIn();

  // If not logged in go to login, otherwise go to dashboard
  useEffect(() => {
    if (isSignedIn === undefined) return;

    if (!isSignedIn) {
      router.push(AppRoutes.Login);
    }
  }, [isSignedIn]);

  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default App;
