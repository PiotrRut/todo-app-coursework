import Button from '@components/buttons/Button';
import FormTextField from '@components/FormTextField';
import { useSignIn } from '@lib/auth/auth';
import { AppRoutes } from '@lib/constants';
import useRestrictedRoute from '@lib/hooks/useRestrictedRoute';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { Container, StyledForm } from './Login.styles';

const Login: NextPage = () => {
  useRestrictedRoute();

  const { signIn, loading } = useSignIn();

  return (
    <Container>
      <h1>Log in!</h1>

      <Formik
        initialValues={{ email: '', plaintextPassword: '' }}
        onSubmit={({ email, plaintextPassword }) =>
          signIn(email, plaintextPassword)
        }
      >
        {({ values }) => (
          <Form>
            <StyledForm>
              <FormTextField
                name="email"
                label="Email address"
                marginBottom={10}
                autoComplete="new-email"
                autoFocus
              />

              <FormTextField
                name="plaintextPassword"
                label="Password"
                type="password"
                autoComplete="new-password"
                marginBottom={30}
              />
            </StyledForm>
            <Button
              name="sign-in"
              type="submit"
              loading={loading}
              disabled={!Object.values(values).every((v) => v)}
            >
              Log in
            </Button>
          </Form>
        )}
      </Formik>

      <p>
        No account? no problem -{' '}
        <Link href={AppRoutes.SignUp}>create one now</Link>
      </p>
    </Container>
  );
};

export default Login;
