import Axios from 'axios';
import { configure } from 'axios-hooks';

import environment from './environment';

const axios = Axios.create({
  baseURL: environment.apiBaseUrl,
});

/**
 * Starts up a custom axios instance with a base URL configured,
 * to be used for all requests via `axios-hooks`.
 */
export const configureAxios = () => {
  configure({ axios });
};
