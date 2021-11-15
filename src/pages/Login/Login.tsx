import { useAppContext } from '@lib/contexts/app';
import { NextPage } from 'next';
import React from 'react';

const Login: NextPage = () => {
  const { setUserIdToken } = useAppContext();
  return (
    <>
      {/* Temporary to test if it works, and it indeed does work */}
      <button onClick={() => setUserIdToken('hello')}>hello</button>
      <p>Login</p>
    </>
  );
};

export default Login;
