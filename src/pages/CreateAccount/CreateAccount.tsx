import Button from '@components/Button';
import FormTextField from '@components/FormTextField';
import { useCreateAccount } from '@lib/auth/auth';
import useRestrictedRoute from '@lib/hooks/useRestrictedRoute';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import React from 'react';

import { Container, StyledForm } from './CreateAccount.styles';
import { validate } from './CreateAccount.validate';

const CreateAccount: NextPage = () => {
  useRestrictedRoute();
  const { createAccount, loading } = useCreateAccount();

  return (
    <Container>
      <h1>Register for a free account today!</h1>

      <Formik
        initialValues={{
          email: '',
          plaintextPassword: '',
          firstName: '',
          lastName: '',
        }}
        validate={validate}
        onSubmit={({ email, plaintextPassword, firstName, lastName }) =>
          createAccount(firstName, lastName, email, plaintextPassword)
        }
      >
        {({ values, isValid }) => (
          <Form>
            <StyledForm>
              <FormTextField
                name="firstName"
                label="First name"
                autoFocus
                required
              />
              <FormTextField name="lastName" label="Last name" required />
              <FormTextField
                name="email"
                label="Email address"
                autoComplete="new-email"
                required
              />
              <FormTextField
                name="plaintextPassword"
                label="Password"
                type="password"
                autoComplete="new-password"
                required
              />
            </StyledForm>
            <Button
              type="submit"
              loading={loading}
              disabled={!Object.values(values).every((v) => v) || !isValid}
            >
              Create your account
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateAccount;
