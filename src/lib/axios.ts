/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Axios from 'axios';
import { configure } from 'axios-hooks';

import environment from './environment';

const axios = Axios.create({
  baseURL: environment.apiBaseUrl,
});

const makeHeaders = async () => {
  const token = await localStorage.getItem('userIdToken');
  const headers: Record<string, string> = {
    'content-type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

axios.interceptors.request.use(async (config) => ({
  ...config,
  headers: {
    ...config.headers,
    ...(await makeHeaders()),
  },
}));

/**
 * Starts up a custom axios instance with a base URL configured,
 * to be used for all requests via `axios-hooks`.
 */
void configure({ axios });
