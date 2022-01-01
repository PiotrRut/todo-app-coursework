import PillButton from '@components/buttons/PillButton';
import CreateTagDialog from '@components/CreateTagDialog';
import { H1, H2 } from '@components/Text';
import TodoItem from '@components/TodoItem';
import { TagContainer } from '@components/TodoItem/TodoItem.styles';
import { useCreateTag, useGetAllTags } from '@lib/domain/Tags';
import { Todo } from '@lib/domain/Todos';
import useAuthenticatedRoute from '@lib/hooks/useAuthenticatedRoute';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { Container, TagsContainer, TodosContainer } from './Dashboard.styles';

const Dashboard: NextPage = () => {
  useAuthenticatedRoute();

  const { newTag, loading } = useCreateTag();
  const { tags, refetchTags } = useGetAllTags();

  const [dialogOpen, setDialogOpen] = useState(false);

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

      <H2 marginBottom={20}>
        All tags <span>🔖</span>
      </H2>
      <TagsContainer>
        {tags?.map((tag) => {
          return <TagContainer>#{tag.title}</TagContainer>;
        })}
        <PillButton
          name="new-tag"
          onClick={() => {
            setDialogOpen(true);
          }}
        >
          <AiOutlinePlus />
          New tag
        </PillButton>
      </TagsContainer>

      <H2 marginBottom={20}>
        All to-dos <span>📝</span>
      </H2>
      <TodosContainer>
        <TodoItem item={items[0]} />
        <TodoItem item={items[1]} />
        <TodoItem item={items[2]} />
      </TodosContainer>

      <CreateTagDialog
        newTag={newTag}
        refetchTags={refetchTags}
        loading={loading}
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
      />
    </Container>
  );
};

export default Dashboard;
