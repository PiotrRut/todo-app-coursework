import { RegisterRequestBody } from '@lib/auth/auth.models';
import { FormikErrors } from 'formik';

/** Client-side validation */
export const validate = (values: RegisterRequestBody) => {
  const errors: FormikErrors<RegisterRequestBody> = {};

  if (!values.firstName) {
    errors.firstName = 'You need to enter your first name';
  }

  if (!values.lastName) {
    errors.lastName = 'You need to enter your last name';
  }

  if (!values.email) {
    errors.email = 'You need to enter an e-mail address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'You need to enter a valid e-mail address';
  }

  if (!values.plaintextPassword) {
    errors.plaintextPassword = 'You need to enter a password';
  }

  return errors;
};
