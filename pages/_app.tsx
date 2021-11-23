import '@lib/axios';

import AppBar from '@components/AppBar';
import Toast from '@components/Toast';
import { AppContextProvider } from '@lib/contexts/app';
import useIsSignedIn from '@lib/hooks/useIsSignedIn';
import GlobalStyle from '@theme/globalStyles';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const isSignedIn = useIsSignedIn();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AppContextProvider>
      <GlobalStyle />
      <Toast />
      {mounted && (
        <>
          {isSignedIn && <AppBar />}
          <Component {...pageProps} />
        </>
      )}
    </AppContextProvider>
  );
}

export default App;
