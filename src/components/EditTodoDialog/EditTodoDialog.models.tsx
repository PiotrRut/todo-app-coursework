import { Todo } from '@lib/domain/Todos';

export interface EditTodoDialogProps {
  /** To-do object to edit */
  todo: Todo;
  /** Method for writing the edited to-do to the db */
  editTodo: (todo: Partial<Omit<Todo, 'isCompleted'>>) => Promise<void>;
  /** Method for changing the status to un-completed */
  handleMarkUnCompleted: (id: string, isCompleted: boolean) => Promise<void>;
  /** Open state of the dialog */
  open: boolean;
  /** Method which will be triggered upon closing the dialog */
  onClose: () => void;
  /** Loading indicator for the "edit to-do" API request */
  loading: boolean;
}
