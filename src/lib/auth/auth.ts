import { ApiRoutes, AppRoutes } from '@lib/constants';
import { useAppContext } from '@lib/contexts/app';
import useAxios from 'axios-hooks';
import RouterGlobal from 'next/router';
import { useCallback } from 'react';

import {
  RegisterRequestBody,
  SignInRequestBody,
  SignInResponse,
} from './auth.models';

/**
 * A hook to authenticate against the auth service.
 *
 * After a successful authentication, the token provided in the response is stored
 * in local storage and saved to context, along with user info
 *
 * @returns `signIn` function which returns an axios promise
 * @returns `error` object from the axios response
 */
export const useSignIn = () => {
  const { setUserIdToken, setUser } = useAppContext();
  const [{ data, error }, login] = useAxios<SignInResponse, SignInRequestBody>(
    {
      url: ApiRoutes.Login,
      method: 'POST',
    },
    { manual: true }
  );

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        await login({ data: { email, plaintextPassword: password } });
        setUserIdToken(data?.token);
        setUser({
          firstName: data?.firstName ?? '',
          lastName: data?.lastName ?? '',
          email: data?.email ?? '',
        });
        RouterGlobal.push(AppRoutes.Dashboard);
      } catch {
        console.log(`Error signing in: ${error}`);
      }
    },
    [login]
  );

  return { signIn, error };
};

/** Signs a user out and routes back to the login page */
export const signOut = () => {
  localStorage.removeItem('userIdToken');
  localStorage.removeItem('user');
  void window.location.assign(AppRoutes.Login);
};

/**
 * A hook to create a new user account.
 *
 * After a successful account creation, redirects user back to the login page.
 *
 * @returns `createAccount` function which returns an axios promise
 * @returns `error` object from the axios response
 */
export const useCreateAccount = () => {
  const [{ error }, signUp] = useAxios<undefined, RegisterRequestBody>(
    { url: ApiRoutes.SignUp, method: 'POST' },
    { manual: true }
  );

  const createAccount = useCallback(
    async (
      firstName: string,
      lastName: string,
      email: string,
      password: string
    ) => {
      try {
        await signUp({
          data: { email, plaintextPassword: password, firstName, lastName },
        });
        RouterGlobal.push(AppRoutes.Login);
      } catch {
        console.error(`Error signing up: ${error}`);
      }
    },
    [signUp]
  );

  return { createAccount, error };
};
