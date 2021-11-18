import '@lib/axios';

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
      {mounted && <Component {...pageProps} />}
    </AppContextProvider>
  );
}

export default App;
