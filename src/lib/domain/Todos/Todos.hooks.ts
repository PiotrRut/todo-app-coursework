import { ApiRoutes } from '@lib/constants';
import useAxios from 'axios-hooks';

import { Todo } from '.';

/**
 * This hooks is used to fetch and return the list of todos from the DB,
 * as well as loading and error states for the request.
 */
export const useTodos = () => {
  const [{ data, loading, error }] = useAxios<Todo[]>(ApiRoutes.GetTodos);

  return { todos: data, loading, error };
};
