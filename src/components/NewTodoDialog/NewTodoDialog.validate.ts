import { TodoRequestBody } from '@lib/domain/Todos';
import { FormikErrors } from 'formik';

/** Client-side validation */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validate = (values: TodoRequestBody) => {
  const errors: FormikErrors<TodoRequestBody> = {};

  if (!values.title) {
    errors.title = 'A title is required';
  }

  if (
    values.deadline &&
    !/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(values.deadline)
  ) {
    errors.deadline = 'You need to enter a valid date';
  }

  return errors;
};
