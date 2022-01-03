export type Todo = {
  /** Id of the todo (in uuid format) */
  id: string;
  /** Title of the todo */
  title: string;
  /** Optional body (description) */
  body?: string;
  /** Date of completion (if the todo has a deadline) */
  deadline?: string;
  /** Boolean indicating whether the todo has been marked as done */
  isComplete: boolean;
  /** Optional tag/hashtag attached to the todo */
  tag?: {
    id?: string;
    title?: string;
    description?: string;
  };
};

export interface TodoRequestBody {
  title: string;
  body?: string;
  deadline?: string;
  tagId?: string;
  isComplete?: boolean;
}
