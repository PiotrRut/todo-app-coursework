import '@lib/axios';

import Layout from '@components/Layout';
import Toast from '@components/Toast';
import { AppContextProvider } from '@lib/contexts/app';
import { DataContextProvider } from '@lib/contexts/data';
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
      <DataContextProvider>
        <GlobalStyle />
        <Toast />
        {mounted && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </DataContextProvider>
    </AppContextProvider>
  );
}

export default App;
