export type Todo = {
  /** Id of the todo (in uuid format) */
  id: string;
  /** Title of the todo */
  title: string;
  /** Optional body (description) */
  body?: string;
  /** Date of completion (if the todo has a deadline) */
  completeDate?: string;
  /** Boolean indicating whether the todo has been marked as done */
  isCompleted: boolean;
  /** Optional tag/hashtag attached to the todo */
  tag?: {
    id: string;
    title: string;
    description?: string;
  };
};
