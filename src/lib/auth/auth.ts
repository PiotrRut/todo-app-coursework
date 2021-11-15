import { AppRoutes } from '@lib/constants';
import { useCallback } from 'react';

/**
 * A hook which returns a method `signIn` to authenticate against the auth service.
 *
 * After a successful authentication, the token provided in the response is stored
 * in local storage and saved to context
 */
export const useSignIn = () => {
  const signIn = useCallback((email: string, password: string) => {
    try {
      // TODO: Replace with sign in logic
      console.log(`Signing in with ${email} and ${password}`);
    } catch (error) {
      // TODO: Replace with sign in logic
      console.log(`Error signing in: ${error}`);
      throw error;
    }
  }, []);
  return signIn;
};

/** Signs a user out and routes back to the login page */
export const signOut = () => {
  localStorage.removeItem('userIdToken');
  void window.location.assign(AppRoutes.Login);
};
