import { useAppContext } from '@lib/contexts/app';
import useRestrictedRoute from '@lib/hooks/useRestrictedRoute';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { Container } from './Login.styles';

const Login: NextPage = () => {
  useRestrictedRoute();
  const { setUserIdToken } = useAppContext();

  const router = useRouter();
  return (
    <Container>
      {/* Temporary to test if it works, and it indeed does work */}
      <div>
        <button
          onClick={() => {
            setUserIdToken('hello');
            router.push('/dashboard');
          }}
        >
          Log in
        </button>
      </div>
    </Container>
  );
};

export default Login;
