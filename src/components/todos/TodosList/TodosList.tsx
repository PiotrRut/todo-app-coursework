import { H2, P } from '@components/Text';
import { useDataContext } from '@lib/contexts/data/dataContext';
import { useCreateTodo, useDeleteTodo, useEditTodos } from '@lib/domain/Todos';
import { palette } from '@theme/palette';
import React, { FunctionComponent, useState } from 'react';
import { BsPlusCircleDotted } from 'react-icons/bs';

import NewTodoDialog from '../NewTodoDialog';
import TodoItem from '../TodoItem';
import { NewTodoButton, TodosContainer } from './TodosList.styles';

/**
 * This component holds the entirety of the to-dos list, which lives on the dashboard.
 *
 * All fetching logic lives here, and all hooks methods are derived from this component
 * and passed on to their children. It also controls local state of the dialogs for to-do management.
 */
const TodosList: FunctionComponent = () => {
  const { changeToDoDetails, loadingChangeTodos } = useEditTodos();
  const { newTodoLoading, createTodo } = useCreateTodo();
  const { deleteTask } = useDeleteTodo();

  const { allTodos, refetchAllTodos } = useDataContext();

  const [todoDialogOpen, setTodoDialogOpen] = useState(false);

  return (
    <>
      <H2 marginBottom={20}>
        All tasks <span>📝</span>
      </H2>
      <TodosContainer>
        {allTodos?.map((todo) => (
          <TodoItem
            item={todo}
            changeToDoDetails={changeToDoDetails}
            refetchTodos={refetchAllTodos}
            loading={loadingChangeTodos}
            deleteTodo={deleteTask}
          />
        ))}
        <NewTodoButton onClick={() => setTodoDialogOpen(true)}>
          <BsPlusCircleDotted size={50} color={palette.secondary.main} />
          <P color="gray">Create a new task</P>
        </NewTodoButton>
      </TodosContainer>

      <NewTodoDialog
        open={todoDialogOpen}
        onClose={() => setTodoDialogOpen(false)}
        loading={newTodoLoading}
        createTodo={createTodo}
        refetchTodos={refetchAllTodos}
      />
    </>
  );
};

export default TodosList;
