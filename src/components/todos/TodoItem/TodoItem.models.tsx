import { Todo, TodoRequestBody } from '@lib/domain/Todos';

export interface TodoItemProps {
  /** The to-do item to display */
  item: Todo;
  /** Function for refetching the list of todos */
  refetchTodos?: () => void;
  /** Function for deleting to-dos */
  deleteTodo: (id: string) => Promise<void>;
  /** Loading state of the edit details request */
  loading: boolean;
  /** Function to change a to-dos details */
  changeToDoDetails: (id: string, todo: TodoRequestBody) => Promise<void>;
}
