import Button from '@components/buttons/Button';
import FormTextField from '@components/inputs/FormTextField';
import { H1 } from '@components/Text';
import { useCreateAccount } from '@lib/auth/auth';
import useRestrictedRoute from '@lib/hooks/useRestrictedRoute';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import React from 'react';

import {
  Container,
  CreateAccountContainer,
  StyledForm,
} from './CreateAccount.styles';
import { validate } from './CreateAccount.validate';

const CreateAccount: NextPage = () => {
  useRestrictedRoute();
  const { createAccount, loading } = useCreateAccount();

  return (
    <Container>
      <CreateAccountContainer>
        <H1>Create a new account</H1>

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
                  fullWidth
                  marginBottom={10}
                />
                <FormTextField
                  name="lastName"
                  label="Last name"
                  required
                  fullWidth
                  marginBottom={10}
                />
                <FormTextField
                  name="email"
                  label="Email address"
                  autoComplete="new-email"
                  required
                  fullWidth
                  marginBottom={10}
                />
                <FormTextField
                  name="plaintextPassword"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  required
                  fullWidth
                  marginBottom={30}
                />
              </StyledForm>
              <Button
                name="create-account"
                type="submit"
                loading={loading}
                disabled={!Object.values(values).every((v) => v) || !isValid}
              >
                Create your account
              </Button>
            </Form>
          )}
        </Formik>
      </CreateAccountContainer>
    </Container>
  );
};

export default CreateAccount;
