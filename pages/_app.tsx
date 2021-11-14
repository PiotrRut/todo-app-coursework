import '@theme/globals.css';

import Axios from 'axios';
import useAxios, { configure } from 'axios-hooks';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

const axios = Axios.create({
  baseURL: 'https://reqres.in/api',
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    configure({ axios });
  }, []);

  const [{ data, loading, error }] = useAxios('/hello');

  useEffect(() => {
    console.log(data, loading, error);
  }, [data, loading, error]);

  return <Component {...pageProps} />;
}

export default MyApp;
