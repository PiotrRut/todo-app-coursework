import useRestrictedRoute from '@lib/hooks/useRestrictedRoute';
import { NextPage } from 'next';
import React from 'react';

import { Container } from './Login.styles';

const Login: NextPage = () => {
  useRestrictedRoute();

  return (
    <Container>
      {/* Temporary to test if it works, and it indeed does work */}
      <div>
        <p>Log in</p>
      </div>
    </Container>
  );
};

export default Login;
