import Button from '@components/Button';
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
        {({ values, handleChange }) => (
          <Form>
            <StyledForm>
              <input name="email" onChange={handleChange} />
              <input name="plaintextPassword" onChange={handleChange} />
            </StyledForm>
            <Button
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
