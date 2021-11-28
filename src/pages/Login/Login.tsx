import Button from '@components/buttons/Button';
import FormTextField from '@components/FormTextField';
import Link from '@components/Link';
import { H1, P } from '@components/Text';
import { useSignIn } from '@lib/auth/auth';
import { AppRoutes } from '@lib/constants';
import useRestrictedRoute from '@lib/hooks/useRestrictedRoute';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import React from 'react';

import { Container, LoginContainer, StyledForm } from './Login.styles';

const Login: NextPage = () => {
  useRestrictedRoute();

  const { signIn, loading } = useSignIn();

  return (
    <Container>
      <LoginContainer>
        <H1>Sign in to your account</H1>

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
                Sign in
              </Button>
            </Form>
          )}
        </Formik>

        <P>
          No account? <Link href={AppRoutes.SignUp}>Create one now</Link>
        </P>
      </LoginContainer>
    </Container>
  );
};

export default Login;
