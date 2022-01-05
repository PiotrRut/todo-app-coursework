import { ApiRoutes } from '@lib/constants';
import useAxios from 'axios-hooks';

import { Todo, TodoRequestBody } from '.';

/**
 * This hook provides functions for modifying todos in the DB, as well
 * as loading and error states for the requests.
 */
export const useEditTodos = () => {
  const [{ loading, error }, update] = useAxios<Todo[]>(
    {
      url: ApiRoutes.UpdateTodo,
      method: 'PATCH',
    },
    {
      manual: true,
    }
  );

  /** Used to change any of the other to-do details, except status */
  const changeToDoDetails = async (id: string, todo: TodoRequestBody) => {
    await update({
      params: {
        id,
      },
      data: todo,
    });
  };

  return {
    loadingChangeTodos: loading,
    error,
    changeToDoDetails,
  };
};

/**
 * This hook provides functions for creating new todo tasks, as well
 * as loading and error states for the requests.
 */
export const useCreateTodo = () => {
  const [{ loading, error }, newTodo] = useAxios<unknown, TodoRequestBody>(
    {
      url: ApiRoutes.CreateTodo,
      method: 'POST',
    },
    {
      manual: true,
    }
  );

  const createTodo = async (todo: TodoRequestBody) => {
    await newTodo({
      data: todo,
    });
  };

  return { newTodoLoading: loading, error, createTodo };
};

/** Hook used for deleting todo tasks */
export const useDeleteTodo = () => {
  const [{ loading, error }, deleteTodo] = useAxios(
    {
      url: ApiRoutes.DeleteTodo,
      method: 'DELETE',
    },
    {
      manual: true,
    }
  );

  const deleteTask = async (id: string) => {
    await deleteTodo({
      params: {
        id,
      },
    });
  };

  return { loading, error, deleteTask };
};
