import { ApiRoutes } from '@lib/constants';
import { Tag } from '@lib/domain/Tags';
import { Todo } from '@lib/domain/Todos';
import useIsSignedIn from '@lib/hooks/useIsSignedIn';
import useAxios from 'axios-hooks';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface DataContextValues {
  allTodos?: Todo[];
  allTags?: Tag[];
  refetchAllTodos?: () => void;
  refetchAllTags?: () => void;
  currentFilter?: { filterString?: string; includeCompleted?: boolean };
  setCurrentFilter?: (
    filterString?: string | undefined,
    includeCompleted?: boolean
  ) => Promise<void>;
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
  currentFilter: undefined,
  setCurrentFilter: async () => {
    // Do nothing
  },
});

/** Returns values stored in DataContext in any part of the app */
export const useDataContext = () => useContext(DataContext);
const DataProvider = DataContext.Provider;

/**
 * The DataContextProvider exposes the two values that the app depends on: `todos` and `tags`.
 * In addition, refetch functions for both are accessible here, as well as functions that help filter them.
 *
 * By doing this, we can have always up to date data that can be shared and reused throughout
 * the component tree.
 *
 * Values can be accessed with the `useDataContext` hook.
 */
export const DataContextProvider: React.FunctionComponent = ({ children }) => {
  const [{ data: todos }, refetchTodos] = useAxios<Todo[]>(ApiRoutes.GetTodos);
  const [{ data: tags }, refetchTags] = useAxios<Tag[]>(ApiRoutes.GetTags);

  const isSignedIn = useIsSignedIn();

  const [currentFilter, setCurrentFilter] = useState<
    { filterString?: string; includeCompleted?: boolean } | undefined
  >(undefined);

  useEffect(() => {
    if (isSignedIn) {
      refetchTodos();
      refetchTags();
    }
  }, [isSignedIn]);

  /**
   * A simple function for filtering to-dos. Takes two optional components
   * @param filterString tag-id to filter by
   * @param includeCompleted whether to include completed to-dos or not
   */
  const filterTodos = async (
    filterString?: string,
    includeCompleted?: boolean
  ) => {
    setCurrentFilter({
      filterString: filterString && filterString,
      includeCompleted: includeCompleted && includeCompleted,
    });
    await refetchTodos({
      params: {
        tagFilter: filterString && filterString,
        includeCompleted: includeCompleted && includeCompleted,
      },
    });
  };

  const values = {
    allTags: tags,
    allTodos: todos,
    refetchAllTodos: refetchTodos,
    refetchAllTags: refetchTags,
    currentFilter,
    setCurrentFilter: filterTodos,
  };

  return <DataProvider value={values}>{children}</DataProvider>;
};
