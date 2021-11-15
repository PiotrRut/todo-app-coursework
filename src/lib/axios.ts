import Axios from 'axios';
import { configure } from 'axios-hooks';

const axios = Axios.create({
  baseURL: 'https://google.com',
});

/**
 * Starts up a custom axios instance with a base URL configured,
 * to be used for all requests via `axios-hooks`.
 */
export const configureAxios = () => {
  configure({ axios });
};
