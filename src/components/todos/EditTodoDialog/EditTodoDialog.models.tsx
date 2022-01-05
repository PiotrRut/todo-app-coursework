import { Todo, TodoRequestBody } from '@lib/domain/Todos';

export interface EditTodoDialogProps {
  /** To-do object to edit */
  todo: Todo;
  /** Function for writing the edited to-do to the db */
  editTodo: (todo: TodoRequestBody) => Promise<void>;
  /** Function for changing the status to un-completed */
  handleMarkUnCompleted: (id: string, isCompleted: boolean) => Promise<void>;
  /**  Function for deleting a task */
  deleteToDo: (id: string) => Promise<void>;
  /** Open state of the dialog */
  open: boolean;
  /** Function which will be triggered upon closing the dialog */
  onClose: () => void;
  /** Loading indicator for the "edit to-do" API request */
  loading: boolean;
}
