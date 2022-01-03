import TagsList from '@components/tags/TagsList';
import { H1 } from '@components/Text';
import TodosList from '@components/todos/TodosList';
import useAuthenticatedRoute from '@lib/hooks/useAuthenticatedRoute';
import { NextPage } from 'next';
import React from 'react';

import { Container } from './Dashboard.styles';

const Dashboard: NextPage = () => {
  useAuthenticatedRoute();

  return (
    <Container>
      <H1 marginBottom={30}>Your dashboard</H1>
      <TagsList />
      <TodosList />
    </Container>
  );
};

export default Dashboard;
