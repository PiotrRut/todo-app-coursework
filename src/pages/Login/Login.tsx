import { useAppContext } from '@lib/contexts/app';
import useAxios from 'axios-hooks';
import { NextPage } from 'next';
import React from 'react';

const Login: NextPage = () => {
  const { setUserIdToken } = useAppContext();
  const [{ data }] = useAxios('/test');
  return (
    <>
      {/* Temporary to test if it works, and it indeed does work */}
      <button onClick={() => setUserIdToken('hello')}>hello</button>
      <p>Login</p>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Login;
