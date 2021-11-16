// eslint-disable-next-line simple-import-sort/sort
import '@theme/globals.css';
import '@lib/axios';

import { AppRoutes } from '@lib/constants';
import { AppContextProvider } from '@lib/contexts/app';
import useIsSignedIn from '@lib/hooks/useIsSignedIn';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';

function App({ Component, pageProps, router }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const isSignedIn = useIsSignedIn();

  useEffect(() => {
    setMounted(true);
  }, []);

  // If not logged in go to login, otherwise go to dashboard
  useEffect(() => {
    if (router.route !== '/') return;

    if (!isSignedIn) {
      router.push(AppRoutes.Login);
    }

    router.push(AppRoutes.Dashboard);
  }, [isSignedIn]);

  return (
    <AppContextProvider>
      {mounted && <Component {...pageProps} />}
    </AppContextProvider>
  );
}

export default App;
