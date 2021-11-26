import '@lib/axios';

import Layout from '@components/Layout';
import Toast from '@components/Toast';
import { AppContextProvider } from '@lib/contexts/app';
import GlobalStyle from '@theme/globalStyles';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AppContextProvider>
      <GlobalStyle />
      <Toast />
      <Layout>{mounted && <Component {...pageProps} />}</Layout>
    </AppContextProvider>
  );
}

export default App;
