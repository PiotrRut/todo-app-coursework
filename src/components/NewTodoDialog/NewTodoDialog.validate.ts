import { Todo } from '@lib/domain/Todos';
import { FormikErrors } from 'formik';

/** Client-side validation */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validate = (values: Record<string, any>) => {
  const errors: FormikErrors<Partial<Omit<Todo, 'id'>>> = {};

  if (!values.title) {
    errors.title = 'A title is required';
  }

  if (
    values.completeDate &&
    !/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(
      values.completeDate
    )
  ) {
    errors.completeDate = 'You need to enter a valid date';
  }

  return errors;
};
