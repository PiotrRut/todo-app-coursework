import Switch from '@components/Switch';
import { H2, P } from '@components/Text';
import { useDataContext } from '@lib/contexts/data';
import { useCreateTodo, useDeleteTodo, useEditTodos } from '@lib/domain/Todos';
import { palette } from '@theme/palette';
import React, { FunctionComponent, useState } from 'react';
import { BsPlusCircleDotted } from 'react-icons/bs';

import NewTodoDialog from '../NewTodoDialog';
import TodoItem from '../TodoItem';
import {
  FilterActions,
  NewTodoButton,
  StyledRow,
  TodosContainer,
} from './TodosList.styles';

/**
 * This component holds the entirety of the to-dos list, which lives on the dashboard.
 *
 * All fetching logic lives here, and all hooks functions are derived from this component
 * and passed on to their children. It also controls local state of the dialogs for to-do management.
 */
const TodosList: FunctionComponent = () => {
  const { allTodos, setCurrentFilter, currentFilter } = useDataContext();
  const { changeToDoDetails, loadingChangeTodos } = useEditTodos();
  const { newTodoLoading, createTodo } = useCreateTodo();
  const { deleteTask } = useDeleteTodo();

  const [todoDialogOpen, setTodoDialogOpen] = useState(false);

  return (
    <>
      <StyledRow>
        <H2>All tasks 📝</H2>

        <FilterActions>
          <Switch
            name="include-completed-todos"
            checked={currentFilter?.includeCompleted}
            onCheckedChange={() =>
              setCurrentFilter?.(
                currentFilter?.filterString,
                currentFilter?.includeCompleted ? false : true
              )
            }
          />
          <P>Include completed</P>
        </FilterActions>
      </StyledRow>
      <TodosContainer>
        {allTodos?.map((todo) => (
          <TodoItem
            item={todo}
            changeToDoDetails={changeToDoDetails}
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
      />
    </>
  );
};

export default TodosList;
