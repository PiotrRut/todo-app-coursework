import { signOut } from '@lib/auth/auth';
import useAuthenticatedRoute from '@lib/hooks/useAuthenticatedRoute';
import { NextPage } from 'next';
import React from 'react';

import { Container } from './Dashboard.styles';

const Dashboard: NextPage = () => {
  useAuthenticatedRoute();
  return (
    <Container>
      <button onClick={signOut}>Log out</button>
      <p>Dashboard</p>
    </Container>
  );
};

export default Dashboard;
