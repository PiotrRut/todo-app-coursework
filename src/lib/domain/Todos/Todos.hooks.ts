import { ApiRoutes } from '@lib/constants';
import useAxios from 'axios-hooks';

import { Todo } from '.';

/**
 * This hook is used to fetch and return the list of todos from the DB,
 * as well as loading and error states for the request.
 */
export const useTodos = () => {
  const [{ data, loading, error }, refetch] = useAxios<Todo[]>(
    ApiRoutes.GetTodos
  );

  const searchTodos = (query: string, showCompleted: boolean) => {
    refetch({
      params: {
        tagName: query,
        completed: showCompleted,
      },
    });
  };

  return { todos: data, loading, error, searchTodos };
};
