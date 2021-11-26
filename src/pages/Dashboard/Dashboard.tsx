import useAuthenticatedRoute from '@lib/hooks/useAuthenticatedRoute';
import { NextPage } from 'next';
import React from 'react';

import { Container } from './Dashboard.styles';

const Dashboard: NextPage = () => {
  useAuthenticatedRoute();

  return (
    <Container>
      <p>Your dashboard</p>
    </Container>
  );
};

export default Dashboard;
