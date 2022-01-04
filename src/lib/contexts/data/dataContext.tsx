import { ApiRoutes } from '@lib/constants';
import { Tag } from '@lib/domain/Tags';
import { Todo } from '@lib/domain/Todos';
import useAxios from 'axios-hooks';
import React, { createContext, useContext } from 'react';

interface DataContextValues {
  allTodos?: Todo[];
  allTags?: Tag[];
  refetchAllTodos?: () => void;
  refetchAllTags?: () => void;
}

const DataContext = createContext<DataContextValues>({
  allTodos: undefined,
  allTags: undefined,
  refetchAllTodos: () => {
    // Do nothing
  },
  refetchAllTags: () => {
    // Do nothing
  },
});

/** Returns values stored in DataContext in any part of the app */
export const useDataContext = () => useContext(DataContext);
const DataProvider = DataContext.Provider;

/**
 * The DataContextProvider exposes the two values that the app depends on: `todos` and `tags`.
 * In addition, refetch functions for both are accessible here.
 *
 * By doing this, we can have always up to date data that can be shared and reused throughout
 * the component tree.
 *
 * Values can be accessed with the `useDataContext` hook.
 */
export const DataContextProvider: React.FunctionComponent = ({ children }) => {
  const [{ data: todos }, refetchTodos] = useAxios<Todo[]>(ApiRoutes.GetTodos);

  const [{ data: tags }, refetchTags] = useAxios<Tag[]>(ApiRoutes.GetTags);

  const values = {
    allTags: tags,
    allTodos: todos,
    refetchAllTodos: refetchTodos,
    refetchAllTags: refetchTags,
  };

  return <DataProvider value={values}>{children}</DataProvider>;
};
