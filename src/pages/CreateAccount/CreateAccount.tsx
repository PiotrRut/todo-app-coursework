import Button from '@components/Button';
import { useCreateAccount } from '@lib/auth/auth';
import useRestrictedRoute from '@lib/hooks/useRestrictedRoute';
import { Field, Form, Formik } from 'formik';
import { NextPage } from 'next';
import React from 'react';

import { Container, StyledForm } from './CreateAccount.styles';

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
        onSubmit={({ email, plaintextPassword, firstName, lastName }) =>
          createAccount(firstName, lastName, email, plaintextPassword)
        }
      >
        {({ values }) => (
          <Form>
            <StyledForm>
              <Field name="firstName" placeholder="First name *" />
              <Field name="lastName" placeholder="Last name *" />
              <Field name="email" placeholder="Email address *" />
              <Field
                name="plaintextPassword"
                placeholder="Password *"
                type="password"
              />
            </StyledForm>
            <Button
              type="submit"
              loading={loading}
              disabled={!Object.values(values).every((v) => v)}
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
