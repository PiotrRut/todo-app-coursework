import { H1 } from '@components/Text';
import useAuthenticatedRoute from '@lib/hooks/useAuthenticatedRoute';
import { NextPage } from 'next';
import React from 'react';

import { Container } from './Dashboard.styles';

const Dashboard: NextPage = () => {
  useAuthenticatedRoute();

  return (
    <Container>
      <H1>Your dashboard</H1>
    </Container>
  );
};

export default Dashboard;
