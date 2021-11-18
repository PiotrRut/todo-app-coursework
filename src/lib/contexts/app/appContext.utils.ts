import jwtDecode from 'jwt-decode';

import { User } from './appContext.models';

/** Decode the token and return a user object */
export const decodeToken = (token: string): User => {
  const decodedToken = jwtDecode<User>(token);

  return {
    name: decodedToken.name,
    email: decodedToken.email,
  };
};
