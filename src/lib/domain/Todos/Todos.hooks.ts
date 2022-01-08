import { ApiRoutes } from '@lib/constants';
import useAxios from 'axios-hooks';

import { Todo, TodoRequestBody } from '.';

/**
 * This hook is used to edit to-dos
 *
 * @returns A function which takes a `TodoRequestBody` object
 * as well as loading and error state of the request
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
 * This hook is used to create to-dos
 *
 * @returns A function which takes a `TodoRequestBody` object
 * as well as loading and error state of the request
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

/**
 * This hook is used to delete to-dos
 *
 * @returns A function which takes an ID of the to-do
 * as well as loading and error state of the request
 */
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
