import { Todo } from '@lib/domain/Todos';

export interface TodoItemProps {
  /** The to-do item to display */
  item: Todo;
  /** Function which triggers after clicking the "mark as done" icon-button  */
  completedAction: (id: string, isCompleted: boolean) => Promise<void>;
  /** Function to change a to-dos details */
  changeToDoDetails: (
    todo: Partial<Omit<Todo, 'isCompleted'>>
  ) => Promise<void>;
}
