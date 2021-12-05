import { H1 } from '@components/Text';
import TodoItem from '@components/TodoItem';
import { Todo } from '@lib/domain/Todos';
import useAuthenticatedRoute from '@lib/hooks/useAuthenticatedRoute';
import { NextPage } from 'next';
import React from 'react';

import { Container, TodosContainer } from './Dashboard.styles';

const Dashboard: NextPage = () => {
  useAuthenticatedRoute();

  // TEMPORARY
  const items: Todo[] = [
    {
      id: '1',
      title: 'Remind group about presentation',
      body: 'Communicate on discord and WhatsApp',
      isCompleted: true,
      tag: {
        id: '1',
        title: 'university',
      },
      completeDate: '2021-12-4',
    },
    {
      id: '1',
      title: 'Book plane tickets to go on holiday',
      body: 'British Airways or United Airlines',
      isCompleted: false,
      tag: {
        id: '1',
        title: 'personal',
      },
      completeDate: '2022-03-13',
    },
    {
      id: '1',
      title: 'Submit Haskell coursework',
      body: 'Moodle has planned maintenance on Sunday',
      isCompleted: false,
      tag: {
        id: '1',
        title: 'university',
      },
      completeDate: '2021-12-5',
    },
  ];

  return (
    <Container>
      <H1 marginBottom={30}>Your dashboard</H1>
      <TodosContainer>
        <TodoItem item={items[0]} />
        <TodoItem item={items[1]} />
        <TodoItem item={items[2]} />
      </TodosContainer>
    </Container>
  );
};

export default Dashboard;
