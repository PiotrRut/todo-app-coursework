import { TodoRequestBody } from '@lib/domain/Todos';

export interface NewTodoDialogProps {
  /** Function for writing the edited to-do to the db */
  createTodo: (todo: TodoRequestBody) => Promise<void>;
  /** Open state of the dialog */
  open: boolean;
  /** Function which will be triggered upon closing the dialog */
  onClose: () => void;
  /** Loading indicator for the "edit to-do" API request */
  loading: boolean;
}
