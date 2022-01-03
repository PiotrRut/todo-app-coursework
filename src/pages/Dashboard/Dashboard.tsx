import PillButton from '@components/buttons/PillButton';
import CreateTagDialog from '@components/CreateTagDialog';
import NewTodoDialog from '@components/NewTodoDialog';
import TagItem from '@components/TagItem';
import { H1, H2, P } from '@components/Text';
import TodoItem from '@components/TodoItem';
import { useCreateTag, useGetAllTags } from '@lib/domain/Tags';
import { useCreateTodo, useEditTodos, useGetTodos } from '@lib/domain/Todos';
import useAuthenticatedRoute from '@lib/hooks/useAuthenticatedRoute';
import { palette } from '@theme/palette';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsPlusCircleDotted } from 'react-icons/bs';

import {
  Container,
  NewTodoButton,
  TagsContainer,
  TodosContainer,
} from './Dashboard.styles';

const Dashboard: NextPage = () => {
  useAuthenticatedRoute();

  const { tags, refetchTags } = useGetAllTags();
  const { refetchTodos, todos } = useGetTodos();
  const { newTag, loading } = useCreateTag();
  const {
    changeToDoStatus,
    changeToDoDetails,
    loadingChangeTodos,
  } = useEditTodos();
  const { newTodoLoading, createTodo } = useCreateTodo();

  const [tagDialogOpen, setTagDialogOpen] = useState(false);
  const [todoDialogOpen, setTodoDialogOpen] = useState(false);

  return (
    <Container>
      <H1 marginBottom={30}>Your dashboard</H1>

      <H2 marginBottom={20}>
        All tags <span>🔖</span>
      </H2>
      <TagsContainer>
        {tags?.map((tag) => {
          return <TagItem>{tag.title}</TagItem>;
        })}
        <PillButton
          name="new-tag"
          onClick={() => {
            setTagDialogOpen(true);
          }}
        >
          <AiOutlinePlus />
          New tag
        </PillButton>
      </TagsContainer>

      <H2 marginBottom={20}>
        All tasks <span>📝</span>
      </H2>
      <TodosContainer>
        {todos?.map((todo) => (
          <TodoItem
            item={todo}
            completedAction={changeToDoStatus}
            changeToDoDetails={changeToDoDetails}
            refetchTodos={refetchTodos}
            loading={loadingChangeTodos}
          />
        ))}
        <NewTodoButton onClick={() => setTodoDialogOpen(true)}>
          <BsPlusCircleDotted size={50} color={palette.secondary.main} />
          <P color="gray">Create a new task</P>
        </NewTodoButton>
      </TodosContainer>

      <CreateTagDialog
        newTag={newTag}
        refetchTags={refetchTags}
        loading={loading}
        open={tagDialogOpen}
        onClose={() => {
          setTagDialogOpen(false);
        }}
      />

      <NewTodoDialog
        open={todoDialogOpen}
        onClose={() => setTodoDialogOpen(false)}
        loading={newTodoLoading}
        createTodo={createTodo}
        refetchTodos={refetchTodos}
      />
    </Container>
  );
};

export default Dashboard;
