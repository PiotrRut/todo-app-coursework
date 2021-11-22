import Button from '@components/Button';
import { useCreateAccount } from '@lib/auth/auth';
import useRestrictedRoute from '@lib/hooks/useRestrictedRoute';
import { Field, Form, Formik } from 'formik';
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
        {({ values, errors, touched, isValid }) => (
          <Form>
            <StyledForm>
              <Field name="firstName" placeholder="First name *" />
              {errors.firstName && touched.firstName && (
                <p>{errors.firstName}</p>
              )}
              <Field name="lastName" placeholder="Last name *" />
              {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
              <Field name="email" placeholder="Email address *" />
              {errors.email && touched.email && <p>{errors.email}</p>}
              <Field
                name="plaintextPassword"
                placeholder="Password *"
                type="password"
              />
              {errors.plaintextPassword && touched.plaintextPassword && (
                <p>{errors.plaintextPassword}</p>
              )}
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
