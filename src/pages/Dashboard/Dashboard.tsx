import { signOut } from '@lib/auth/auth';
import { useAppContext } from '@lib/contexts/app';
import useAuthenticatedRoute from '@lib/hooks/useAuthenticatedRoute';
import { NextPage } from 'next';
import React from 'react';

import { Container } from './Dashboard.styles';

const Dashboard: NextPage = () => {
  useAuthenticatedRoute();
  const { user } = useAppContext();

  return (
    <Container>
      <button onClick={signOut}>Log out</button>
      <p>Dashboard of {user?.firstName}</p>
    </Container>
  );
};

export default Dashboard;
