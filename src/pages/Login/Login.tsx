import { useAppContext } from '@lib/contexts/app';
import useRestrictedRoute from '@lib/hooks/useRestrictedRoute';
import useAxios from 'axios-hooks';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const Login: NextPage = () => {
  useRestrictedRoute();
  const { setUserIdToken } = useAppContext();
  const [{ data }] = useAxios('/test');
  const router = useRouter();
  return (
    <>
      {/* Temporary to test if it works, and it indeed does work */}
      <button
        onClick={() => {
          setUserIdToken('hello');
          router.push('/dashboard');
        }}
      >
        Log in
      </button>
      <p>Login</p>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Login;
