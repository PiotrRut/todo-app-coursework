import { ApiRoutes } from '@lib/constants';
import useAxios from 'axios-hooks';

import { Todo } from '.';

/**
 * This hook is used to fetch and return the list of todos from the DB,
 * as well as loading and error states for the request.
 */
export const useGetTodos = () => {
  const [{ data, loading, error }, refetch] = useAxios<Todo[]>(
    ApiRoutes.GetTodos
  );

  const searchTodos = async (query: string, showCompleted: boolean) => {
    refetch({
      params: {
        tagName: query,
        completed: showCompleted,
      },
    });
  };

  return { todos: data, loading, error, searchTodos };
};

/**
 * This hooks provides methods for modifying todos in the DB, as well
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

  /** Used to mark a to-do as completed/uncompleted */
  const changeToDoStatus = async (id: string, isCompleted: boolean) => {
    await update({
      params: {
        id,
      },
      data: {
        isCompleted,
      },
    });
  };

  /** Used to change any of the other to-do details, except status */
  const changeToDoDetails = async (
    todo: Partial<Omit<Todo, 'isCompleted'>>
  ) => {
    await update({
      params: {
        id: todo.id,
      },
      data: todo,
    });
  };

  return { loading, error, changeToDoStatus, changeToDoDetails };
};
